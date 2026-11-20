# Design summary

- **Concept:** Premium corporate. Warm neutral surfaces, deep navy, a single muted cobalt accent, Manrope typography, rounded photography and cards, and restrained depth. The system is deliberately calmer and softer than the earlier blueprint, claims-ledger, switchboard, and archipelago identities.
- **Reference use:** The homepage hero uses a generated editorial photograph of Philippines-based professionals. The Austin Distel workplace photograph remains in the “Inside a working lane” section with its original attribution. The official StealthAgents logo, attribution, and Bacolod team photograph remain unedited.
- **Typography:** Locally hosted Manrope variable for display, body, labels, and controls. No monospace or ultra-wide display face.
- **Palette:** Ink `#101828`, deep navy `#16233a`, muted cobalt `#2b4c7e`, warm paper `#f7f5f1`, mist `#efede8`, sand `#e9ddca`, white, and slate copy `#4e5766`.
- **Layout:** 1200px maximum shell, 24px desktop gutters, a full-screen homepage first fold, a compact services hero that surfaces the first service titles above the fold, and a complete above-fold contact form.
- **Shape language:** Rounded media panels, cards with one-pixel warm borders and soft shadows, pill buttons, circular check marks, and quiet dividers.
- **First folds:** Warm paper canvas with a soft radial wash, a compact trust pill, one cobalt phrase inside the headline, four operating checks, a navy action, and a rounded documentary photograph with a floating proof card.
- **Navigation:** Sticky white header with Home, Services, and Contact Us; StealthAgents attribution stays visible in the header and footer; Blog and Research live in the footer; mobile uses a compact rounded menu.
- **Content families:** Commercial, service detail, editorial, research, contact, scheduler, legal, confirmation, 404, header, and footer share the same tokens while retaining layouts suited to their purpose.
- **Motion:** Short hover transitions, subtle card lifts, and reduced-motion fallbacks. No scroll-gated visibility, so content never needs a hard refresh.
- **Primary implementation:** `app/site.css`, loaded after legacy styles as the authoritative visual layer. Route-owned styling remains in the contact module and shared editorial components.
