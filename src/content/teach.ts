import type { Faq } from "./faq";

/** Tutor recruitment pages, one per subject we want to recruit for. */
export type TeachSubject = {
  slug: string;
  /** Matches a slug in subjects.ts, so the page can link to the parent-facing page. */
  subject: string;
  name: string;
  /** <title> without the brand suffix */
  title: string;
  h1: string;
  description: string;
  lead: string;
  wanted: string[];
  classes: string[];
  ready: string[];
  faq: Faq[];
};

export const TEACH_SUBJECTS: TeachSubject[] = [
  {
    slug: "yoruba",
    subject: "yoruba",
    name: "Yoruba",
    title: "Become an online Yoruba tutor",
    h1: "Teach Yoruba online to children around the world",
    description:
      "Teach Yoruba live from your phone or laptop. Set your own price and hours. Parents find tutors by subject, and every tutor is verified first.",
    lead: "Parents look for tutors by subject. If you teach Yoruba, apply, pass the checks and list the levels and age groups you teach. You set your own price and hours.",
    wanted: [
      "People who speak, read and write Yoruba confidently, including tone marks.",
      "Teachers, graduates and subject specialists who are patient with children.",
      "Tutors who can teach complete beginners as well as children who understand Yoruba but do not yet speak it.",
    ],
    classes: [
      "Classes are live video one to one, on a shared whiteboard where you write words and tone marks for your child to copy.",
      "Every class is recorded and parents can observe.",
      "After each class you write short feedback for the parent.",
    ],
    ready: [
      "A photo ID and your phone for the live selfie check.",
      "Your qualifications, and the names of two referees.",
      "The levels and age groups you want to teach.",
    ],
    faq: [
      {
        q: "Do I need a teaching qualification to teach Yoruba?",
        a: "Tutors upload their qualifications and our team verifies them. Tell us your background in your application and we review everything before you are approved.",
      },
      {
        q: "Can I teach from my phone?",
        a: "Yes. The tutor app has everything you need to teach, including the whiteboard. A tablet or laptop gives you more room to write.",
      },
      {
        q: "Do I choose my own hours?",
        a: "Yes. You open the time slots that suit you. Times convert to each family's time zone for you.",
      },
    ],
  },
  {
    slug: "arabic",
    subject: "arabic",
    name: "Arabic",
    title: "Become an online Arabic tutor",
    h1: "Teach Arabic online to children around the world",
    description:
      "Teach Arabic live from your phone or laptop. Set your own price and hours. Parents find tutors by subject, and every tutor is verified first.",
    lead: "Parents look for tutors by subject. If you teach Arabic, apply, pass the checks and list what you teach: Modern Standard Arabic, a dialect or Quranic reading. You set your own price and hours.",
    wanted: [
      "People who read, write and speak Arabic confidently and are patient with children.",
      "Tutors who are clear about what they teach: Modern Standard Arabic, a spoken dialect or reading the Quran.",
      "Tutors who can start with the alphabet and handwriting for complete beginners.",
    ],
    classes: [
      "Classes are live video one to one, on a shared whiteboard where you write letters and words for your child to copy.",
      "Every class is recorded and parents can observe.",
      "After each class you write short feedback for the parent.",
    ],
    ready: [
      "A photo ID and your phone for the live selfie check.",
      "Your qualifications, and the names of two referees.",
      "The kind of Arabic you teach, the levels and the age groups.",
    ],
    faq: [
      {
        q: "Can I teach Quranic reading only?",
        a: "Yes, if that is what you teach. List it clearly on your profile so parents can find you. All tutors pass the same checks.",
      },
      {
        q: "Can I write Arabic on the whiteboard from a phone?",
        a: "Yes. The whiteboard works on a phone, tablet or laptop. A bigger screen gives you more room to write.",
      },
      {
        q: "Can I teach families in other countries?",
        a: "Yes. Classes are live video. Times show in each person's own time zone.",
      },
    ],
  },
  {
    slug: "english",
    subject: "english",
    name: "English",
    title: "Become an online English tutor",
    h1: "Teach English online to children around the world",
    description:
      "Teach English live from your phone or laptop. Reading, writing and exams. Set your own price and hours. Every tutor is verified first.",
    lead: "Parents look for tutors by subject. If you teach English, apply, pass the checks and list the levels and exams you teach. You set your own price and hours.",
    wanted: [
      "Teachers, graduates and subject specialists who teach reading, writing, comprehension and grammar.",
      "Tutors who know the exams their students sit and can explain how marks are awarded.",
      "Tutors who give clear, kind feedback on written work.",
    ],
    classes: [
      "Classes are live video one to one. You read and annotate texts with your student and write alongside them on the shared whiteboard.",
      "Every class is recorded and parents can observe.",
      "After each class you write short feedback: one thing done well and one thing to practise.",
    ],
    ready: [
      "A photo ID and your phone for the live selfie check.",
      "Your qualifications, and the names of two referees.",
      "The levels, curricula and exams you teach.",
    ],
    faq: [
      {
        q: "Can I teach English to children who speak another language at home?",
        a: "Yes, if you are comfortable teaching it. List the age groups and levels you teach on your profile.",
      },
      {
        q: "Do I need a laptop?",
        a: "No. The tutor app has everything you need to teach, including a whiteboard. A laptop gives you more room to write.",
      },
      {
        q: "How long does approval take?",
        a: "We review every step, so it depends on how quickly your documents and referees come through. Once you are approved, parents can find and book you.",
      },
    ],
  },
  {
    slug: "maths",
    subject: "maths",
    name: "Maths",
    title: "Become an online maths tutor",
    h1: "Teach maths online to children around the world",
    description:
      "Teach maths live from your phone or laptop. Homework help, catching up and exam prep. Set your own price and hours. Every tutor is verified first.",
    lead: "Parents look for tutors by subject. If you teach maths, apply, pass the checks and list the grades, curricula and exams you teach. You set your own price and hours.",
    wanted: [
      "Teachers, graduates and subject specialists who can explain a step more than one way.",
      "Tutors who know the course their students follow and the exams at the end of it.",
      "Tutors who are comfortable working through problems live on a whiteboard.",
    ],
    classes: [
      "Classes are live video one to one. You work through problems on a shared whiteboard, so your student sees each step written down.",
      "Every class is recorded and parents can observe.",
      "After each class you write short feedback on what went well and what to practise.",
    ],
    ready: [
      "A photo ID and your phone for the live selfie check.",
      "Your qualifications, and the names of two referees.",
      "The grades, curricula and exams you teach.",
    ],
    faq: [
      {
        q: "Can I teach maths on a phone?",
        a: "Yes. The tutor app has a whiteboard. A tablet with a pen, or a laptop, gives you more room for working.",
      },
      {
        q: "Can I tutor several grades?",
        a: "Yes. List every grade and curriculum you are confident teaching, and parents searching for them can find you.",
      },
      {
        q: "Do I set my own price?",
        a: "Yes. You set one price per hour in your own currency. See the tutor page for how earnings work.",
      },
    ],
  },
  {
    slug: "science",
    subject: "science",
    name: "Science",
    title: "Become an online science tutor",
    h1: "Teach science online to children around the world",
    description:
      "Teach science, physics, chemistry or biology live from your phone or laptop. Set your own price and hours. Every tutor is verified first.",
    lead: "Parents look for tutors by subject. If you teach science, physics, chemistry or biology, apply, pass the checks and list the courses and exams you teach. You set your own price and hours.",
    wanted: [
      "Teachers, graduates and subject specialists in general science, physics, chemistry or biology.",
      "Tutors who can draw a diagram, write an equation and explain both.",
      "Tutors who know the exams their students sit and how marks are lost.",
    ],
    classes: [
      "Classes are live video one to one. You draw diagrams and work through calculations on a shared whiteboard.",
      "Every class is recorded and parents can observe.",
      "After each class you write short feedback on the topics that need more work.",
    ],
    ready: [
      "A photo ID and your phone for the live selfie check.",
      "Your qualifications, and the names of two referees.",
      "Which of science, physics, chemistry and biology you teach, with the courses and exams.",
    ],
    faq: [
      {
        q: "Can I teach more than one science?",
        a: "Yes. List each one you are confident teaching, with the courses and exams.",
      },
      {
        q: "Can I tutor practical work?",
        a: "You can explain the method, the results and the questions that follow from a practical. You cannot run the experiment in your student's lab.",
      },
      {
        q: "Can I teach families in other countries?",
        a: "Yes. Classes are live video. Times show in each person's own time zone.",
      },
    ],
  },
];

export function getTeachSubject(slug: string) {
  return TEACH_SUBJECTS.find((t) => t.slug === slug);
}
