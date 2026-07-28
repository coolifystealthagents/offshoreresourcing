#!/usr/bin/env python3
"""Build the self-authored, reusable Offshore Resourcing background library."""

from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / "thumbnail" / "brand_config.json"


def hex_color(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def build_background(index: int, name: str, output: Path, colors: dict[str, str]) -> None:
    width, height = 1200, 630
    ink = hex_color(colors["ink"])
    slate = hex_color(colors["slate"])
    teal = hex_color(colors["teal"])
    image = Image.new("RGB", (width, height), ink)
    draw = ImageDraw.Draw(image, "RGBA")
    phase = index * 0.47
    for y in range(height):
        wave = (math.sin(y / (62 + index % 5 * 7) + phase) + 1) / 2
        mix = min(1, 0.12 + 0.24 * wave + 0.30 * y / height)
        color = tuple(int(ink[c] * (1 - mix) + slate[c] * mix) for c in range(3))
        draw.line((0, y, width, y), fill=color)
    mode = index % 6
    for n in range(8):
        x = 640 + ((n * 137 + index * 53) % 650)
        y = -80 + ((n * 97 + index * 41) % 720)
        size = 70 + ((n * 31 + index * 17) % 150)
        alpha = 30 + (n % 3) * 16
        if mode in (0, 3):
            draw.rounded_rectangle((x, y, x + size * 1.7, y + size), 22, fill=(*teal, alpha), outline=(255, 255, 255, 28), width=2)
        elif mode in (1, 4):
            draw.ellipse((x, y, x + size, y + size), fill=(*teal, alpha), outline=(255, 255, 255, 30), width=3)
        else:
            draw.line((x, y, x + size, y + size // 2), fill=(*teal, alpha + 20), width=10)
            draw.ellipse((x - 9, y - 9, x + 9, y + 9), fill=(255, 255, 255, 90))
            draw.ellipse((x + size - 9, y + size // 2 - 9, x + size + 9, y + size // 2 + 9), fill=(*teal, 150))

    draw.rectangle((0, 0, 520, height), fill=(*ink, 118))
    image.save(output, "WEBP", quality=90, method=2)


def main() -> None:
    config = json.loads(CONFIG.read_text(encoding="utf-8"))
    output_dir = ROOT / config["background_directory"]
    output_dir.mkdir(parents=True, exist_ok=True)
    for index, concept in enumerate(config["concepts"]):
        build_background(index, concept, output_dir / f"{concept}.webp", config["colors"])
    sheet = Image.new("RGB", (1200, 900), hex_color(config["colors"]["mist"]))
    sheet_draw = ImageDraw.Draw(sheet)
    try:
        face = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 16)
    except OSError:
        face = ImageFont.load_default()
    for index, concept in enumerate(config["concepts"]):
        x, y = (index % 5) * 240, (index // 5) * 150
        preview = Image.open(output_dir / f"{concept}.webp").resize((232, 122))
        sheet.paste(preview, (x + 4, y + 4))
        sheet_draw.text((x + 8, y + 129), f"{index + 1:02d}  {concept}", font=face, fill=hex_color(config["colors"]["ink"]))
    sheet.save(output_dir / "_library-preview.webp", "WEBP", quality=88, method=2)
    print(f"Built {len(config['concepts'])} reusable backgrounds in {output_dir.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
