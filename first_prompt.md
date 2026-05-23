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
