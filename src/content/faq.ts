export type Faq = { q: string; a: string };

export function coreFaq(): Faq[] {
  return [
    {
      q: "Who are the tutors?",
      a: "Teachers, graduates and subject specialists from around the world, each one chosen for the subjects and grades they teach. Each one is verified before they can teach.",
    },
    {
      q: "How do I know a tutor is real?",
      a: "They pass an ID and live selfie check, and we verify their qualifications and referees. You will see a verified badge on their profile.",
    },
    {
      q: "What if my child does not click with the tutor?",
      a: "Say so after the first class. We help you move to another tutor.",
    },
    { q: "Can I watch the class?", a: "Yes. Join live as an observer or watch the recording." },
    {
      q: "Does it follow my child's school syllabus?",
      a: "Tutors teach to the curriculum and exams your child follows. Tell us the school year and curriculum when you sign up and we show tutors who teach it.",
    },
    {
      q: "Can my child prepare for an exam?",
      a: "Yes. Tell us the exam when you sign up. We show tutors who teach it, with practice assessments in the same style.",
    },
    {
      q: "What time zone are classes in?",
      a: "Yours. Times show in your time zone. If your tutor is in another part of the world, they see their own.",
    },
    {
      q: "Do we need a laptop?",
      a: "No. A phone works. A laptop or tablet gives a bigger whiteboard.",
    },
    {
      q: "Can I pay in my own currency?",
      a: "Yes. Each tutor sets their own price, and you see it in your currency when you book.",
    },
  ];
}

/** Tutor questions that are safe to show on any page. */
export const TUTOR_FAQ: Faq[] = [
  {
    q: "Can I teach families in other countries?",
    a: "Yes. Classes are live video. Times show in each person's own time zone.",
  },
  {
    q: "What currency am I paid in?",
    a: "You set your price in your own currency, and earnings pay out to your bank account.",
  },
  {
    q: "Do I need a laptop?",
    a: "No. The app has everything you need to teach, including a whiteboard.",
  },
  {
    q: "Why so many checks?",
    a: "Parents trust Tiisha because of them. They protect children, and they protect you.",
  },
];

/** Shown on the tutor page only. Parents never see the fee. */
export const TUTOR_FEE_FAQ: Faq = {
  q: "What does Tiisha keep?",
  a: "Tiisha takes a service fee from each booking. Your earnings are shown after it is taken.",
};
