7850.png
7849.jpg


claude you're my last hope. i need you to clone https://randomtarotcard.com/ almost exactly for my 22 lagniappe deck. i have the images and meaning already in a database. i just. need. the. landing. page.
think this aesthetic. two fonts: display can be Avara, Almendra, or Jacquard 24 and the copy MUST be roboto, open source 3, inter. lighter background and dark card animation. the card is not there at first. first the user only sees a clickable text with imaginative hover animation. the photo (from a url I can later give you) then materializes with a text box below (meaning) and my contact info in display font.


I have a tarot deck I made, consisting of 22 cards, that I call my lagniappe deck. I have the text of the short guidebook to it saved in this repository's actualtext file. What I need from you is a github deployable single page site for mobile AND desktop that simulates a reading for the user, complete with animations of these cards turning over. I'd like the reading to FEEL intentional and real, like it's not accidental that THIS CARD (whichever one it is) was flipped for them. To help that, I think the user should have to click something to start the reading, like an ominous "BEGIN" somewhere on the screen, all alone, or something. Maybe it's animated. Maybe it does something onhover. When they click it, the deck of cards materialises from a wisp of smoke. A card flips over, then the meaning fades in below it. After that, below the card's explanation, my contact information should materialise.  use https://randomtarotcard.com/  as inspiration for this--in fact, feel free to copy as much code from it directly as is useful.  Use a dual font design, and I'm thinking the headers should be Avara, Almendra, or Jacquard 24. Then, make the body text roboto, open source 3, inter. 

---

## Writing good prompts (if you want Claude to change things)

This whole site was built from a written brief like the one above. A few habits make those requests land on the first try:

- **Name the file or element.** "In `script.js`, change the reversal chance to 1 in 5" beats "make reversals rarer."
- **Describe the *feeling*, then the mechanics.** "It should feel like the card chose you — slower flip, a beat of silence before the meaning" gives direction a bullet list can't.
- **Hand over assets and links.** Paste the image URLs, a reference site, a screenshot, a hex color. Specifics in, specifics out.
- **Say where it runs.** "Must look right on a phone in portrait" changes the answer.
- **One change at a time for tricky things.** Big redesigns are fine; subtle animation tuning is easier to nail in small passes.
- **Ask to see it.** "Run it and screenshot the reading" catches what a description can't.

### Seen in the two drafts above

Both notes at the top of this file describe the same site — the same deck, the same smoke, the same flip. The first one gets the whole vision across in a single breath, and honestly that instinct for the *look* and the *sequence* is the hard part; it was already there. The second draft doesn't change the idea at all. It just slows down and says a few of the quiet parts out loud, and those are the bits that gave Claude more to build on:

- **It pointed at something already in the repo.** "saved in this repository's actualtext file" is a thing Claude can open and read. "I have the images and meaning in a database" is just as real, but it's out of reach — Claude can't see it, so it can't use it. Wherever the material already lives in the project, naming it helps.
- **It named the feeling, not only the steps.** "I'd like the reading to FEEL intentional… like it's not accidental that THIS CARD was flipped for them" tells Claude *why*. That one sentence quietly steers a hundred small choices that nobody had to spell out.
- **It walked the moment in order.** BEGIN alone → smoke → a card flips → the meaning fades in → the contact appears. A clear sequence turns into a clear build.
- **It left room on purpose.** "Maybe it's animated. Maybe it does something on hover." Offering a direction instead of a rule lets Claude bring something to the table too.
- **It said where it lives.** "github deployable… for mobile AND desktop" set the whole technical shape in half a line.

None of this is one draft being right and the other wrong — the second is really just the first one given a little more room to breathe. Start wherever you start; this page came out of both.

---

## Ideas you could ask for later

Natural next steps, if you ever want them — each is a one-line request away:

- **Real card art** — the single biggest upgrade; the placeholders are just standing in.
- **A three-card spread** (past / present / future) with a staggered flip.
- **Sound** — a soft ambient bed, a paper *whoosh* on the flip, a hush before the reveal.
- **An opening question** — let the visitor type what's on their mind before BEGIN, and echo it above the card.
- **Card of the day** — the same card all day for a given date.
- **Save / share the reading** as an image, or a link straight to one card.
- **A full deck browser** — a gallery to read every card outside a reading.
- **A custom domain** (it's already an installable, offline-ready app).
