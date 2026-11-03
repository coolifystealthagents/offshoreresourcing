# Design summary

- **Concept:** Offshore operations, visually connected to Stealth Agents while keeping Offshore Resourcing primary.
- **Reference use:** General Stealth Agents visual grammar only. No reference copy, logo, or proprietary imagery is reproduced.
- **Typography:** Locally bundled Montserrat variable, weights 400 through 800.
- **Palette:** Near-black `#030712`, deep navy `#101828`, white, cool gray `#f7f9fc`, Offshore Resourcing cyan `#22b8dc`, light cyan `#6edcf3`, and restrained green status cues.
- **Layout:** 1280px maximum shell, 24px desktop gutters, 16px mobile gutters, 80px desktop section rhythm, and purpose-specific page compositions.
- **Shape language:** 8px controls, 12px media, 16px cards, 20px conversion panels, subtle borders, and restrained shadows.
- **First folds:** Dark split compositions with concise copy, a strong cyan action, approved documentary or workflow imagery, and useful operating context.
- **Navigation:** Sticky white header with Home, Services, and Contact Us; subsidiary identity stays primary; StealthAgents attribution remains visible on desktop and in the footer; mobile uses a compact accessible menu.
- **Content families:** Commercial, service detail, editorial, research, contact, scheduler, legal, confirmation, 404, header, and footer share the same tokens while retaining layouts suited to their purpose.
- **Motion:** Fast interface transitions, a pausable review marquee, and reduced-motion fallbacks.
- **Primary implementation:** `app/reference-system.css`, loaded after legacy CSS as the authoritative visual layer. Route-owned styling remains in the contact and top-30 comparison CSS modules.
