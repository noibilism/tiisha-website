import type { Faq } from "./faq";

export type Subject = {
  slug: string;
  /** Name used in links and breadcrumbs. */
  name: string;
  /** How the subject reads in the middle of a sentence: "maths", "English", "Yoruba". */
  term: string;
  /** Hub grouping. */
  group: "school" | "language";
  /** h1 */
  h1: string;
  /** <title> without the brand suffix */
  title: string;
  description: string;
  intro: string;
  what: string[];
  suits: string[];
  classes: string[];
  faq: Faq[];
  related: string[];
};

export const SUBJECTS: Subject[] = [
  {
    slug: "maths",
    name: "Maths",
    term: "maths",
    group: "school",
    h1: "Online maths tutors, live and one to one",
    title: "Online maths tutors for every grade and exam",
    description:
      "Verified online maths (math) tutors for live one-to-one classes. Homework help, catching up and exam prep. Every class recorded.",
    intro:
      "Maths is the subject where one missed idea quietly breaks the next five. A one-to-one tutor can find the missing idea and fix it before it grows.",
    what: [
      "Maths runs through every school system, from number work and fractions in primary school to algebra, geometry and statistics in the years before exams. In some places it is called math. It is a core subject in every curriculum.",
      "Tutors on Tiisha list the grades and curricula they teach, so you can look for someone who knows the course your child follows.",
    ],
    suits: [
      "A child who is falling behind in class and needs the gaps found and filled.",
      "A child who is ahead and wants to be stretched beyond the class pace.",
      "A student preparing for a school or national maths exam.",
      "A child who understands in class but loses marks on exam technique and working out.",
    ],
    classes: [
      "The tutor works through problems live on a shared whiteboard, so your child sees each step written down.",
      "After each class the tutor writes down what went well and what to practise.",
      "Short assessments show which topics are secure and which are costing marks.",
    ],
    faq: [
      {
        q: "Can a maths tutor help with homework as well as exams?",
        a: "Yes. Many families use classes for weekly homework help and for exam preparation. Tell the tutor which you want in your first class.",
      },
      {
        q: "How do I find a tutor who teaches my child's maths course?",
        a: "Add your child's school year and curriculum when you sign up, and we show tutors who teach it.",
      },
      {
        q: "Does my child need to be good at maths first?",
        a: "No. Tutors start from where your child is, not from where the syllabus says they should be.",
      },
    ],
    related: ["science", "physics", "coding", "english"],
  },
  {
    slug: "english",
    name: "English",
    term: "English",
    group: "school",
    h1: "Online English tutors, live and one to one",
    title: "Online English tutors for reading, writing and exams",
    description:
      "Verified online English tutors for live one-to-one classes. Reading, writing, comprehension and exams. Every class recorded.",
    intro:
      "English is the subject behind every other subject. A child who reads closely and writes clearly does better across the whole timetable.",
    what: [
      "English covers reading comprehension, writing for different purposes, grammar and spelling, and for older students the study of set books, poetry and persuasive writing. What it is called, and how it is marked, changes between schools and school systems.",
      "Tutors list the levels and exams they teach, so you can look for someone who knows the paper your child will sit.",
    ],
    suits: [
      "A child who reads below their age and needs steady, confident practice.",
      "A student who knows what they want to say but loses marks on structure and accuracy.",
      "A student working on comprehension, essay writing or a school or national English exam.",
      "A family living abroad that wants a child to keep strong English with a tutor who knows the home curriculum.",
    ],
    classes: [
      "The tutor reads and annotates texts with your child live, and writes alongside them on the shared whiteboard.",
      "Written work is reviewed together, one point at a time, so your child learns why a sentence works.",
      "Feedback after each class names one thing done well and one thing to practise.",
    ],
    faq: [
      {
        q: "Can my child get help with essays and comprehension?",
        a: "Yes. Tutors work on both. Share the question or essay in class and work through it together.",
      },
      {
        q: "Is English tutoring only for children who struggle?",
        a: "No. Many students use it to stretch ahead, to improve a grade or to prepare for entrance and national exams.",
      },
      {
        q: "Can my child join from a phone?",
        a: "Yes. The whiteboard works on a phone, tablet or laptop, and your child can draw on it from any of them. A bigger screen gives more room.",
      },
    ],
    related: ["maths", "science", "yoruba", "arabic"],
  },
  {
    slug: "science",
    name: "Science",
    term: "science",
    group: "school",
    h1: "Online science tutors, live and one to one",
    title: "Online science tutors for school and exams",
    description:
      "Verified online science tutors for live one-to-one classes, from general science to the exams that follow. Every class recorded.",
    intro:
      "Science asks children to understand an idea, then use it on a question they have not seen. A tutor can slow down on the idea and speed up on the practice.",
    what: [
      "In the early years science is usually taught as one subject covering living things, materials and forces. Later it splits into biology, chemistry and physics, or stays combined, depending on the school.",
      "If your child studies one of the three sciences on its own, see our physics, chemistry and biology pages.",
    ],
    suits: [
      "A child moving from primary to secondary school who finds the jump in science hard.",
      "A student on a combined science course who needs help across all three strands.",
      "A child who learns best by seeing an idea drawn and explained step by step.",
    ],
    classes: [
      "The tutor draws diagrams and works through calculations live on the shared whiteboard.",
      "Each class ends with a few practice questions, and the tutor notes which ideas need more work.",
      "Assessments show where marks are being lost, topic by topic.",
    ],
    faq: [
      {
        q: "Should I pick science or one of physics, chemistry and biology?",
        a: "Follow your child's school. If they study a combined science course, book science. If they study the sciences separately, book the one they need help with.",
      },
      {
        q: "Can a tutor help with practical work?",
        a: "Tutors can explain the method, the results and the questions that follow from a practical. They cannot run the experiment in your child's lab.",
      },
      {
        q: "Can I watch a science class?",
        a: "Yes. Join live as an observer or watch the recording.",
      },
    ],
    related: ["physics", "chemistry", "biology", "maths"],
  },
  {
    slug: "physics",
    name: "Physics",
    term: "physics",
    group: "school",
    h1: "Online physics tutors, live and one to one",
    title: "Online physics tutors for school and exams",
    description:
      "Verified online physics tutors for live one-to-one classes. Forces, energy, electricity, waves and exam preparation. Every class recorded.",
    intro:
      "Physics rewards children who can turn a picture into an equation and an equation into a sentence. That skill is easier to build with a tutor watching the working.",
    what: [
      "Physics covers motion and forces, energy, electricity, waves, matter and, in later years, fields, nuclear physics and more. It leans heavily on maths, so a gap in algebra often shows up as a gap in physics.",
      "Tutors list the physics courses and exams they teach, and many also teach the maths that sits under it.",
    ],
    suits: [
      "A student who follows the lesson but gets stuck on calculation questions.",
      "A student in the final years of school aiming to lift a grade.",
      "A student preparing for a national physics exam.",
      "A student on an advanced physics course who wants extra support.",
    ],
    classes: [
      "The tutor sketches the situation, writes the equation and solves it live, so your child sees how the steps connect.",
      "Past style questions are worked together, with attention to units and the wording of the question.",
      "Feedback after each class lists the topics that need practice.",
    ],
    faq: [
      {
        q: "Does my child need strong maths for physics?",
        a: "It helps. If maths is the weak spot, a tutor can work on both together, or you can book a maths tutor alongside.",
      },
      {
        q: "Can the tutor use past exam papers?",
        a: "Yes. Tutors can work through past questions with your child and explain how marks are awarded. Bring the papers you have.",
      },
      {
        q: "Is there a physics tutor for my child's course?",
        a: "Add your child's curriculum and exam when you sign up and we show tutors who teach it.",
      },
    ],
    related: ["maths", "science", "chemistry"],
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    term: "chemistry",
    group: "school",
    h1: "Online chemistry tutors, live and one to one",
    title: "Online chemistry tutors for school and exams",
    description:
      "Verified online chemistry tutors for live one-to-one classes. Reactions, calculations and exam preparation. Every class recorded.",
    intro:
      "Chemistry has its own language of symbols, equations and patterns. Once a student can read that language, the subject starts to feel logical.",
    what: [
      "Chemistry covers the structure of atoms, the periodic table, bonding, chemical reactions, rates and energy, and the chemistry of carbon compounds. Calculations such as moles and concentrations are where many students lose marks.",
      "Tutors list the chemistry courses and exams they teach, so you can look for someone who knows your child's paper.",
    ],
    suits: [
      "A student who memorises facts but struggles to balance equations or do calculations.",
      "A student in the final years of school who wants to lift a grade.",
      "A student preparing for a national chemistry exam.",
      "A student heading towards medicine, pharmacy or engineering who needs a strong chemistry result.",
    ],
    classes: [
      "The tutor writes equations and draws structures live on the whiteboard, and your child writes alongside.",
      "Calculation questions are worked step by step until your child can do them without prompts.",
      "Short assessments show which topics are secure and which need more time.",
    ],
    faq: [
      {
        q: "My child finds moles and calculations hard. Can a tutor help?",
        a: "Yes. This is one of the most common reasons families book a chemistry tutor. The tutor works through calculations step by step.",
      },
      {
        q: "Can classes follow the school scheme of work?",
        a: "Yes. Share what the school is teaching and the tutor can follow it, or revisit earlier topics if there are gaps.",
      },
      {
        q: "Can my child replay a class?",
        a: "Yes. Every class is recorded, so your child can replay the part they missed.",
      },
    ],
    related: ["science", "biology", "physics"],
  },
  {
    slug: "biology",
    name: "Biology",
    term: "biology",
    group: "school",
    h1: "Online biology tutors, live and one to one",
    title: "Online biology tutors for school and exams",
    description:
      "Verified online biology tutors for live one-to-one classes. Cells, genetics, ecology and exam preparation. Every class recorded.",
    intro:
      "Biology is a large subject with a lot to remember and a lot to explain. A tutor helps a student sort what to memorise from what to understand.",
    what: [
      "Biology covers cells, the organs and systems of the body, plants, genetics and inheritance, evolution and ecology. Exam questions reward clear, precise explanations in the right scientific words.",
      "Tutors list the biology courses and exams they teach, so you can look for someone who knows your child's paper.",
    ],
    suits: [
      "A student who knows the content but loses marks on how answers are worded.",
      "A student with a heavy memory load who needs a plan for revision.",
      "A student in the final years of school aiming for a stronger grade.",
      "A student preparing for a national biology exam.",
    ],
    classes: [
      "The tutor draws diagrams and processes live, and asks your child to explain them back.",
      "Past style questions are used to practise the exact wording that earns marks.",
      "Feedback after each class lists what to revise before the next one.",
    ],
    faq: [
      {
        q: "How can a tutor help with all the content in biology?",
        a: "By turning it into a revision plan. The tutor works with your child on the topics that matter most for their exam and checks recall with short questions.",
      },
      {
        q: "Does the tutor use diagrams?",
        a: "Yes. Classes use a shared whiteboard, so the tutor can draw and label diagrams live.",
      },
      {
        q: "Can I see how my child is doing?",
        a: "Yes. You get tutor feedback after each class, short assessments, and a progress report every month.",
      },
    ],
    related: ["science", "chemistry", "physics", "maths"],
  },
  {
    slug: "coding",
    name: "Coding",
    term: "coding",
    group: "school",
    h1: "Online coding tutors for children, live and one to one",
    title: "Online coding tutors for children and teenagers",
    description:
      "Verified online coding tutors for live one-to-one classes. Beginner projects, school computing and exam support. Every class recorded.",
    intro:
      "Coding teaches children to break a problem into steps and test their own thinking. A tutor keeps a beginner moving and an experienced student challenged.",
    what: [
      "Children can start with visual block based tools and move on to written languages as they grow. What a tutor teaches depends on the tutor, so check each profile for the languages and levels they list.",
      "Coding also appears in school as computing or computer science, and some tutors help with that coursework and its exams.",
    ],
    suits: [
      "A beginner who wants to build a first game or website with someone patient.",
      "A student who has learnt the basics online and keeps getting stuck on the next step.",
      "A student taking computing or computer science at school who needs help with coursework or theory.",
      "A child who wants a tutor, from anywhere in the world, with a skill their local school does not offer.",
    ],
    classes: [
      "The tutor and your child work on a project together, and your child writes the code.",
      "Classes can be taken on a laptop, where a code editor is practical. A phone is fine for planning and theory.",
      "Feedback after each class lists what your child built and what to try next.",
    ],
    faq: [
      {
        q: "What age can my child start coding classes?",
        a: "Tutors list the age groups they teach. Choose your child's age group when you search and we show tutors who work with it.",
      },
      {
        q: "Which programming language will my child learn?",
        a: "That depends on the tutor and your child's goals. Check each tutor's profile and ask in the first class.",
      },
      {
        q: "Do we need a laptop for coding?",
        a: "A laptop is the practical choice for writing code. A phone is enough for joining and for using the whiteboard.",
      },
    ],
    related: ["maths", "science", "physics"],
  },
  {
    slug: "yoruba",
    name: "Yoruba",
    term: "Yoruba",
    group: "language",
    h1: "Online Yoruba tutors for children, live and one to one",
    title: "Online Yoruba tutors for children",
    description:
      "Verified online Yoruba tutors for live one-to-one classes. Speaking, reading and writing for children, wherever you live. Every class recorded.",
    intro:
      "Many children who grow up away from home understand the language they hear at home but do not speak, read or write it. A tutor can build all three at your child's pace.",
    what: [
      "Yoruba tutoring can cover speaking and listening, reading, writing with tone marks, vocabulary, stories and proverbs. For some students it also means preparing for a school or national exam in Yoruba.",
      "Tutors list the levels and age groups they teach, so you can look for someone who fits where your child is now.",
    ],
    suits: [
      "A child who understands Yoruba at home but is shy about speaking it.",
      "A child who wants to read and write Yoruba, including the tone marks.",
      "A student taking Yoruba as a school or exam subject.",
      "A parent who wants their child to talk with grandparents and family in Yoruba.",
    ],
    classes: [
      "The tutor writes words, phrases and tone marks live on the shared whiteboard, and your child writes alongside.",
      "Classes mix conversation, reading short texts and the vocabulary your child will use with family.",
      "Feedback after each class lists the words and phrases to practise before the next one.",
    ],
    faq: [
      {
        q: "Can my child learn Yoruba if nobody speaks it at home?",
        a: "Yes. A tutor can start from greetings, numbers and everyday phrases. Tell the tutor your child's starting point in the first class.",
      },
      {
        q: "Do Yoruba tutors teach reading and writing as well as speaking?",
        a: "Tutors list what they teach. Check each profile for speaking, reading and writing, and ask in the first class if you want a particular mix.",
      },
      {
        q: "What age can start Yoruba classes?",
        a: "Tutors list the age groups they teach. Choose your child's age group when you search and we show tutors who work with it.",
      },
    ],
    related: ["arabic", "english", "maths"],
  },
  {
    slug: "arabic",
    name: "Arabic",
    term: "Arabic",
    group: "language",
    h1: "Online Arabic tutors for children, live and one to one",
    title: "Online Arabic tutors for children",
    description:
      "Verified online Arabic tutors for live one-to-one classes. Alphabet, reading, writing and speaking for children, wherever you live. Every class recorded.",
    intro:
      "Arabic rewards steady practice: a new script, new sounds and a lot of repetition. In a one-to-one class a tutor sets the pace and corrects pronunciation as it happens.",
    what: [
      "Arabic tutoring can cover the alphabet and handwriting, reading, vocabulary, speaking and listening, and grammar. Tutors list whether they teach Modern Standard Arabic, a spoken dialect or reading the Quran, and the levels they teach.",
      "Arabic is written from right to left. On a shared whiteboard your child sees each letter formed in the right direction and writes it back.",
    ],
    suits: [
      "A beginner learning the alphabet and first words.",
      "A child who wants to read and write Arabic with confidence.",
      "A student taking Arabic as a school subject or preparing for an Arabic exam.",
      "A family that wants a child to read the Quran with a tutor who teaches it.",
    ],
    classes: [
      "The tutor writes letters and words live, and your child copies them on the whiteboard.",
      "Pronunciation is practised aloud, with the tutor correcting as your child speaks.",
      "Feedback after each class lists the letters, words or passages to practise.",
    ],
    faq: [
      {
        q: "Which kind of Arabic will my child learn?",
        a: "That depends on the tutor and your goals. Tutors list whether they teach Modern Standard Arabic, a dialect or Quranic reading. Check each profile and say what you want in the first class.",
      },
      {
        q: "Can a complete beginner start with the alphabet?",
        a: "Yes. A tutor can begin with the letters and their sounds, then move to words and short sentences at your child's pace.",
      },
      {
        q: "Can my child practise Arabic handwriting on a phone?",
        a: "Yes. The whiteboard works on a phone, tablet or laptop. A bigger screen gives more room to write.",
      },
    ],
    related: ["yoruba", "english", "maths"],
  },
];

export function getSubject(slug: string) {
  return SUBJECTS.find((s) => s.slug === slug);
}
