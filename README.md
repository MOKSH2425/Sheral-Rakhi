# Sherkhan nu Scrapbook — Rakhi 2026

This is the upgraded source version of the Sheral Rakhi surprise website.

## What changed
- Reworked the copy around the actual Moksh + Sheral relationship instead of generic Rakhi language.
- Kept the scrapbook aesthetic but made the story flow more intentional: bond → growing up → distance → ordinary memories → one important memory → Sherkhan files → big-brother relationship → interactive test → Rakhi letter → photo wall.
- Added the interactive **Sherkhan Test**.
- Used the real memory photos throughout the main photo wall.
- Kept the illustrated assets as an explicitly labelled "future pages" section so imagined art is never confused with real memories.
- Added stronger mobile-first spacing, navigation, progress cues, and accessibility-friendly controls.

## Run
```bash
npm install
npm run dev
```

For production:
```bash
npm run build
npm run preview
```

All personal content lives in `src/data/content.js`, so future wording/photo-caption changes can be made there without changing the page structure.
