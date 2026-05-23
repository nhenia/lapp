# The Lagniappe Arcana

A one-card tarot reading for the 22-card **Lagniappe Arcana**, a deck shaped by New Orleans. Click **BEGIN**, the deck rises from smoke, a card turns over, and its meaning appears. It works on phones and computers, can be installed like an app, and still works offline. Cards & words by [@_nh_en](https://instagram.com/_nh_en).

## Changing things — no code

Everything you'd want to change lives in the **`control_panel/`** folder. Open a file, read the short notes at the top, type your change, and save. If an edit ever looks wrong, the site quietly falls back to the original — so you can't break it.

- **`settings.md`** — your contact info; how often cards come up reversed.
- **`appearance.md`** — the colors and the fonts.
- **`words.md`** — the words on screen (the BEGIN button, the title, the omen lines).
- **`cards.md`** — each card's title, picture, and writing.
- **`feedback.md`** — a guided notepad. Describe anything you'd rather not do yourself, hand it back, and the notes become real changes.

## Adding the card pictures

In `control_panel/cards.md`, put a picture on a card's **`Image:`** line — a web link, or the name of a file you've added to a `cards/` folder. Until then, a gold fleur-de-lis stand-in is shown. Tall (portrait) pictures look best.

## Putting it online

The site publishes itself through **GitHub Pages**:

1. One time: in the repo, open **Settings → Pages** and set **Source** to **"GitHub Actions."**
2. After that, anything you save goes live on its own a minute or so later.

The web address appears under **Settings → Pages**.

---

*Lagniappe* (lan-yap): a little something extra, given freely.
