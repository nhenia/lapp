# The Lagniappe Arcana

A single-page tarot reading for the **Lagniappe Arcana** — a 22-card Major Arcana deck shaped by the rituals, histories, and everyday magic of New Orleans. Cards & words by [@_nh_en](https://instagram.com/_nh_en).

Visitors land on a lone, breathing **BEGIN**. One click summons the deck from a wisp of smoke, draws a single card, flips it over (upright or reversed), and fades in its meaning — then the contact line. No accounts, no tracking, no build step. Just HTML, CSS, and a little JavaScript.

---

## The experience

1. **BEGIN** sits alone on a parchment field, breathing; on hover it widens and glows.
2. On click it dissolves and the deck **materializes from rising smoke**.
3. A card is drawn and **flips in 3D**, landing **upright (~2/3)** or **reversed (~1/3)** so each pull feels deliberate.
4. The **meaning fades in**: keywords, the reading, the card's *Inquiry*, and its *Environmental Tell*.
5. The **contact** (@_nh_en) materializes last. A quiet *draw another* lets you pull again.

Designed for phones and desktops, and it honors `prefers-reduced-motion`.

---

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup + the fleur-de-lis ornament and Google Fonts link |
| `styles.css` | All styling and animation (parchment ground, dark cards, smoke, flip) |
| `script.js` | The 22 cards' text, the draw choreography, and the editable settings |
| `contact_info.md` | Plain-text contact details shown at the end of the reading — **edit this, no code** |
| `.github/workflows/deploy.yml` | Auto-deploys to GitHub Pages on push to `main` |
| `.nojekyll` | Tells Pages to serve the files as-is |
| `actualtext` | The full source guidebook the card text was drawn from |
| `first_prompt.md` | The original brief that kicked this off |

---

## Customizing

A few knobs live at the top of **`script.js`**:

```js
const IMAGE_BASE = "cards/";      // folder the card art lives in
const IMAGE_EXT  = ".jpg";        // card art file extension
const REVERSAL_CHANCE = 0.32;     // odds a card lands reversed (0 = never)
```

### Contact details

Edit **`contact_info.md`** — no code required. It's plain text, one item per line:

```
Lead: cards & words by
Instagram: _nh_en
Email:
Website:
```

Fill in any of **Instagram, TikTok, Twitter/X, GitHub, Email,** or **Website** (the `@` is optional; a blank value is hidden). The first filled item is shown large, any others appear smaller beneath it, and `Lead` is the little line above. The site reads this file fresh each time it loads.

### Adding the card art

Drop an image per card into a `cards/` folder, named by its **slug**. The art appears automatically; until then a styled placeholder face (numeral + name + fleur-de-lis) is shown, so the site looks finished even with no images.

| # | Card | File to add |
| --- | --- | --- |
| 0 | The Reveler | `cards/the-reveler.jpg` |
| I | The Corner | `cards/the-corner.jpg` |
| II | The Cemeteries | `cards/the-cemeteries.jpg` |
| III | Pontalba & Gumbo | `cards/pontalba-and-gumbo.jpg` |
| IV | The Natchez Steamboat | `cards/the-natchez-steamboat.jpg` |
| V | Jazz | `cards/jazz.jpg` |
| VI | Chicory & Beignets | `cards/chicory-and-beignets.jpg` |
| VII | The Float | `cards/the-float.jpg` |
| VIII | The Bartender | `cards/the-bartender.jpg` |
| IX | The Porch | `cards/the-porch.jpg` |
| X | The St. Charles Streetcar | `cards/the-st-charles-streetcar.jpg` |
| XI | The Rougarou | `cards/the-rougarou.jpg` |
| XII | Red Beans Monday | `cards/red-beans-monday.jpg` |
| XIII | Ash Wednesday | `cards/ash-wednesday.jpg` |
| XIV | The Roux | `cards/the-roux.jpg` |
| XV | Bourbon & The Grid | `cards/bourbon-and-the-grid.jpg` |
| XVI | The Waterline | `cards/the-waterline.jpg` |
| XVII | Bounce | `cards/bounce.jpg` |
| XVIII | Bayou Night | `cards/bayou-night.jpg` |
| XIX | The Crawfish Boil | `cards/the-crawfish-boil.jpg` |
| XX | Second Line | `cards/second-line.jpg` |
| XXI | Mardi Gras Indians | `cards/mardi-gras-indians.jpg` |

Portrait images at a 2:3 ratio look best (they're cropped to fill the card).

### Fonts

Set in `index.html` (the Google Fonts `<link>`) and `styles.css` (the `--display` / `--body` variables). Currently **Almendra** for headers, **Inter** for body.

### Card text

Each card is an object in the `CARDS` array in `script.js` (`name`, `trad`, `keywords`, `upright`, `reversed`, `inquiry`, `tell`). Edit there to tweak wording.

---

## Deploying (GitHub Pages)

1. **Settings → Pages → Build and deployment → Source → "GitHub Actions".** (One time.)
2. Push to `main` (or merge a PR into it). The included workflow builds and publishes automatically.
3. You can also trigger it by hand: **Actions → "Deploy to GitHub Pages" → Run workflow.**

The live URL appears on the workflow run and in **Settings → Pages**.

### Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Ideas for later

Things that would be natural next steps:

- **Real card art** — the single biggest upgrade; the placeholders are just standing in.
- **A three-card spread** (past / present / future) with a staggered flip.
- **Sound** — a soft ambient bed, a paper *whoosh* on the flip, a hush before the reveal.
- **An opening question** — let the visitor type what's on their mind before BEGIN, and echo it above the card.
- **Card of the day** — seed the draw by date so a visitor gets the same card all day.
- **Save / share the reading** as an image, or a deep link like `?card=the-roux`.
- **A full deck browser** — a gallery to read every card outside a reading.
- **Custom domain + PWA** so it installs on a phone and works offline.

---

*Lagniappe* (lan-yap): a little something extra, given freely. Fitting for a deck, and for this.
