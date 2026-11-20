import type { Faq, MarketSlug } from "./markets";

export type Subject = {
  slug: string;
  /** Name used in links and breadcrumbs. */
  name: string;
  kind: "subject" | "exam";
  /** h1 */
  h1: string;
  /** <title> without the brand suffix */
  title: string;
  description: string;
  intro: string;
  what: string[];
  suits: string[];
  classes: string[];
  /** Short lines for markets where the subject applies. */
  markets: Partial<Record<MarketSlug, string>>;
  faq: Faq[];
  related: string[];
};

export const SUBJECTS: Subject[] = [
  {
    slug: "maths",
    name: "Maths",
    kind: "subject",
    h1: "Online maths tutors, live and one to one",
    title: "Online maths tutors for every grade and exam",
    description:
      "Book verified online maths (math) tutors for live one-to-one classes. Homework help, catching up and exam prep, with every class recorded and a monthly progress report.",
    intro:
      "Maths is the subject where one missed idea quietly breaks the next five. A one-to-one tutor can find the missing idea and fix it before it grows.",
    what: [
      "Maths runs through every school system we serve, from number work and fractions in primary school to algebra, geometry and statistics in the years before exams. Called math in the US and Canada, it is a core subject in every curriculum on this page.",
      "Tutors on Tiisha list the grades and curricula they teach, so you can look for someone who knows the course your child follows, whether that is Common Core, the National Curriculum, a provincial course, the Nigerian or Ghanaian curriculum, or the CBC.",
    ],
    suits: [
      "A child who is falling behind in class and needs the gaps found and filled.",
      "A child who is ahead and wants to be stretched beyond the class pace.",
      "A student preparing for a maths paper such as the GCSE, SAT, WAEC, BECE or KCSE.",
      "A child who understands in class but loses marks on exam technique and working out.",
    ],
    classes: [
      "The tutor works through problems live on a shared whiteboard, so your child sees each step written down.",
      "After each class the tutor writes down what went well and what to practise.",
      "Short assessments show which topics are secure and which are costing marks.",
    ],
    markets: {
      us: "Tutors teach to Common Core and state standards, from elementary arithmetic through algebra and geometry, and prepare students for the SAT and ACT maths sections and AP courses.",
      uk: "Tutors cover the National Curriculum, 11 plus maths, GCSE maths and A level maths and further maths.",
      ca: "Tutors teach the maths course of your province and grade, and list the provinces they know.",
      ng: "Tutors cover primary maths, Common Entrance, WAEC and NECO mathematics, and the JAMB UTME maths paper.",
      gh: "Tutors cover basic school mathematics, BECE mathematics and WASSCE core mathematics.",
      ke: "Tutors cover CBC mathematics from primary through junior school, and KCSE mathematics for senior school.",
    },
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
    related: ["gcse", "sat", "11-plus", "science"],
  },
  {
    slug: "english",
    name: "English",
    kind: "subject",
    h1: "Online English tutors, live and one to one",
    title: "Online English tutors for reading, writing and exams",
    description:
      "Book verified online English tutors for live one-to-one classes. Reading, writing, grammar, comprehension and exam preparation, recorded, with a monthly progress report.",
    intro:
      "English is the subject behind every other subject. A child who reads closely and writes clearly does better across the whole timetable.",
    what: [
      "English covers reading comprehension, writing for different purposes, grammar and spelling, and for older students the study of set books, poetry and persuasive writing. What it is called, and how it is marked, changes from country to country.",
      "Tutors list the levels and exams they teach, so you can look for someone who knows the paper your child will sit.",
    ],
    suits: [
      "A child who reads below their age and needs steady, confident practice.",
      "A student who knows what they want to say but loses marks on structure and accuracy.",
      "A student working on comprehension, essay writing or an exam such as the GCSE, WAEC, NECO or KCSE.",
      "A family abroad that wants a child to keep strong English with a tutor who knows the home curriculum.",
    ],
    classes: [
      "The tutor reads and annotates texts with your child live, and writes alongside them on the shared whiteboard.",
      "Written work is reviewed together, one point at a time, so your child learns why a sentence works.",
      "Feedback after each class names one thing done well and one thing to practise.",
    ],
    markets: {
      us: "Tutors cover English language arts from elementary school through high school, including reading, writing and the reading and writing section of the SAT.",
      uk: "Tutors cover English in the National Curriculum, verbal reasoning and comprehension for the 11 plus, and GCSE English language and literature.",
      ca: "Tutors teach English language arts to your province's curriculum.",
      ng: "Tutors cover primary English, Common Entrance English, and Use of English for WAEC, NECO and JAMB.",
      gh: "Tutors cover English language for basic school, the BECE and the WASSCE.",
      ke: "Tutors cover English in the CBC and for KCSE.",
    },
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
        a: "Yes. A phone works. A laptop or tablet gives a bigger whiteboard.",
      },
    ],
    related: ["11-plus", "gcse", "waec", "kcse"],
  },
  {
    slug: "science",
    name: "Science",
    kind: "subject",
    h1: "Online science tutors, live and one to one",
    title: "Online science tutors for primary, middle and secondary school",
    description:
      "Book verified online science tutors for live one-to-one classes, from general science in primary and middle school to the exams that follow. Recorded, with monthly progress reports.",
    intro:
      "Science asks children to understand an idea, then use it on a question they have not seen. A tutor can slow down on the idea and speed up on the practice.",
    what: [
      "In the early years science is usually taught as one subject covering living things, materials and forces. Later it splits into biology, chemistry and physics, or stays combined, depending on the country and the school.",
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
    markets: {
      us: "Tutors teach general science in elementary and middle school and the high school courses that follow.",
      uk: "Tutors cover National Curriculum science, and GCSE combined science or the separate sciences.",
      ca: "Tutors teach the science course of your province and grade.",
      ng: "Tutors cover basic science at primary and junior secondary level, then the sciences for WAEC, NECO and JAMB.",
      gh: "Tutors cover integrated science for basic school and the BECE, and the sciences for WASSCE.",
      ke: "Tutors cover integrated science in the CBC, and the sciences for KCSE.",
    },
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
    kind: "subject",
    h1: "Online physics tutors, live and one to one",
    title: "Online physics tutors for GCSE, A level, WAEC and more",
    description:
      "Book verified online physics tutors for live one-to-one classes. Forces, energy, electricity, waves and exam preparation, recorded, with a monthly progress report.",
    intro:
      "Physics rewards children who can turn a picture into an equation and an equation into a sentence. That skill is easier to build with a tutor watching the working.",
    what: [
      "Physics covers motion and forces, energy, electricity, waves, matter and, in later years, fields, nuclear physics and more. It leans heavily on maths, so a gap in algebra often shows up as a gap in physics.",
      "Tutors list the physics courses and exams they teach, and many also teach the maths that sits under it.",
    ],
    suits: [
      "A student who follows the lesson but gets stuck on calculation questions.",
      "A GCSE or A level student aiming to lift a grade.",
      "A student in senior secondary school preparing for WAEC, NECO, JAMB or KCSE physics.",
      "A student taking an AP physics course in the US.",
    ],
    classes: [
      "The tutor sketches the situation, writes the equation and solves it live, so your child sees how the steps connect.",
      "Past style questions are worked together, with attention to units and the wording of the question.",
      "Feedback after each class lists the topics that need practice.",
    ],
    markets: {
      us: "Tutors support high school physics and AP physics courses.",
      uk: "Tutors cover GCSE physics, combined science physics content and A level physics.",
      ng: "Tutors cover physics for WAEC and NECO, and the JAMB UTME physics paper.",
      gh: "Tutors cover physics for the WASSCE.",
      ke: "Tutors cover physics for KCSE and the senior school sciences.",
    },
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
        q: "Is there a physics tutor for my exam board?",
        a: "Add your child's curriculum and exam when you sign up and we show tutors who teach it.",
      },
    ],
    related: ["maths", "science", "chemistry", "a-level"],
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    kind: "subject",
    h1: "Online chemistry tutors, live and one to one",
    title: "Online chemistry tutors for GCSE, A level, WAEC and more",
    description:
      "Book verified online chemistry tutors for live one-to-one classes. Atoms, bonding, reactions, calculations and exam preparation, recorded, with monthly progress reports.",
    intro:
      "Chemistry has its own language of symbols, equations and patterns. Once a student can read that language, the subject starts to feel logical.",
    what: [
      "Chemistry covers the structure of atoms, the periodic table, bonding, chemical reactions, rates and energy, and the chemistry of carbon compounds. Calculations such as moles and concentrations are where many students lose marks.",
      "Tutors list the chemistry courses and exams they teach, so you can look for someone who knows your child's paper.",
    ],
    suits: [
      "A student who memorises facts but struggles to balance equations or do calculations.",
      "A GCSE or A level student who wants to lift a grade.",
      "A senior secondary student preparing for WAEC, NECO, JAMB or KCSE chemistry.",
      "A student heading towards medicine, pharmacy or engineering who needs a strong chemistry result.",
    ],
    classes: [
      "The tutor writes equations and draws structures live on the whiteboard, and your child writes alongside.",
      "Calculation questions are worked step by step until your child can do them without prompts.",
      "Short assessments show which topics are secure and which need more time.",
    ],
    markets: {
      us: "Tutors support high school chemistry and AP chemistry courses.",
      uk: "Tutors cover GCSE chemistry, combined science chemistry content and A level chemistry.",
      ng: "Tutors cover chemistry for WAEC and NECO, and the JAMB UTME chemistry paper.",
      gh: "Tutors cover chemistry for the WASSCE.",
      ke: "Tutors cover chemistry for KCSE and the senior school sciences.",
    },
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
    related: ["science", "biology", "physics", "a-level"],
  },
  {
    slug: "biology",
    name: "Biology",
    kind: "subject",
    h1: "Online biology tutors, live and one to one",
    title: "Online biology tutors for GCSE, A level, WAEC and more",
    description:
      "Book verified online biology tutors for live one-to-one classes. Cells, body systems, genetics, ecology and exam preparation, recorded, with monthly progress reports.",
    intro:
      "Biology is a large subject with a lot to remember and a lot to explain. A tutor helps a student sort what to memorise from what to understand.",
    what: [
      "Biology covers cells, the organs and systems of the body, plants, genetics and inheritance, evolution and ecology. Exam questions reward clear, precise explanations in the right scientific words.",
      "Tutors list the biology courses and exams they teach, so you can look for someone who knows your child's paper.",
    ],
    suits: [
      "A student who knows the content but loses marks on how answers are worded.",
      "A student with a heavy memory load who needs a plan for revision.",
      "A GCSE or A level student aiming for a stronger grade.",
      "A senior secondary student preparing for WAEC, NECO, JAMB or KCSE biology.",
    ],
    classes: [
      "The tutor draws diagrams and processes live, and asks your child to explain them back.",
      "Past style questions are used to practise the exact wording that earns marks.",
      "Feedback after each class lists what to revise before the next one.",
    ],
    markets: {
      us: "Tutors support high school biology and AP biology courses.",
      uk: "Tutors cover GCSE biology, combined science biology content and A level biology.",
      ng: "Tutors cover biology for WAEC and NECO, and the JAMB UTME biology paper.",
      gh: "Tutors cover biology for the WASSCE.",
      ke: "Tutors cover biology for KCSE and the senior school sciences.",
    },
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
    related: ["science", "chemistry", "gcse", "waec"],
  },
  {
    slug: "coding",
    name: "Coding",
    kind: "subject",
    h1: "Online coding tutors for children, live and one to one",
    title: "Online coding tutors for children and teenagers",
    description:
      "Book verified online coding tutors for live one-to-one classes. Beginner projects, school computing and exam support, recorded, with feedback after each class.",
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
      "A child in one country who wants a tutor in another with a skill their local school does not offer.",
    ],
    classes: [
      "The tutor and your child work on a project together, and your child writes the code.",
      "Classes can be taken on a laptop, where a code editor is practical. A phone is fine for planning and theory.",
      "Feedback after each class lists what your child built and what to try next.",
    ],
    markets: {
      us: "Coding is offered as an extra subject. Tutors list the languages and levels they teach.",
      uk: "Tutors may support school computing and computer science, including GCSE and A level. Check each profile.",
      ca: "Coding is offered as an extra subject. Tutors list the languages and levels they teach.",
      ng: "Coding is offered as an extra subject, and some tutors support school computing.",
      gh: "Coding is offered as an extra subject, and some tutors support school computing.",
      ke: "Coding is offered as an extra subject, and some tutors support school computing.",
    },
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
        a: "A laptop is the practical choice for writing code. A phone is enough for joining and for the whiteboard.",
      },
    ],
    related: ["maths", "science", "gcse", "a-level"],
  },
  {
    slug: "11-plus",
    name: "11 plus",
    kind: "exam",
    h1: "Online 11 plus tutors, live and one to one",
    title: "Online 11 plus tutors for grammar and independent school entry",
    description:
      "Book verified online 11 plus tutors for live one-to-one classes. English, maths and reasoning preparation for selective school entry, recorded, with a monthly progress report.",
    intro:
      "The 11 plus is a selective school entrance test taken by children in the UK. Preparation is about both the content and getting used to the style of the papers.",
    what: [
      "The 11 plus is the name given to entrance tests for many grammar schools and some independent schools in England and Northern Ireland. It is usually taken in Year 6, for entry in Year 7. Dates, formats and pass marks vary by area and by school.",
      "Papers can include English, maths, verbal reasoning and non verbal reasoning, though which of these appear depends on the school or area. Providers such as GL Assessment and CEM set many of the tests, and some schools set their own. Check with the schools you are applying to.",
    ],
    suits: [
      "A child in Year 4 or 5 who wants to start early and build steadily.",
      "A child who is strong at school but has not seen reasoning questions before.",
      "A family that needs a tutor who can work to a timetable and keep a child confident.",
      "Families who live elsewhere and want their child to keep a place in a UK school process, with a tutor who knows the tests.",
    ],
    classes: [
      "The tutor teaches the topics, then moves to timed practice so your child learns to pace a paper.",
      "Practice questions are reviewed together, with attention to why a wrong answer looked tempting.",
      "Short assessments and your monthly report show which question types still cost marks.",
    ],
    markets: {
      uk: "11 plus tutoring is for families in the United Kingdom. Tutors teach English, maths and reasoning for selective school entry.",
    },
    faq: [
      {
        q: "When should my child start 11 plus preparation?",
        a: "Many families start in Year 4 or early Year 5 so that preparation is gradual. The right time depends on your child and on the schools you are considering.",
      },
      {
        q: "Which 11 plus test will my child take?",
        a: "That depends on the school or area. Check the admissions information of each school, and share it with the tutor so classes match the format.",
      },
      {
        q: "Can the tutor help with verbal and non verbal reasoning?",
        a: "Yes, where the tutor lists reasoning among the subjects they teach. Check the tutor's profile.",
      },
    ],
    related: ["maths", "english", "gcse"],
  },
  {
    slug: "gcse",
    name: "GCSE",
    kind: "exam",
    h1: "Online GCSE tutors, live and one to one",
    title: "Online GCSE tutors for every subject and exam board",
    description:
      "Book verified online GCSE tutors for live one-to-one classes. Maths, English, sciences and more, with exam board support, recorded classes and a monthly progress report.",
    intro:
      "GCSEs are the first set of national exams many students sit in the UK. A tutor can help a student turn good classwork into good exam answers.",
    what: [
      "GCSEs are taken at the end of secondary school in England, Wales and Northern Ireland, usually at the end of Year 11, around age 15 to 16. In England most subjects are graded from 9 to 1.",
      "Specifications come from exam boards such as AQA, Edexcel and OCR, and the board decides what is on the paper. Tutors list the boards they teach.",
    ],
    suits: [
      "A student in Year 9, 10 or 11 who is behind in one or two subjects.",
      "A student who is working at a pass and wants a higher grade.",
      "A student who needs to resit maths or English.",
      "A family who wants a tutor who knows the exact board, not just the subject.",
    ],
    classes: [
      "The tutor follows your child's exam board and uses past style questions.",
      "Mark scheme language is explained, so your child learns what an examiner wants to see.",
      "Your monthly report shows which topics are improving and which need work.",
    ],
    markets: {
      uk: "GCSE tutoring is for families in the United Kingdom. Add the exam board when you search, for example AQA, Edexcel or OCR.",
    },
    faq: [
      {
        q: "Does the tutor know my child's exam board?",
        a: "Add the board when you search, for example AQA, Edexcel or OCR, and we show tutors who teach it.",
      },
      {
        q: "Which GCSE subjects can I book?",
        a: "Tutors list the subjects they teach. Maths, English and the sciences are the most common. Search for your subject to see who is available.",
      },
      {
        q: "Can classes be at a time that suits us after school?",
        a: "Tutors set their own hours, and times show in your time zone. Pick a slot that suits your family.",
      },
    ],
    related: ["maths", "english", "a-level", "11-plus"],
  },
  {
    slug: "a-level",
    name: "A level",
    kind: "exam",
    h1: "Online A level tutors, live and one to one",
    title: "Online A level tutors for sixth form students",
    description:
      "Book verified online A level tutors for live one-to-one classes. Maths, sciences and more, with exam board support, recorded classes and a monthly progress report.",
    intro:
      "A levels step up the pace and the depth. A tutor helps a student keep up with new content and learn how to write answers that earn top marks.",
    what: [
      "A levels are two year courses taken in Years 12 and 13, around age 16 to 18, in England, Wales and Northern Ireland. Students usually take three subjects and are graded from A* to E. Results are widely used for university admission.",
      "Content and assessment come from exam boards such as AQA, Edexcel and OCR. Tutors list the subjects and boards they teach.",
    ],
    suits: [
      "A student who found the jump from GCSE harder than expected.",
      "A student aiming for specific grades for a university offer.",
      "A student who needs extra support in one of their three subjects.",
      "A student taking a subject their school does not teach in depth.",
    ],
    classes: [
      "The tutor works from your child's exam board and the topics they are covering at school.",
      "Extended answers and problem solving are reviewed in detail, with specific feedback.",
      "Short assessments and a monthly report keep progress visible in a long course.",
    ],
    markets: {
      uk: "A level tutoring is for families in the United Kingdom. Add the exam board when you search, for example AQA, Edexcel or OCR.",
    },
    faq: [
      {
        q: "Which A level subjects can I book?",
        a: "Tutors list the subjects they teach. Maths and the sciences are among the most common. Search for your subject to see who is available.",
      },
      {
        q: "Can a tutor help me before exams in the final year?",
        a: "Yes. Many students book regular classes through Year 13 and add extra classes close to exams.",
      },
      {
        q: "Can an A level student book classes themselves?",
        a: "Children join from a parent account. A parent books and pays, and the student joins the class.",
      },
    ],
    related: ["maths", "physics", "chemistry", "biology"],
  },
  {
    slug: "sat",
    name: "SAT",
    kind: "exam",
    h1: "Online SAT tutors, live and one to one",
    title: "Online SAT tutors for US college admissions",
    description:
      "Book verified online SAT tutors for live one-to-one classes. Reading and writing, maths, timed practice and feedback, recorded, with a monthly progress report.",
    intro:
      "The SAT is a standardised test used in US college admissions. Good preparation covers the content and builds comfort with the format and the clock.",
    what: [
      "The SAT is run by the College Board and has two main parts, reading and writing, and math. Scores run from 400 to 1600. The test is now taken on a computer. Many students sit it in Grade 11 and some again in Grade 12.",
      "Students applying to US colleges from outside the US also take it. Whether a college requires or considers scores differs from one school to the next, so check each college's policy.",
    ],
    suits: [
      "A student aiming for a particular score for a college list.",
      "A student who knows the maths but loses time or points under test conditions.",
      "A student who wants to strengthen reading and writing for the test.",
      "A student applying to US colleges from outside the US.",
    ],
    classes: [
      "The tutor teaches the content in the weakest areas, then moves to timed sets.",
      "Practice assessments in the same format show where points are being lost.",
      "Your monthly report puts it together, with the topics that need work.",
    ],
    markets: {
      us: "SAT preparation is for families in the United States. Choose SAT as the goal when you sign up.",
    },
    faq: [
      {
        q: "Can my child prepare for the SAT or ACT?",
        a: "Yes. Choose SAT or ACT as the goal. We show tutors who teach it and practice assessments in the same format.",
      },
      {
        q: "When should a student start SAT preparation?",
        a: "Many students start a few months before their first test date. Start earlier if the maths or reading needs more work.",
      },
      {
        q: "Does the SAT require a laptop?",
        a: "The test is taken on a computer. For classes, a phone works, and a laptop or tablet gives a bigger whiteboard.",
      },
    ],
    related: ["act", "maths", "english"],
  },
  {
    slug: "act",
    name: "ACT",
    kind: "exam",
    h1: "Online ACT tutors, live and one to one",
    title: "Online ACT tutors for US college admissions",
    description:
      "Book verified online ACT tutors for live one-to-one classes. English, maths, reading and timed practice, recorded, with a monthly progress report.",
    intro:
      "The ACT is a standardised test used in US college admissions. It rewards speed and accuracy, which are skills that improve with guided practice.",
    what: [
      "The ACT is a multiple choice test with a composite score from 1 to 36. It covers English, math and reading, with further sections that have changed in recent years. Check act.org for the current format before you plan.",
      "As with the SAT, colleges set their own policies on test scores, so check the colleges on your list.",
    ],
    suits: [
      "A student who wants to compare the ACT and the SAT and choose one.",
      "A student who runs out of time in practice tests.",
      "A student aiming for a particular composite score.",
    ],
    classes: [
      "The tutor teaches the content in the weakest sections, then moves to timed sets.",
      "Practice assessments in the same format show where points are being lost.",
      "Your monthly report shows the trend, with the topics that need work.",
    ],
    markets: {
      us: "ACT preparation is for families in the United States. Choose ACT as the goal when you sign up.",
    },
    faq: [
      {
        q: "Should my child take the SAT or the ACT?",
        a: "Many students try a practice test of each and pick the one that suits them. A tutor can help you compare.",
      },
      {
        q: "Can I watch the class?",
        a: "Yes. Join live as an observer or watch the recording.",
      },
      {
        q: "Are practice assessments available?",
        a: "Yes. Choose ACT as the goal and we show tutors who teach it, with practice assessments in the same format.",
      },
    ],
    related: ["sat", "maths", "english"],
  },
  {
    slug: "waec",
    name: "WAEC",
    kind: "exam",
    h1: "Online WAEC tutors, live and one to one",
    title: "Online WAEC and WASSCE tutors for Nigeria and Ghana",
    description:
      "Book verified online WAEC and WASSCE tutors for live one-to-one classes. Maths, English, sciences and more, with past question practice, recorded classes and monthly reports.",
    intro:
      "The WASSCE, set by WAEC, is the exam that closes senior secondary school in Nigeria and Ghana. Strong results open doors to university, so preparation matters.",
    what: [
      "The West African Examinations Council (WAEC) sets the West African Senior School Certificate Examination (WASSCE) for school candidates. Students sit it at the end of senior secondary school. Results are graded from A1 to F9, and many universities ask for credit passes in subjects such as English language and mathematics.",
      "Students sit a mix of core subjects and electives. Tutors list the subjects they teach, so you can look for help in the subjects your child finds hardest.",
    ],
    suits: [
      "A student in SS2 or SS3 in Nigeria, or SHS 2 or SHS 3 in Ghana, preparing for the exam.",
      "A student who needs a credit in maths or English to qualify for a course.",
      "A student retaking a subject.",
      "A student who has no good local tutor for a subject such as physics or further maths.",
    ],
    classes: [
      "The tutor teaches to the WAEC syllabus and works through past questions.",
      "Classes are live and recorded, so your child can replay a method before the exam.",
      "Short assessments and a monthly report show where marks are being lost.",
    ],
    markets: {
      ng: "Tutors teach the Nigerian curriculum and prepare students for WAEC and NECO. Prices in naira.",
      gh: "Tutors teach the Ghana Education Service curriculum and prepare students for the WASSCE. Prices in Ghana cedis.",
    },
    faq: [
      {
        q: "Is WAEC the same as the WASSCE?",
        a: "The WASSCE is the exam WAEC sets for school candidates at the end of senior secondary school. People often say WAEC when they mean the WASSCE.",
      },
      {
        q: "Can I book a tutor in Ghana for my child in Nigeria?",
        a: "Yes. Tutors can be anywhere in the world. Classes are live video, and times show in your time zone.",
      },
      {
        q: "Can the tutor use WAEC past questions?",
        a: "Yes. Past questions are a core part of preparation. Tutors can work through them with your child and explain the answers.",
      },
    ],
    related: ["neco", "jamb", "bece", "maths"],
  },
  {
    slug: "neco",
    name: "NECO",
    kind: "exam",
    h1: "Online NECO tutors, live and one to one",
    title: "Online NECO tutors for Nigerian secondary school students",
    description:
      "Book verified online NECO tutors for live one-to-one classes. Maths, English, sciences and more, with past question practice, recorded classes and monthly progress reports.",
    intro:
      "NECO is one of the two main exams that close senior secondary school in Nigeria. A tutor can help your child cover the syllabus and practise how questions are asked.",
    what: [
      "The National Examinations Council (NECO) conducts the Senior School Certificate Examination (SSCE) in Nigeria. Students sit it at the end of senior secondary school, in SS3. Grades run from A1 to F9, in the same pattern as WAEC.",
      "Many students sit both NECO and WAEC. Tutors list the subjects they teach, so you can find help for the subjects your child needs.",
    ],
    suits: [
      "A student in SS2 or SS3 in Nigeria preparing for NECO.",
      "A student who needs a credit in maths or English.",
      "A student who sits several exams in one year and needs a plan.",
    ],
    classes: [
      "The tutor teaches to the syllabus and works through past questions.",
      "Classes are live and recorded, so your child can replay anything they missed.",
      "Short assessments and a monthly report show where marks are being lost.",
    ],
    markets: {
      ng: "Tutors teach the Nigerian curriculum and prepare students for WAEC, NECO and JAMB UTME. Prices in naira.",
    },
    faq: [
      {
        q: "Can one tutor prepare my child for both NECO and WAEC?",
        a: "Often yes, because the subjects overlap. Check the tutor's profile and talk to them in the first class.",
      },
      {
        q: "Does my child need a laptop?",
        a: "No. A phone works. A laptop or tablet gives a bigger whiteboard.",
      },
      {
        q: "Can I pay in naira?",
        a: "Yes. Prices are in naira, and you can pay by card or bank transfer.",
      },
    ],
    related: ["waec", "jamb", "maths", "english"],
  },
  {
    slug: "jamb",
    name: "JAMB UTME",
    kind: "exam",
    h1: "Online JAMB UTME tutors, live and one to one",
    title: "Online JAMB UTME tutors for Nigerian university entry",
    description:
      "Book verified online JAMB UTME tutors for live one-to-one classes. Use of English and subject preparation, timed practice in the JAMB format, recorded classes and monthly reports.",
    intro:
      "The JAMB UTME is the entrance test for Nigerian universities and other tertiary institutions. Good scores come from knowing the content and the clock.",
    what: [
      "The Joint Admissions and Matriculation Board (JAMB) runs the Unified Tertiary Matriculation Examination (UTME). It is a computer based test, scored out of 400. Candidates sit four subjects, and Use of English is one of them. The other three depend on the course the candidate wants to study.",
      "Institutions set their own requirements for admission, so check the course and institution your child is aiming for.",
    ],
    suits: [
      "A student finishing SS3 who wants a strong first score.",
      "A student retaking the UTME to reach a higher score.",
      "A student who knows the content but runs short of time on a computer based test.",
      "A student with a weak subject in their combination, such as chemistry or maths.",
    ],
    classes: [
      "The tutor teaches the topics and moves to timed practice in the JAMB format.",
      "Practice assessments show which subjects and topics cost the most marks.",
      "Classes are recorded, so your child can replay explanations before the test.",
    ],
    markets: {
      ng: "Pick JAMB UTME as the goal and we show tutors who teach it, with practice assessments in the JAMB format. Prices in naira.",
    },
    faq: [
      {
        q: "Can my child prepare for JAMB with Tiisha?",
        a: "Yes. Pick JAMB UTME as the goal and we show tutors who teach it, with practice assessments in the JAMB format.",
      },
      {
        q: "Which subjects can a tutor help with?",
        a: "Tutors list the subjects they teach. Use of English, maths and the sciences are common. Search for the subjects in your child's combination.",
      },
      {
        q: "Can my child take classes while preparing for WAEC?",
        a: "Yes. Many students prepare for both. Tell the tutor what the timetable looks like and plan the classes around it.",
      },
    ],
    related: ["waec", "neco", "maths", "english"],
  },
  {
    slug: "bece",
    name: "BECE",
    kind: "exam",
    h1: "Online BECE tutors, live and one to one",
    title: "Online BECE tutors for JHS students in Ghana",
    description:
      "Book verified online BECE tutors for live one-to-one classes. English, maths, science and social studies, with past question practice, recorded classes and monthly progress reports.",
    intro:
      "The BECE is the exam at the end of Junior High School in Ghana. Its results play a large part in where a student goes next, so it is worth preparing well.",
    what: [
      "The Basic Education Certificate Examination (BECE) is taken at the end of JHS 3 in Ghana and is run by the West African Examinations Council. Results are used for placement into senior high school. Subjects include English language, mathematics, integrated science and social studies, among others.",
      "Tutors list the subjects and grades they teach, so you can look for help in the subjects your child finds hardest.",
    ],
    suits: [
      "A student in JHS 2 or JHS 3 preparing for the BECE.",
      "A student whose goal is a place in a particular senior high school.",
      "A student who is strong in some subjects and weak in one or two.",
      "A family who wants a tutor who knows the past questions.",
    ],
    classes: [
      "The tutor teaches to the BECE syllabus and works through past questions.",
      "Classes are live and recorded, so your child can replay an explanation before the exam.",
      "Short assessments and a monthly report show where marks are being lost.",
    ],
    markets: {
      gh: "Choose BECE as the goal and we match your child with tutors who teach it and know the past questions. Prices in Ghana cedis.",
    },
    faq: [
      {
        q: "My child is in JHS 3. Can you help with the BECE?",
        a: "Yes. Choose BECE as the goal and we match your child with tutors who teach it and know the past questions.",
      },
      {
        q: "Which subjects can a tutor help with?",
        a: "Tutors list the subjects they teach. English, maths and integrated science are common. Search for the subjects your child needs.",
      },
      {
        q: "Is a laptop needed?",
        a: "No. A phone works. A laptop or tablet gives a bigger whiteboard.",
      },
    ],
    related: ["waec", "maths", "english", "science"],
  },
  {
    slug: "kcse",
    name: "KCSE",
    kind: "exam",
    h1: "Online KCSE tutors, live and one to one",
    title: "Online KCSE tutors for Kenyan secondary school students",
    description:
      "Book verified online KCSE tutors for live one-to-one classes. Maths, English, sciences and more, with exam preparation, recorded classes and monthly progress reports.",
    intro:
      "The KCSE is the national exam at the end of secondary school in Kenya. Its grades shape what comes next, so students and families take preparation seriously.",
    what: [
      "The Kenya Certificate of Secondary Education (KCSE) is set by the Kenya National Examinations Council (KNEC) and taken at the end of secondary school. Grades run from A to E. They are used for placement into university and college.",
      "Kenya is moving from the 8-4-4 system to the Competency Based Curriculum (CBC). Check with your child's school which route and which exam they are on. Tutors list the subjects and levels they teach, including CBC and KCSE.",
    ],
    suits: [
      "A student in Form 3 or Form 4 preparing for the KCSE.",
      "A student who needs a stronger grade in maths, English or a science for a course.",
      "A student with no good local tutor for a subject such as physics or chemistry.",
      "A family whose child is in the CBC and wants support aligned to it.",
    ],
    classes: [
      "The tutor teaches to the syllabus your child follows and works through past questions.",
      "Classes are live and recorded, so your child can replay explanations before the exam.",
      "Short assessments and a monthly report show where marks are being lost.",
    ],
    markets: {
      ke: "Tutors teach the CBC from primary through junior school, and KCSE for senior school. Prices in Kenyan shillings.",
    },
    faq: [
      {
        q: "Do tutors know the CBC as well as the KCSE?",
        a: "Tutors are checked on the subjects and grades they teach. Filter by CBC and your child's grade to see only those who do.",
      },
      {
        q: "Can my child take classes in the evening?",
        a: "Tutors set their own hours, and times show in your time zone. Pick a slot that suits your family.",
      },
      {
        q: "Can the tutor use KCSE past papers?",
        a: "Yes. Tutors can work through past papers with your child and explain how answers are marked.",
      },
    ],
    related: ["maths", "english", "physics", "chemistry"],
  },
];

export function getSubject(slug: string) {
  return SUBJECTS.find((s) => s.slug === slug);
}
