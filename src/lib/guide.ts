/**
 * The honest guide.
 *
 * Every word here came from Andy's own answers, October 2026. Spelling was
 * tidied, nothing else. If you are tempted to smooth any of it out, do not:
 * the bluntness is the product.
 *
 * The page at /guide/honest-truths/ renders this, and
 * scripts/build-guide-pdf.mjs prints that same page to the PDF, so the two can
 * never drift apart. Regenerate the PDF whenever this file changes.
 */

export type GuideSection = {
  id: string;
  kicker: string;
  title: string;
  /** Paragraphs. A line starting with "- " becomes a bullet. */
  body: string[];
};

/**
 * The welcome. Drafted by Claude in Andy's voice, 19 October 2026, and awaiting
 * his approval. If he changes it, change it here and regenerate the PDF.
 */
export const guideWelcome = [
  "I am Andy, and I film weddings. Fifteen a year, every one of them myself, from a village on the Staffordshire and Derbyshire border.",
  "This guide exists because of a pattern. The same questions come up on nearly every video call, usually near the end, usually a bit apologetically, as though it is cheeky to ask. How long do you need us for portraits. Is it a problem if we run late. Do we have to do a cake cut.",
  "They are good questions and nobody is answering them properly, because most of what gets written about weddings is written to sell something.",
  "So there is no pitch in here. Some of it is me telling you not to spend money. Some of it is me admitting what a film cannot do, and where your photographer will serve you better than I will. One section is about a kind of disco light I would quite like to see banned, at least for the first dance anyway.",
  "Almost all of it applies whoever you end up booking, and a fair bit of it applies even if you decide not to have a videographer at all.",
  "If it is useful, that is the job done. If it makes you want to talk about your day, even better.",
];

export const guideSections: GuideSection[] = [
  {
    id: "morning",
    kicker: "The morning",
    title: "You are paying for fewer hours than you think",
    body: [
      "I turn up half an hour before the time I have told you I am starting. That half hour is mine, not yours. It lets me say hello to the venue and get set up for the ceremony, so that when the clock does start, you are only paying for hours that are worth something to you.",
      "The sweet spot for starting is about 90 minutes before the dress goes on. By then everyone is in the final stages, the room has a bit of energy in it, and there is enough happening to be worth filming. Earlier than that and you are often paying for three hours of hair being done.",
      "Though no two weddings are the same. It really comes down to the atmosphere in the room and how many details there are to cover.",
      "Here is the part nobody expects. The most useful thing about arriving early is not the footage. It is that I get to say hello to the people who matter to you before any of it starts. By the time the camera matters, your mum has already met me, your best friends have already taken the mickey out of me, and nobody is performing.",
      "That is the whole trick. I do not direct and I do not re-run moments, so the only way to film people who look relaxed is for them to actually be relaxed. Which takes a bit of time and a few conversations.",
    ],
  },
  {
    id: "running-late",
    kicker: "Timings",
    title: "You will run late, and that is usually fine",
    body: [
      "Everything takes longer than you think. Every wedding, without exception. That is not a problem in itself, as long as it does not snowball.",
      "This is where celebrants quietly come into their own. A registrar usually has somewhere else to be straight after you, so there is a hard edge to the morning. A celebrant can flex. If you are honest with yourself and you know you run late, that is worth thinking about when you choose.",
      "From my side, I would rather react to what is actually happening than drag the day back onto a schedule. Real moments beat punctual ones.",
      "One practical thing, and it only applies if you have booked the Core package. I need about 20 minutes in the ceremony room before you to finish setting up and get people mic'd. So if a first look is left very late, I may be in the wrong room for it. On The Complete Story that is not an issue, because there are two of us.",
    ],
  },
  {
    id: "ceremony",
    kicker: "The ceremony",
    title: "Phones, and the thirty second compromise",
    body: [
      "There is only one thing that genuinely ruins ceremony footage, and it is phones. An aisle full of arms holding up screens changes every shot of you walking down it, and it is in the photographs too.",
      "I know asking guests to put them away feels like telling people off. So here is the version that works. Ask your celebrant or registrar to give everyone 30 seconds, near the end, to take a photo. Guests get their picture, everyone knows when their moment is, and the rest of the ceremony stays clear.",
      "If you are marrying in a church, tell them in advance that you are having a videographer. Some churches will not allow filming at all, and finding that out on the morning is too late to do anything about it.",
      "Other than that, do what you like. I love a custom ceremony. Sometimes that is as simple as writing your own vows, sometimes it is flower boys and hidden rings. The stranger it is, the better it tends to film.",
    ],
  },
  {
    id: "speeches",
    kicker: "Speeches",
    title: "Length is a problem for your guests, not for me",
    body: [
      "I do not mind how long the speeches go on. Genuinely. But your guests might, so I would aim to have all of them wrapped up inside 30 to 40 minutes. If you are doing speeches before the food, put plenty of canapés out.",
      "Technically, there are three things worth knowing.",
      "- Each speaker should stand at the side of the top table. It helps me enormously, and it is where the room naturally focuses anyway, because that is how venues are designed.",
      "- Use the microphone, every time, wherever there is one. The table furthest from you will thank you for it. It is also what gives me clean audio for the speeches in your main film and in the standalone speeches film.",
      "- If you want a mic stand or a lectern, ask your venue whether they have one, especially for a speaker who talks with their hands. I can bring a mic stand if not.",
      "The vows and the speeches are what shape a wedding film. Everything else is built around them, so this is the part worth getting right.",
    ],
  },
  {
    id: "confetti",
    kicker: "Confetti",
    title: "Somebody needs to be the confetti fluffer",
    body: [
      "I am aware of how that sounds.",
      "Their job is to mix it up before guests take a handful, so there is plenty of air between each piece. It spreads further when thrown and hangs rather than drops.",
      "Buy the big, light confetti. Avoid seeds, which fall like gravel. You want the stuff that fills the air and stays there for a second.",
      "If you are having cannons, put one on each side, behind the confetti line. Once you have walked past them, they fire over your backs and up, so all of it lands in shot rather than behind the camera.",
      "You do not need to choreograph any of this. I will direct it on the day. It is my favourite moment of a wedding, and it is especially good at The West Mill.",
      "If you need somewhere to buy it, ask me. I have a supplier I would walk over hot coals for.",
    ],
  },
  {
    id: "portraits",
    kicker: "Portraits",
    title: "Fifteen minutes, and five more at golden hour",
    body: [
      "How long is a piece of string. But if you are just walking, talking and sneaking the odd kiss, fifteen minutes is enough. If it is a beautiful day or a beautiful venue, thirty is plenty. It is far less time than most couples brace themselves for.",
      "The one exception is golden hour, which is so good for wedding film that it is worth interrupting things for.",
      "Five minutes. That is all I am asking for.",
      "It usually falls during the meal or somewhere around the speeches, so tell me beforehand if it matters to you and I will keep you posted on the day. You are allowed to change your mind when the moment comes, and plenty of people do.",
      "But if we do get out there, running, dancing and kissing in that light looks majestic, and it is almost always the bit couples point at afterwards.",
    ],
  },
  {
    id: "evening",
    kicker: "The evening",
    title: "The one light that ruins a first dance",
    body: [
      "Nearly every wedding, I bring my own spotlights for the first dance and a couple of songs after it. Not to turn your evening into a studio. Just enough light on your faces that the slow motion works. I put them behind your guests or off to the side, taking up as little of the floor as I can.",
      "There is one thing that genuinely spoils it, and it is a particular kind of DJ light that throws little coloured dots, usually hearts, across everything including your dress.",
      "For the main dancefloor later, go wild. For the first dance, I would rather we used my lights and the venue's uplighters, which are the ones along the walls, so I have proper control of what your faces look like.",
      "You do not need to have that conversation. I speak to the DJ myself. It is their dancefloor at the end of the day, but most of them already know and are happy to help.",
      "Dry ice, for the right couple, is an enthusiastic yes from me.",
      "The first dance itself is non negotiable. I do not care how shy you are. Take the moment, even if it is only 30 seconds. It is a rite of passage and you will want it.",
      "The cake cut, honestly, is not an important shot and it does not work in every venue. If you want it to look good, do it in the middle of the dancefloor with your guests gathered behind you. I will light you properly, and it becomes one of the only photos you will have with everyone in it. Phone lights up, if you fancy it.",
    ],
  },
  {
    id: "spend",
    kicker: "Money",
    title: "Where I would actually spend it",
    body: [
      "First, the honest expectation. Do not expect much of your styling and detail work to appear in the film. That is really photography's job. I will grab some of it, but I will not spend the time on it that your photographer will, because a film is built from moving moments rather than still ones.",
      "That is not a reason to spend less on your decor. It is a reason to know what it is buying.",
      "Three places I would put money instead.",
      "- If there is a long gap between your ceremony and the wedding breakfast, hire entertainment for it. The best I have worked with is Christian Fletcher, who is a host and a magician. I have never seen anyone hold a group and then a whole room like he does.",
      "- Lighting. My background is in events and it always comes back to this. When you book a band or a DJ, check that they or the venue have a proper lighting setup. Lighting does more for the atmosphere of a room, and for how your evening looks on film, than almost anything else you can buy.",
      "- And one that might get me in trouble with friends in the industry. Does the cake need to cost a fortune? At a recent wedding, a handful of the couple's closest friends each brought an evening cake, and there was a lovely array of them on a table for people to pick from. It was better than the alternative and it cost nothing.",
    ],
  },
  {
    id: "hours",
    kicker: "Coverage",
    title: "Do not buy more hours just to buy more hours",
    body: [
      "If you are deciding whether to extend into the evening, the question is whether something is actually happening. Fireworks, sparklers, a planned moment worth having. Those are worth staying for.",
      "More dancefloor is not. After a certain point it is the same room from different angles, and you would be paying for footage that will not make your film.",
      "I would rather tell you that than take the money.",
    ],
  },
];

/** The closing piece. Kept separate because it is the emotional ending. */
export const guideClosing = [
  "A friend once asked me something I have never quite shaken off.",
  "Would you rather look at photographs from your grandparents' wedding, or watch a video of it?",
  "Most people answer that before they have finished hearing the question. And I think once you have answered it, you already know what matters to you.",
  "I love both, for the record. But I know what my heart says.",
  "Here is why that question matters more than it sounds.",
  "Your wedding day will go past in a blur. You will be moved from room to room, hugged by people you have not seen in years, and asked questions from the moment you arrive. Afterwards, almost every couple I have filmed says a version of the same thing. I missed bits of it.",
  "You did. Everybody does. That is not a failure, it is simply what a wedding day is.",
  "So part of my job is handing those bits back to you.",
  "The rest of it only makes sense much later.",
  "Because none of this is really for this year. It is for twenty, thirty, forty years from now. It is how the two of you looked when you were young. It is the love you had for each other, moving and out loud rather than held still in a frame. And it is the people who were in the room with you, some of whom will not always be here.",
];
