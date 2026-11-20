# Design summary

- **Concept:** Work Architecture. A technical blueprint identity for Offshore Resourcing that is deliberately distinct from the claims ledger, switchboard, and archipelago systems used by sibling sites. Cool paper grid fields, oversized ink Syne display, acid-lime highlight bars, electric-blue actions, hairline rules, and realistic recruiting-operations photography.
- **Reference use:** The homepage photograph remains the 1800 × 1012 optimized crop of Austin Distel's workplace collaboration photograph ([Unsplash source](https://unsplash.com/photos/three-men-sitting-on-chair-beside-tables-mpN7xjKQ_Ns)), used under the [Unsplash License](https://unsplash.com/license). Its caption identifies the people as illustrative rather than employees of Offshore Resourcing. The eleven service and index photographs are generated editorial images stored in `public/images/photos/`. No Stealth Agents copy, unsupported claims, or unapproved proprietary media is copied.
- **Typography:** Locally bundled Syne variable for display, Karla variable for body copy, and DM Mono for labels, metadata, and controls.
- **Palette:** Ink `#0c1226`, electric blueprint blue `#2b3bff`, acid lime `#dcff4f`, cool paper `#f1f4fa`, white, and slate copy `#39425c`.
- **Layout:** 1240px maximum shell, 20px desktop gutters, full-screen homepage first fold, compact services hero that surfaces the directory immediately, and dense three-column service and editorial indexes.
- **Shape language:** Zero-radius controls, cards, and panels; one-pixel ink outlines; hairline grid fields; lime corner labels; no soft shadows.
- **First folds:** Full-screen paper grid hero with ink display type and a lime highlight, a framed documentary photo, four operating checks, and one blue action. The services fold is compact enough to reveal the first directory lane above the fold.
- **Navigation:** Sticky white header with Home, Services, and Contact Us; subsidiary identity stays primary; StealthAgents attribution remains visible on desktop and in the footer; mobile uses a compact accessible menu.
- **Content families:** Commercial, service detail, editorial, research, contact, scheduler, legal, confirmation, 404, header, and footer share the same tokens while retaining layouts suited to their purpose.
- **Motion:** Fast interface transitions, a delayed pausable review marquee, and reduced-motion fallbacks.
- **Primary implementation:** `app/blueprint.css`, loaded after legacy styles as the authoritative visual layer. Route-owned styling remains in the contact module and shared editorial components.
