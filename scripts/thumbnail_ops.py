#!/usr/bin/env python3
"""Deterministic assignment, reporting, compositing, and audit operations."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import Counter
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
CONFIG_PATH = ROOT / "thumbnail" / "brand_config.json"
CONTENT_PATH = ROOT / "content"
FRONTMATTER = re.compile(r"^---\r?\n([\s\S]*?)\r?\n---\r?\n")


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, value: dict) -> None:
    path.write_text(json.dumps(value, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def config() -> dict:
    return load_json(CONFIG_PATH)


def require_approved(cfg: dict) -> None:
    if not cfg.get("approved") or not cfg.get("approval_reference"):
        raise SystemExit("Background library is not approved. Set approved=true and record approval_reference first.")


def stable_rank(slug: str, concept: str) -> str:
    return hashlib.sha256(f"{slug}\0{concept}".encode()).hexdigest()


def assign(slugs: list[str]) -> None:
    cfg = config()
    require_approved(cfg)
    manifest_path = ROOT / cfg["manifest"]
    manifest = load_json(manifest_path)
    assignments = manifest.setdefault("assignments", {})
    valid = set(cfg["concepts"])
    counts = Counter(value["concept"] for value in assignments.values() if value["concept"] in valid)
    for slug in sorted(set(slugs)):
        if slug in assignments and assignments[slug]["concept"] in valid:
            continue
        minimum = min(counts.get(concept, 0) for concept in cfg["concepts"])
        choices = [concept for concept in cfg["concepts"] if counts.get(concept, 0) == minimum]
        concept = min(choices, key=lambda candidate: stable_rank(slug, candidate))
        assignments[slug] = {
            "concept": concept,
            "path": f"{cfg['public_path_prefix']}/{slug}.webp",
        }
        counts[concept] += 1
    save_json(manifest_path, manifest)
    report(manifest)


def report(manifest: dict | None = None) -> None:
    cfg = config()
    manifest = manifest or load_json(ROOT / cfg["manifest"])
    counts = Counter(value["concept"] for value in manifest["assignments"].values())
    values = [counts.get(concept, 0) for concept in cfg["concepts"]]
    print("concept,count")
    for concept in cfg["concepts"]:
        print(f"{concept},{counts.get(concept, 0)}")
    spread = max(values) - min(values) if values else 0
    print(f"TOTAL,{sum(values)}")
    print(f"SPREAD,{spread}")
    if spread > 1:
        raise SystemExit("Distribution invariant failed: maximum count spread exceeds 1.")


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        Path("C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    ]
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size)
    return ImageFont.load_default()


def wrap(draw: ImageDraw.ImageDraw, text: str, face: ImageFont.ImageFont, width: int) -> list[str]:
    words, lines, current = text.split(), [], ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if draw.textbbox((0, 0), candidate, font=face)[2] <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines[:4]


def parse_frontmatter(raw: str) -> tuple[dict[str, str], str]:
    match = FRONTMATTER.search(raw)
    if not match:
        raise ValueError("missing YAML frontmatter")
    raw_fields = match.group(1)
    fields: dict[str, str] = {}
    for line in raw_fields.splitlines():
        separator = line.find(":")
        if separator > 0:
            key = line[:separator].strip()
            value = line[separator + 1 :].strip().strip("'\"")
            fields[key] = value
    return fields, match.group(0)


def content_documents() -> list[dict[str, str | Path]]:
    documents = []
    for section in ("research", "alternatives"):
        directory = CONTENT_PATH / section
        if not directory.exists():
            continue
        for path in sorted(directory.glob("*.md")):
            fields, _ = parse_frontmatter(path.read_text(encoding="utf-8"))
            documents.append(
                {
                    "slug": path.stem,
                    "title": fields.get("title", path.stem),
                    "label": fields.get("category", "Offshore hiring guide"),
                    "path": path,
                }
            )
    return documents


def sync_frontmatter() -> list[str]:
    cfg = config()
    manifest = load_json(ROOT / cfg["manifest"])
    updated = []
    for document in content_documents():
        slug = document["slug"]
        item = manifest["assignments"].get(slug)
        if not item:
            continue
        path = document["path"]
        text = path.read_text(encoding="utf-8")
        fields, block = parse_frontmatter(text)
        if fields.get("image") == item["path"]:
            continue
        fields["image"] = item["path"]
        body = block.splitlines()
        for index, line in enumerate(body):
            if line.startswith("image:"):
                body[index] = f"image: {item['path']}"
                break
        else:
            body.insert(1, f"image: {item['path']}")
        updated_text = text.replace(block, "\n".join(body) + "\n")
        path.write_text(updated_text, encoding="utf-8")
        updated.append(slug)
    return updated


def public_image(path: str) -> Path:
    return ROOT / "public" / path.lstrip("/")


def composite(slug: str, title: str, label: str) -> None:
    cfg = config()
    require_approved(cfg)
    manifest = load_json(ROOT / cfg["manifest"])
    item = manifest["assignments"].get(slug)
    if not item:
        raise SystemExit(f"No assignment for {slug}. Run assign first.")
    background = ROOT / cfg["background_directory"] / f"{item['concept']}.webp"
    image = Image.open(background).convert("RGB")
    draw = ImageDraw.Draw(image)
    white = cfg["colors"]["white"]
    teal = cfg["colors"]["teal"]
    label_face, title_face, brand_face = font(28, True), font(58, True), font(24, True)
    draw.rounded_rectangle((72, 72, 390, 122), 25, fill=teal)
    draw.text((94, 80), label.upper(), font=label_face, fill=cfg["colors"]["ink"])
    y = 166
    for line in wrap(draw, title, title_face, 650):
        draw.text((72, y), line, font=title_face, fill=white, stroke_width=1, stroke_fill=cfg["colors"]["ink"])
        y += 70
    draw.text((74, 558), cfg["brand"], font=brand_face, fill=white)
    output = ROOT / cfg["output_directory"] / f"{slug}.webp"
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, cfg["canvas"]["format"], quality=cfg["canvas"]["quality"], method=6)
    print(f"{output.relative_to(ROOT)} ({image.width}x{image.height})")


def audit() -> None:
    cfg = config()
    manifest = load_json(ROOT / cfg["manifest"])
    errors = []
    for slug, item in sorted(manifest["assignments"].items()):
        path = public_image(item["path"])
        if not path.exists():
            errors.append(f"{slug}: missing {item['path']}")
            continue
        with Image.open(path) as image:
            if image.size != (cfg["canvas"]["width"], cfg["canvas"]["height"]) or image.format != "WEBP":
                errors.append(f"{slug}: expected 1200x630 WebP, got {image.size} {image.format}")
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Validated {len(manifest['assignments'])} thumbnail assets.")


def publish() -> None:
    cfg = config()
    require_approved(cfg)
    docs = content_documents()
    slugs = [doc["slug"] for doc in docs]
    assign(slugs)
    manifest = load_json(ROOT / cfg["manifest"])
    for doc in docs:
        slug = doc["slug"]
        if slug not in manifest["assignments"]:
            continue
        title = str(doc["title"])
        composite(slug, title, str(doc["label"]))
    updated = sync_frontmatter()
    if updated:
        print(f"Updated frontmatter for {len(updated)} files: {', '.join(updated)}")
    else:
        print("No frontmatter updates were needed.")
    report(manifest)


def main() -> None:
    parser = argparse.ArgumentParser()
    commands = parser.add_subparsers(dest="command", required=True)
    assign_parser = commands.add_parser("assign")
    assign_parser.add_argument("slugs", nargs="+", type=lambda value: re.sub(r"[^a-z0-9-]", "", value.lower()))
    commands.add_parser("report")
    composite_parser = commands.add_parser("composite")
    composite_parser.add_argument("--slug", required=True)
    composite_parser.add_argument("--title", required=True)
    composite_parser.add_argument("--label", default="Offshore hiring guide")
    commands.add_parser("sync-frontmatter")
    commands.add_parser("publish")
    commands.add_parser("audit")
    args = parser.parse_args()
    if args.command == "assign":
        assign(args.slugs)
    elif args.command == "report":
        report()
    elif args.command == "composite":
        composite(args.slug, args.title, args.label)
    elif args.command == "sync-frontmatter":
        sync_frontmatter()
    elif args.command == "publish":
        publish()
    else:
        audit()


if __name__ == "__main__":
    main()
