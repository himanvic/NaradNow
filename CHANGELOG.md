# Changelog

## 2026-10-24 — Coordinated quiet-luxury redesign

- Rebuilt the frontend style system around Dark Forest, Sage Mint, Warm Gold and Warm Paper, with consistent typography, borders, spacing and component states.
- Refined the lead story panel and ticker; reduced decorative clutter and kept the What’s New panel collapsed until requested.
- Reworked story cards, metadata, source labels, right-rail modules, official desk, quiz dialog and Quick Reader styles as one coherent responsive system.
- Removed external web-font dependencies for a more reliable static/offline app shell.
- Restored the native system cursor and retained only subtle pointer-position card glow on desktop; removed the custom cursor overlay so the pointer stays visible in quiz dialogs.
- Refined mobile/tablet layout, sticky swipeable categories, phone bottom-sheet reader, touch feedback and reduced-motion behavior.
- Preserved the existing NewsData.io/PIB Worker contract and endpoint; no Worker/API changes are required for this frontend redesign.
- Updated cache version to `naradnow-static-v9` so the updated app shell is picked up after deploy.

## Existing features preserved

- English/Hindi interface, theme cycling, source-linked news, search, category filtering and ticker.
- Story carousel, Quick Reader, local saved stories and `.txt` export.
- UPSC/SSC study tags, revision markers, current-affairs quiz and Explore India mention cards.
- Worker-based news integration, duplicate/spam filtering and best-effort offline fallback.


## Screen-recording review fixes — 24 Oct 2026

- Rebuilt the quiz to avoid arbitrary missing-word questions and unrelated distractors. It now uses up to three questions grounded in loaded headlines, actual publisher labels, and official PIB labels where those sources are available.
- Changed generic top-feed image badges from “FOR YOU” to “NEWS”; navigation still uses “For you”.
- Filtered clearly promotional music/song/video headlines from the main feed and News Pulse without broadly suppressing cultural reporting.
- Bumped the service-worker cache version to refresh the updated frontend.
