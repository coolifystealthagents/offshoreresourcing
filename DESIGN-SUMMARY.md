# Design summary

- **Concept:** Global Operations. A luminous, dimensional system for Offshore Resourcing: ice-blue surfaces, deep navy, electric cobalt and cyan, Instrument Sans display, floating glass role cards, a rotating dotted globe and restrained technical detail. It is intentionally distinct from the earlier blueprint, claims-ledger, switchboard and archipelago identities.
- **Reference use:** The hero uses a generated editorial photograph and a live canvas globe. The Austin Distel workplace photograph remains in the “Inside a working lane” section with its original attribution. The StealthAgents logo, attribution and official Bacolod team photograph remain unedited.
- **Typography:** Locally hosted Instrument Sans for display and Manrope for body, labels and controls.
- **Palette:** Deep navy `#071426`, electric cobalt `#2f55ff`, cyan `#19b6d9`, ice paper `#f3f6fc`, mist `#e8eef9`, white, slate `#44536b`, amber `#f2b84b` and a restrained status green.
- **Layout:** 1200px maximum shell, full-screen homepage first fold, compact services hero with the first service titles visible, complete above-fold contact form, and 24-report research pagination.
- **Shape language:** Rounded media and cards, glass chips, blue-tinted shadows, gradient actions, glowing connector lines and a reading-progress bar.
- **First folds:** Luminous ice hero with a dotted field and drifting aurora, large ink headline with a cobalt phrase, four operating checks, gradient action, and a 3D stage with a rotating globe, role-brief card, review card and coverage card.
- **Navigation:** Sticky translucent white header with Home, Services and Contact Us; StealthAgents attribution in the header and footer; Blog and Research in the footer; mobile uses a rounded menu.
- **Content families:** Commercial, service detail, editorial, research, contact, scheduler, legal, confirmation, 404, header and footer share the same tokens while retaining purpose-specific layouts.
- **Motion:** Canvas globe with connection arcs, floating and cursor-tilted cards, drifting aurora light, capability ticker, scroll progress, safe scroll reveals and hover lifts. Content is server-rendered and never depends on a hard refresh; reveals have a failsafe and reduced-motion fallback.
- **Primary implementation:** `app/site.css` provides the premium base layer, `app/dynamic.css` adds depth and motion, `app/Globe.tsx` renders the globe and `app/MotionFX.tsx` handles safe reveals, tilt and progress.
