# Sherkhan's Scrapbook

A scrapbook-style memory site for Sheral ("Sherkhan"), built for Raksha Bandhan 2026.

Tech: React + Vite + Tailwind CSS + Framer Motion.

## Running it locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Editing content (you'll do this the most)

**Everything you'll want to change lives in one file: `src/data/content.js`**

- `cover` — the landing page title/subtitle/hint text.
- `chapters` — an array, one object per scrapbook page. Each has:
  - `tab` / `tabLabel` — the little page-tab number/name on the right edge.
  - `title` / `kicker` — the big heading and the handwritten line under it.
  - `body` — an array of paragraphs (add/remove/edit freely).
  - `photo` — `{ src, caption, rotate }`. `rotate` is the tilt angle in degrees.
  - `photo2` — optional second photo for a chapter (see "Our Usual").
- `finale` — the closing Rakhi section: intro text, the letter, button labels.

To **add a new chapter**, copy an existing object in the `chapters` array, give it a
unique `id`, and it will automatically get a page tab, nav dot, and scroll section —
no other file needs to change.

To **swap or add photos**: drop the image in `src/assets/photos/`, import it at the
top of `content.js` (see the existing `m01`...`m11` imports), then reference it in a
chapter's `photo.src`.

## Structure

```
src/
  data/content.js       <- all text + photo wiring (edit this most)
  components/
    Cover.jsx            <- landing hero
    Chapter.jsx           <- one scrapbook page/spread (reused per chapter)
    Polaroid.jsx          <- the photo card with tape + flip-to-read-caption
    PageNav.jsx           <- the small dots on the right edge, jump-to-chapter
    Finale.jsx             <- the Rakhi-tying interaction + letter
  App.jsx                 <- assembles Cover + Chapters + Finale
  index.css                <- fonts, paper texture, torn-edge shapes, palette
```

## Deploying

Same flow as the Tichki site — push to GitHub, import into Vercel, done.
Or manually:

```bash
npm run build      # outputs to dist/
```
then drag the `dist/` folder into Vercel/Netlify, or `vercel --prod` from this folder.

## Notes for next time

- The illustrated (Ghibli/anime-style) photo used in Chapter 1 was one you already
  had — this build doesn't include an image-generation tool, so any *additional*
  illustrated versions need to be generated elsewhere (e.g. an AI image app) and
  dropped into `src/assets/photos/`, then wired into `content.js` the same way.
- All real photos get a light sepia/warmth filter via CSS (`Polaroid.jsx`) rather
  than being edited — nothing about them was altered.
- Colors, fonts, and paper-texture settings are all in `tailwind.config.js` and
  `src/index.css` if you want to shift the palette.
