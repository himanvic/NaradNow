# Changelog

## Explore India and quiz cursor fix — 2026-10-24

- Added a collapsible Explore India section with animated Top Cities / Top States tabs.
- Counts only locations mentioned in the currently loaded headlines and labels these as mentions, not a national ranking.
- Selecting a place searches the feed for matching headlines.
- Restores the system cursor while the native quiz dialog is open, then re-enables the custom cursor after close when allowed.
- Reduced the custom cursor's size and stroke weight to make it less distracting.
- Bumped the headline cache key and service-worker cache version so updated client files are picked up after deployment.


## NaradNow UI/UX upgrade — 2026-10-24

- Added Dark Forest, Warm Paper, and Auto theme cycle with system preference support.
- Added editorial Bento feed layout with featured hero, two secondary cards, and horizontal follow-on cards.
- Added semantic category tones, single category badge on story art, language badges and publisher/time/read-duration metadata.
- Replaced the dual-layer cursor with a single high-contrast arrow/hand pointer: no trailing ring, no spring trail, direct pointer tracking, and system cursor fallback for touch/reduced-motion users.
- Added card hover glow/zoom/lift, staggered reveal animations, and top reading-progress bar.
- Added responsive horizontally swipeable sticky category pills and a mobile bottom-sheet Quick Reader.
- Added Quick Reader drawer with summary, bookmark toggle and original-source link.
- Added a six-story hero carousel, `/` search shortcut, spam headline filter and a three-question source quiz from loaded headlines.
- Connected frontend API configuration to the deployed `naradnow-api` Worker and bumped session cache key to avoid stale UI data.
- Updated README and deployment notes.

## Cursor and release-note refinement — 2026-10-24

- Simplified the custom cursor to a single high-contrast arrow/hand inspired by clean macOS-style UI, with no trail or “Read” pill; native cursor is restored on touch and reduced-motion devices.
- Added a visible collapsible “What’s new in NaradNow” panel listing the interface changes in English and Hindi.
- Updated the sidebar quiz copy to describe the feature as available, not a future addition.
- Bumped the service-worker cache to v4 so returning visitors can receive the newest app shell.

## Previous baseline

- Static responsive editorial site with English/Hindi UI, category navigation, search, local bookmarks, NewsData.io and PIB Worker integration.


## Exam prep and feed-quality update — 2026-10-24

- Added an optional UPSC/CSE and SSC/General Awareness study panel while preserving the existing editorial design and news navigation.
- Added keyword-based topic tags, study-angle prompts and locally stored revised markers.
- Added plain-text export for saved stories.
- Expanded quiz question types to use publisher metadata, broad topic suggestions and the feed's official-PIB flag; added a visible limitation note.
- Added NewsData.io next-page token passthrough from the Worker and a “Load more stories” flow in the frontend.
- Improved normalized URL/title de-duplication and filtered additional common gambling/lottery spam terms.
- Bumped static cache version to `v5` and Worker cache namespace to prevent an older cached JSON response from masking the new pagination field.
