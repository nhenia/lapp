/* ===================================================================
   The Lagniappe Arcana — single-card reading
   ===================================================================
   EDIT ME:
   - INSTAGRAM: your handle (no @). Drives the link + display at the end.
   - IMAGE_BASE / card.slug: drop art into  cards/<slug>.jpg  and it shows
     automatically. Until then a styled placeholder face is used.
=================================================================== */

const INSTAGRAM = "_nh_en";              // <-- Jen's Instagram handle
const IMAGE_BASE = "cards/";              // folder holding the card art
const IMAGE_EXT = ".jpg";                 // extension of the card art
const REVERSAL_CHANCE = 0.32;             // odds a card lands reversed

const CARDS = [
  { n: "0", slug: "the-reveler", name: "The Reveler", trad: "The Fool",
    keywords: "Liberation · Incognito · Reinvention · Instinct · Thresholds",
    upright: "You are standing at the threshold. Cease demanding the itinerary and step forward. Keep your eyes open, but allow yourself to be surprised. Relinquish the desire for a map and learn to navigate by instinct alone.",
    reversed: "A refusal to cross the threshold out of terror, or conversely, a reckless disregard for gravity. You are either paralyzed or careless.",
    inquiry: "What would you do if you were no longer expected to be the person you were yesterday?",
    tell: "The sudden scent of damp jasmine; stepping off the curb before checking for the streetcar." },

  { n: "I", slug: "the-corner", name: "The Corner", trad: "The Magician",
    keywords: "Skill · Manifestation · Charisma · Agency · Applied Intention",
    upright: "You hold the absolute authority to shape this situation. Speak your intention out loud and begin the work. There is absolute conviction in your agency and the recognition that you possess the exact tools required to alter your circumstance.",
    reversed: "Sleight of hand. The manipulation of others, or worse, the deception of the self. Empty rhetoric masking a lack of substance.",
    inquiry: "You have all the raw materials in front of you. Why are your hands still in your pockets?",
    tell: "The sharp clack of dice on pavement; an offering of coins neatly stacked." },

  { n: "II", slug: "the-cemeteries", name: "The Cemeteries", trad: "The High Priestess",
    keywords: "Secrets · Intuition · Inaction · Ancestry · Receptivity",
    upright: "Still your hands and silence your mouth. The answer is not arriving through logic; it is waiting for you to simply listen. A deep, passive receptivity is required.",
    reversed: "A deliberate severing from the inner voice. Becoming lost in the noise of external opinions and superficial gossip.",
    inquiry: "What truth are you currently expending all your energy trying to un-know?",
    tell: "The drop in temperature when passing a marble tomb; a sudden, heavy silence in a crowded room." },

  { n: "III", slug: "pontalba-and-gumbo", name: "Pontalba & Gumbo", trad: "The Empress",
    keywords: "Abundance · Sanctuary · Corporeal Joy · Confidence · Nourishment",
    upright: "Allow yourself to be nourished. You are permitted to inhabit your joy without apology or justification. Receptivity stands as a sacred act.",
    reversed: "The barren field. Giving until the bone shows; an inability to accept care from others, leading to profound depletion.",
    inquiry: "Where have you convinced yourself that suffering is the only way to earn your keep?",
    tell: "The dense, rich smell of a dark roux browning; heavy, humid air that softens the skin." },

  { n: "IV", slug: "the-natchez-steamboat", name: "The Natchez Steamboat", trad: "The Emperor",
    keywords: "Structure · Authority · Discipline · Boundaries · Legacy",
    upright: "It is time to enforce the boundary. Discipline is not a punishment; it is the scaffolding required to hold your ambition. Claim sovereignty over your own life.",
    reversed: "The descent into tyranny, or the complete collapse of internal order. Rigidity that snaps rather than bends.",
    inquiry: "What kingdom are you building, and who are you keeping outside the walls?",
    tell: "The deep, rhythmic blast of a steam whistle; a perfectly straight line drawn in the dirt." },

  { n: "V", slug: "jazz", name: "Jazz", trad: "The Hierophant",
    keywords: "Lineage · Transmission · Ritual · Apprenticeship · Orthodoxy",
    upright: "There is power in the lineage. Master the fundamentals and respect the tradition before you attempt to dismantle it. Seek the bedrock of generational practices.",
    reversed: "Hollow orthodoxy. Clinging to dogma that no longer serves, or engaging in rebellion merely for the sake of disruption.",
    inquiry: "Which of your deeply held beliefs actually belong to you, and which were simply handed down?",
    tell: "The precise, complex syncopation of a brass band; the scent of old wood and incense in a quiet nave." },

  { n: "VI", slug: "chicory-and-beignets", name: "Chicory & Beignets", trad: "The Lovers",
    keywords: "Alignment · Crossroads · Selection · Sincerity · Integration",
    upright: "This is a defining moment. Do not choose out of convenience or fear; choose the path that resonates in the center of your chest. Accept the crossroads.",
    reversed: "A fractured will. Deceit, either of another or of the self, stemming from an unwillingness to make the hard, honest choice.",
    inquiry: "If you strip away what looks impressive to others, what choice actually lets you breathe?",
    tell: "The stark contrast of powdered sugar falling on black iron; two voices speaking in perfect, unprompted unison." },

  { n: "VII", slug: "the-float", name: "The Float", trad: "The Chariot",
    keywords: "Momentum · Ambition · Focus · Sovereignty · Willpower",
    upright: "Set your gaze on the horizon and do not let up on the reins. Victory requires singular, undivided intent. Harness relentless forward motion.",
    reversed: "A catastrophic loss of control. Aggression without aim, resulting in a fractured axle and total burnout.",
    inquiry: "You have the velocity, but do you actually know where you are driving?",
    tell: "The physical vibration of the ground before a parade arrives; the smell of exhaust and crushed flowers." },

  { n: "VIII", slug: "the-bartender", name: "The Bartender", trad: "Strength",
    keywords: "Restraint · Endurance · Authority · Sanctuary · Tenderness",
    upright: "Your power lies in your restraint. Remain steady, breathe through the chaos, and handle the wildness with a gentle hand. Subdue the feral aspects of the self with profound tenderness.",
    reversed: "The erosion of the spirit. A hardening of the heart where compassion turns to bitter resentment and exhaustion.",
    inquiry: "Why do you feel the need to roar when a quiet word would command the room?",
    tell: "The meticulous, rhythmic wiping down of a mahogany bar; a deep exhale in a crowded, noisy room." },

  { n: "IX", slug: "the-porch", name: "The Porch", trad: "The Hermit",
    keywords: "Withdrawal · Solitude · Observation · Self-Knowledge · Reflection",
    upright: "Retreat is not a surrender. Gather your energy, step away from the noise, and seek your own counsel. Step back from collective entanglement.",
    reversed: "A descent into the cave. Solitude curdling into fearful isolation, avoidance, and a refusal to engage with the living world.",
    inquiry: "What voice are you hoping to hear once you finally turn off all the lights?",
    tell: "The solitary glow of a cigarette ember in the dark; the rhythmic, slow creak of a wooden rocking chair." },

  { n: "X", slug: "the-st-charles-streetcar", name: "The St. Charles Streetcar", trad: "Wheel of Fortune",
    keywords: "Cycles · Transition · Adaptability · Indifference · Surrender",
    upright: "The wheel is turning. Do not waste your energy fighting the momentum; adjust your stance and ride the transition. Adaptability is demanded.",
    reversed: "The friction of denial. Being dragged along the gravel because you refuse to accept that the era has ended.",
    inquiry: "What are you clinging to that is already halfway out the door?",
    tell: "The metallic screech of iron wheels navigating a bend; a sudden, unexpected shift in the prevailing wind." },

  { n: "XI", slug: "the-rougarou", name: "The Rougarou", trad: "Justice",
    keywords: "Accountability · Integrity · Equilibrium · Reckoning · Truth",
    upright: "The truth is arriving, unvarnished and exact. Ensure your hands are clean, and accept the outcome with dignity. Align private actions with moral philosophy.",
    reversed: "The evasion of the mirror. Corruption, severe bias, and a cowardly refusal to take responsibility for the harm caused.",
    inquiry: "If your actions were weighed on a scale today, which way would the iron tip?",
    tell: "A sudden, chilling howl in the distance; the stark, unforgiving glare of midday sun on white concrete." },

  { n: "XII", slug: "red-beans-monday", name: "Red Beans Monday", trad: "The Hanged Man",
    keywords: "Suspension · Pause · Sacrifice · Surrender · Vantage Point",
    upright: "Do not force the door. The answers you seek require a different vantage point. Surrender to the pause.",
    reversed: "Pointless martyrdom. Hanging on the cross not for revelation, but for pity, leading to bitter stagnation.",
    inquiry: "What would happen if you stopped thrashing against the ropes and simply hung still?",
    tell: "The slow, mesmerizing drip of water from a Spanish moss branch; the heavy, quiet lethargy of a Monday afternoon." },

  { n: "XIII", slug: "ash-wednesday", name: "Ash Wednesday", trad: "Death",
    keywords: "Ending · Mortality · Transition · Clearing · Renewal",
    upright: "The season is over. Honor the grief, but let the ashes fall where they may. Clean the slate. Allow obsolete versions of yourself to perish.",
    reversed: "The horror of the rot. Refusing to bury the dead, resulting in a toxic clinging that infects the present.",
    inquiry: "What is already dead in your life that you are still trying to dress up and drag around?",
    tell: "A smudge of gray ash; the stark, quiet morning streets after a chaotic festival night." },

  { n: "XIV", slug: "the-roux", name: "The Roux", trad: "Temperance",
    keywords: "Synthesis · Transformation · Meticulousness · Equilibrium · Patience",
    upright: "This requires exact proportion and deep patience. Do not force the heat. Stir continuously and allow the elements to integrate.",
    reversed: "Volatility and extreme fluctuation. A chaotic swinging between polarities, acting on raw impulse and ruining the mixture.",
    inquiry: "Where are you rushing the process and risking burning the foundation?",
    tell: "The precise, slow pour of liquid from one vessel to another; the subtle, deepening color of flour and oil in cast iron." },

  { n: "XV", slug: "bourbon-and-the-grid", name: "Bourbon & The Grid", trad: "The Devil",
    keywords: "Bondage · Extraction · Dependency · Illusion · Obsession",
    upright: "Look at the geography of your vice. Name the thing that has you by the throat, and acknowledge how you have colluded with it. Recognize structural traps.",
    reversed: "The agonizing withdrawal. The forceful, violent breaking of the chain and the painful, blinding step into the light of recovery.",
    inquiry: "You hold the key in your hand. Why are you choosing to remain in the cell?",
    tell: "The sticky residue of spilled liquor on asphalt; a neon sign flickering relentlessly in a windowless room." },

  { n: "XVI", slug: "the-waterline", name: "The Waterline", trad: "The Tower",
    keywords: "Failure · Rupture · Infrastructure · Demolition · Revelation",
    upright: "Do not attempt to hold the walls up. Let the structure fall. It is brutal, but it is the only way to find solid ground.",
    reversed: "The prolonged terror. Willfully ignoring the cracks in the foundation, delaying the inevitable collapse and increasing the damage.",
    inquiry: "Look at the rubble. What were you building on a fault line?",
    tell: "A sudden, jagged crack in drywall; the ominous, distinct smell of ozone right before a lightning strike." },

  { n: "XVII", slug: "bounce", name: "Bounce", trad: "The Star",
    keywords: "Hope · Restoration · Mutual Aid · Grace · Vital Force",
    upright: "Drink the water. The destruction is behind you. Allow yourself to heal, and trust the quiet light returning to your life.",
    reversed: "The refusal of the cure. Cynicism, profound despair, and an inability to recognize the lifeline being thrown to you.",
    inquiry: "Now that the worst has happened and you are still breathing, what will you create?",
    tell: "The heavy, rhythmic baseline felt in the chest; the cool, clear feeling of water breaking a fever." },

  { n: "XVIII", slug: "bayou-night", name: "Bayou Night", trad: "The Moon",
    keywords: "Ambiguity · Illusion · Anxiety · Intuition · Shadowlands",
    upright: "Your eyes will lie to you in the dark. Trust your viscera. Move slowly, and do not make sudden decisions until the sun rises.",
    reversed: "The breaking of the dawn. The agonizing, but necessary, dissolution of the fog, revealing the stark truth of the situation.",
    inquiry: "What shape is moving in the water just beneath your boat?",
    tell: "The low, guttural hum of insects in humid air; the optical illusion of moonlight distorting distance on the water." },

  { n: "XIX", slug: "the-crawfish-boil", name: "The Crawfish Boil", trad: "The Sun",
    keywords: "Clarity · Vitality · Celebration · Presence · Abundance",
    upright: "Step fully into the light. This is a resounding confirmation. Absorb the warmth and let it feed your roots.",
    reversed: "The scorched earth. Ego obscuring the light, severe burnout from overexposure, or a stubborn refusal to accept joy.",
    inquiry: "Are you brave enough to let yourself be entirely happy, without waiting for the tragedy?",
    tell: "The sharp, pungent bite of cayenne and lemon in the air; sweat on the brow and laughter ringing over a long table." },

  { n: "XX", slug: "second-line", name: "Second Line", trad: "Judgement",
    keywords: "Summons · Awakening · Resurrection · Reckoning · True Vocation",
    upright: "The call has sounded. It is time to render a verdict on your past and step out of the tomb. Rise to the occasion.",
    reversed: "The terror of the horn. Paralysis, profound shame, and the desperate attempt to remain asleep rather than face the work of awakening.",
    inquiry: "You hear the music approaching. Are you going to join the procession, or remain a spectator on the curb?",
    tell: "The piercing, undeniable cry of a brass trumpet tearing through the air; the collective rhythm of hundreds of feet hitting the pavement." },

  { n: "XXI", slug: "mardi-gras-indians", name: "Mardi Gras Indians", trad: "The World",
    keywords: "Integration · Culmination · Mastery · Fulfillment · Cycles",
    upright: "You have woven all the threads together. Claim your mastery, celebrate the culmination, and prepare to step through the final gate. Total integration is achieved.",
    reversed: "The incomplete stitch. Hesitating at the finish line; a lack of closure preventing the final, necessary integration.",
    inquiry: "The ritual is complete. Before the new cycle begins, how will you honor the magnitude of what you have survived?",
    tell: "The heavy, intricate rustle of thousands of hand-sewn beads and feathers; a profound, exhausted silence following a spectacular display." },
];

const OMENS = [
  "The smoke gathers. The deck already knows why you came.",
  "Shuffle the air. One card has been waiting for you.",
  "Hold the question in your chest. Let the cards find it.",
  "The crossroads opens. Something rises to meet you.",
  "Breathe in the haze. The arcana is listening.",
];

/* ---- elements ---- */
const body = document.body;
const beginBtn = document.getElementById("begin");
const smoke = document.getElementById("smoke");
const deck = document.getElementById("deck");
const card = document.getElementById("card");
const cardInner = document.getElementById("cardInner");
const cardImg = document.getElementById("cardImg");
const cardNumeral = document.getElementById("cardNumeral");
const cardName = document.getElementById("cardName");
const cardTrad = document.getElementById("cardTrad");
const cardOrientation = document.getElementById("cardOrientation");
const omen = document.getElementById("omen");
const mKeywords = document.getElementById("meaningKeywords");
const mBody = document.getElementById("meaningBody");
const mInquiry = document.getElementById("meaningInquiry");
const mTell = document.getElementById("meaningTell");
const meaning = document.getElementById("meaning");
const contact = document.getElementById("contact");
const contactHandle = document.getElementById("contactHandle");
const againBtn = document.getElementById("again");

let busy = false;

/* respect reduced-motion: collapse the long pauses */
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const T = (full, lite) => (reduce ? lite : full);

/* contact */
contactHandle.textContent = "@" + INSTAGRAM;
contactHandle.href = "https://instagram.com/" + INSTAGRAM;

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* build a small fanned stack of card-backs that materialize from smoke */
function buildDeck() {
  deck.innerHTML = "";
  const layout = [
    { dx: -14, dy: 10, rot: -7 },
    { dx: 10, dy: 8, rot: 6 },
    { dx: -6, dy: 4, rot: -3 },
    { dx: 6, dy: 2, rot: 3 },
    { dx: 0, dy: 0, rot: 0 },
  ];
  layout.forEach((p, i) => {
    const b = document.createElement("div");
    b.className = "back";
    b.style.setProperty("--dx", p.dx + "px");
    b.style.setProperty("--dy", p.dy + "px");
    b.style.setProperty("--rot", p.rot + "deg");
    b.style.transitionDelay = i * 80 + "ms";
    deck.appendChild(b);
  });
}

/* puffs of rising smoke */
function emitSmoke() {
  smoke.innerHTML = "";
  const count = reduce ? 3 : 7;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "puff";
    p.style.setProperty("--x", 18 + Math.random() * 64 + "%");
    p.style.setProperty("--s", 150 + Math.random() * 160 + "px");
    p.style.setProperty("--dur", 2.6 + Math.random() * 1.6 + "s");
    p.style.setProperty("--delay", Math.random() * 0.5 + "s");
    smoke.appendChild(p);
  }
  smoke.classList.add("smoke--active");
}

/* fill the drawn card's faces */
function dressCard(c, reversed) {
  cardNumeral.textContent = c.n;
  cardName.textContent = c.name;
  cardTrad.textContent = c.trad;
  cardOrientation.textContent = reversed ? "Reversed" : "Upright";

  // try the art; reveal it only if it actually loads
  cardImg.classList.remove("is-loaded");
  cardImg.alt = c.name + " — " + c.trad;
  cardImg.onload = () => cardImg.classList.add("is-loaded");
  cardImg.onerror = () => cardImg.classList.remove("is-loaded");
  cardImg.src = IMAGE_BASE + c.slug + IMAGE_EXT;

  card.classList.toggle("card--reversed", reversed);

  mKeywords.textContent = c.keywords;
  mBody.textContent = reversed ? c.reversed : c.upright;
  mInquiry.textContent = "“" + c.inquiry + "”";
  mTell.textContent = c.tell;
}

/* the full choreography of a single draw */
async function drawCard() {
  const c = pick(CARDS);
  const reversed = Math.random() < REVERSAL_CHANCE;

  // reset card to face-down + hidden
  card.classList.remove("card--flipped", "card--in");
  dressCard(c, reversed);

  // smoke + deck materialize
  emitSmoke();
  buildDeck();
  await wait(60);
  deck.classList.add("deck--in");

  // the drawn card rises out of the haze
  await wait(T(900, 200));
  card.classList.add("card--in");

  // beat, then turn it over
  await wait(T(850, 250));
  body.classList.add("revealed"); // fades the omen out
  card.classList.add("card--flipped");

  // meaning fades up once the flip is underway
  await wait(T(820, 200));
  meaning.classList.add("show");

  // contact materializes last
  await wait(T(900, 200));
  contact.classList.add("show");

  busy = false;
}

async function begin() {
  if (busy) return;
  busy = true;
  omen.textContent = pick(OMENS);
  body.classList.add("summoning", "reveal");
  await wait(T(420, 120)); // let BEGIN dissolve
  await drawCard();
}

async function redraw() {
  if (busy) return;
  busy = true;
  body.classList.add("redrawing");
  body.classList.remove("revealed");
  meaning.classList.remove("show");
  contact.classList.remove("show");
  deck.classList.remove("deck--in");
  card.classList.remove("card--flipped", "card--in");
  smoke.classList.remove("smoke--active");
  omen.textContent = pick(OMENS);
  await wait(T(560, 160));
  body.classList.remove("redrawing");
  await drawCard();
}

beginBtn.addEventListener("click", begin);
againBtn.addEventListener("click", redraw);
