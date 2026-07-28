# Offshore Resourcing thumbnail operations

This directory defines the reusable 30-concept background library and deterministic article assignment manifest. The backgrounds are procedurally drawn by this repository, so no third-party photographic assets or recurring image-model calls are involved.

## Approval gate

Build the candidate library:

```powershell
py -3 scripts/build_thumbnail_library.py
```

Review every file in `public/images/thumbnail-backgrounds`. Before any recurring assignment, an authorized reviewer must update `brand_config.json` with:

```json
{
  "approved": true,
  "approval_reference": "OFFAA-5 interaction or comment identifier"
}
```

The assignment and compositing commands refuse to run without both values.

## Reproducible operations

```powershell
py -3 scripts/thumbnail_ops.py publish
py -3 scripts/thumbnail_ops.py report
py -3 scripts/thumbnail_ops.py audit
```

Existing assignments remain stable. New slugs are sorted and assigned to the least-used concept; a SHA-256 rank breaks ties. The report fails when the difference between most-used and least-used concepts exceeds one.

`publish` discovers both `content/research` and `content/alternatives`, assigns deterministically, composes all thumbnails, and syncs markdown `image:` values to the manifest path. Run `sync-frontmatter` if you only need frontmatter sync after manual assignment.

`thumbnails:assign` in `package.json` now acts as a compatibility wrapper:

- `npm run thumbnails:assign -- <slug> <slug>` -> Python assign command for manual cases.
- `npm run thumbnails:assign` -> full publish flow (assign + compose + sync frontmatter).

`thumbnails:sync-frontmatter` updates only frontmatter image values from existing assignments.

The resulting frontmatter value is the `path` recorded for the slug in `thumbnail/assignments.json`. That same absolute public path must be used for `featuredImage`, Next.js Open Graph `images`, Twitter `images`, and `BlogPosting.image`.

## Delivery check

For every assigned article:

1. Run `audit`.
2. Confirm the frontmatter or article metadata path equals the manifest path.
3. Build the site.
4. Confirm the deployed asset URL returns HTTP 200 with `content-type: image/webp`.
5. Confirm the article HTML exposes that exact URL in `og:image` and `twitter:image`.
