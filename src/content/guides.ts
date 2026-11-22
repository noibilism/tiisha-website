import type { Faq } from "./faq";

/** Inline links in body text are written as [label](/path). Use plain text in FAQ answers. */
export type GuideSection = {
  h2: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
};

export type GuideTable = {
  caption: string;
  head: [string, string, string];
  rows: [string, string, string][];
};

export type Guide = {
  slug: string;
  /** <title> without the brand suffix */
  title: string;
  h1: string;
  description: string;
  /** The direct answer. Keep it under 45 words so it can be quoted on its own. */
  lead: string;
  sections: GuideSection[];
  /** Optional comparison table, shown after the section at index `tableAfter`. */
  table?: GuideTable;
  tableAfter?: number;
  faq: Faq[];
  related: string[];
  published: string;
  modified: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "how-to-choose-an-online-tutor",
    title: "How to choose an online tutor for your child",
    h1: "How to choose an online tutor for your child",
    description:
      "Six things to check before you book an online tutor: identity checks, course fit, how a class runs, recordings, proof of progress and a clear price.",
    lead: "Choose a tutor who has been identity checked, teaches your child's subject and curriculum, and lets you see how they run a class. Book one first class, then judge the fit by what your child can explain afterwards.",
    sections: [
      {
        h2: "Is the tutor who they say they are?",
        paragraphs: [
          "Ask how the platform checks its tutors before you look at anything else. On Tiisha, every tutor passes a photo ID check matched to a live selfie, qualification checks, two referees, a video interview and a bank account in their own name before any parent sees them.",
          "The details are on the [tutor checks page](/tutor-checks).",
        ],
      },
      {
        h2: "Do they teach your child's course?",
        paragraphs: [
          "Match the tutor to your child's school year, curriculum and exam, not only the subject. A tutor who knows one maths course may not know another. Tutors on Tiisha list the grades and curricula they teach, so you can look for the course your child follows.",
          "Start from the subject: [maths](/tutors/maths), [English](/tutors/english), [science](/tutors/science), [Yoruba](/tutors/yoruba) or [Arabic](/tutors/arabic). The full list is on the [subjects page](/tutors).",
        ],
      },
      {
        h2: "How does the tutor run a class?",
        paragraphs: [
          "Ask what a class looks like. A good tutor works through problems with your child instead of doing them for your child, and says what to practise next. On Tiisha the tutor teaches on a shared whiteboard, so your child sees each step written down, and the tutor writes feedback after every class.",
        ],
      },
      {
        h2: "Can you see what happens in a class?",
        paragraphs: [
          "You should be able to. On Tiisha every class is recorded. You can join a live class quietly as an observer, or watch the recording later. If something feels wrong, tell us and we review the recording.",
        ],
      },
      {
        h2: "How will you know it is working?",
        paragraphs: [
          "Look for evidence over reassurance. On Tiisha you get tutor feedback after each class, short assessments that show which topics are secure, and a progress report every month. See [how Tiisha works](/how-it-works) for the full picture.",
        ],
      },
      {
        h2: "Is the price clear before you book?",
        paragraphs: [
          "Check the price you will pay, in your currency, and the cancellation terms before you confirm. On Tiisha each tutor sets their own price, you see it in your currency when you book, and cancellation is free up to 24 hours before a class. More on the [pricing page](/pricing).",
        ],
      },
    ],
    faq: [
      {
        q: "How many tutors should I compare?",
        a: "Two or three is enough. Compare their profiles, then book a first class with the one that fits best.",
      },
      {
        q: "Should I choose the cheapest tutor?",
        a: "Price is one signal. Fit with your child's course, and how your child responds in class, matter more. Book a first class before you commit to more.",
      },
      {
        q: "What if my child does not click with the tutor?",
        a: "Say so after the first class. We help you move to another tutor.",
      },
    ],
    related: ["online-tutor-vs-in-person-tutor", "what-you-need-for-online-classes"],
    published: "2026-11-22",
    modified: "2026-11-22",
  },
  {
    slug: "online-tutor-vs-in-person-tutor",
    title: "Online tutor or in-person tutor: how to decide",
    h1: "Online tutor or in-person tutor: how to decide",
    description:
      "Online and in-person tutoring suit different children and subjects. Compare choice of tutor, travel, recordings, hands-on subjects and very young children.",
    lead: "Choose an online tutor for the best match on subject and course, no travel and recorded classes. Choose an in-person tutor for a very young child, or for hands-on work that needs someone in the room.",
    sections: [
      {
        h2: "When is an online tutor the better choice?",
        list: [
          "You want a tutor who knows a particular course, exam or language, and nobody nearby does.",
          "You want to avoid travel for your child or for the tutor.",
          "You want to see what happens in a class, live or on a recording.",
          "Your child is comfortable on a screen and can write on a shared whiteboard.",
        ],
      },
      {
        h2: "When is an in-person tutor the better choice?",
        list: [
          "Your child is very young and finds it hard to stay focused on a screen.",
          "The subject needs equipment or practical work in the room.",
          "Your child has needs that are easier to meet with someone sitting next to them.",
          "You have a good tutor nearby and your child is happy with them.",
        ],
      },
      {
        h2: "Can you use both?",
        paragraphs: [
          "Yes. Some families keep an in-person tutor for one subject and book an online tutor for another, for example a language that nobody nearby teaches. Pick per subject, not once for everything.",
        ],
      },
      {
        h2: "How do you check safety with an online tutor?",
        paragraphs: [
          "With an online tutor the adult is never in your home, and you can watch. On Tiisha every tutor is identity checked before parents see them, and every class is recorded. Read [how we check every tutor](/tutor-checks). With any tutor, in person or online, check who they are before the first class.",
        ],
      },
    ],
    table: {
      caption: "Online and in-person tutoring compared",
      head: ["", "Online tutor", "In-person tutor"],
      rows: [
        ["Choice of tutor", "Not limited to people nearby.", "Limited to tutors who can reach you, or whom you can reach."],
        ["Travel", "None. Your child joins from a device.", "Travel each way, for your child or the tutor."],
        ["Seeing the class", "On Tiisha, every class is recorded and you can observe live.", "Only if you are in the home or arrange a recording."],
        ["Practical work", "The tutor can explain a method but cannot handle your child's equipment.", "The tutor can work with equipment in the room."],
        ["Very young children", "Needs a parent nearby, and short classes suit the youngest.", "A tutor in the room can keep a young child's attention more easily."],
        ["What you need", "A phone, tablet or laptop and a steady connection.", "A table and a place to sit."],
        ["Price", "Set by each tutor. Compare actual prices.", "Set by each tutor. Compare actual prices."],
      ],
    },
    tableAfter: 1,
    faq: [
      {
        q: "Is online tutoring as good as in-person tutoring?",
        a: "It depends on the child, the subject and the tutor. Many subjects work well on a shared whiteboard. Very young children and practical subjects are usually easier in person.",
      },
      {
        q: "Is online tutoring cheaper than in-person tutoring?",
        a: "Not necessarily. Each tutor sets their own price in both cases, so compare the prices of the tutors you are considering.",
      },
      {
        q: "Can I watch an online class?",
        a: "On Tiisha, yes. Join live as an observer or watch the recording.",
      },
    ],
    related: ["how-to-choose-an-online-tutor", "what-you-need-for-online-classes"],
    published: "2026-11-22",
    modified: "2026-11-22",
  },
  {
    slug: "what-you-need-for-online-classes",
    title: "What you need for online tutoring classes",
    h1: "What you need for online tutoring classes",
    description:
      "A phone, tablet or laptop, a steady connection and a quiet spot. Classes run inside Tiisha, so you need no extra video-call subscription.",
    lead: "You need a phone, tablet or laptop, a steady internet connection and a quiet place to sit. Classes run inside Tiisha with a shared whiteboard, so you do not need an extra video-call subscription.",
    sections: [
      {
        h2: "Which device works best?",
        paragraphs: [
          "Any of them works. A phone is enough to join a class and to write on the whiteboard. A tablet or laptop gives more room. For [coding](/tutors/coding), a laptop is the practical choice.",
        ],
      },
      {
        h2: "Do we need a separate video-call app or subscription?",
        paragraphs: [
          "No. The live video, the shared whiteboard and the recording are all part of the class on Tiisha. You do not need a separate video-call subscription or account to join.",
        ],
      },
      {
        h2: "Do we need to install anything?",
        paragraphs: [
          "No. You can join from a browser. The apps are there if you want one-tap joining and reminders. Where each app stands is listed in the [Get the app](/#get-the-app) section on the home page.",
        ],
      },
      {
        h2: "How does the shared whiteboard work?",
        paragraphs: [
          "The tutor and your child write and draw on the same board at the same time. Your child can draw from a phone, tablet or laptop. A bigger screen gives more room, which helps for [maths](/tutors/maths) working and for writing in [Arabic](/tutors/arabic).",
        ],
      },
      {
        h2: "What should we prepare for the first class?",
        list: [
          "Your child's school year and curriculum.",
          "The topic your child finds hardest right now.",
          "Homework or past papers to work on together.",
          "Paper and a pen for notes.",
          "A charged device in a quiet spot, tested with the connection your child will use.",
        ],
      },
    ],
    faq: [
      {
        q: "Can my child join from a phone?",
        a: "Yes. The whiteboard works on a phone, tablet or laptop, and your child can draw on it from any of them. A bigger screen gives more room.",
      },
      {
        q: "Is the class recorded?",
        a: "Yes. Every class is recorded, so your child can replay the part they missed.",
      },
      {
        q: "Do tutors need a laptop?",
        a: "No. The tutor app has everything needed to teach, including a whiteboard.",
      },
    ],
    related: ["how-to-choose-an-online-tutor", "online-tutor-vs-in-person-tutor"],
    published: "2026-11-22",
    modified: "2026-11-22",
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
