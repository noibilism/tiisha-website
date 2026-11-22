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
      a: "No. A phone works, and your child can write and draw on the whiteboard from it. A laptop or tablet gives more room.",
    },
    {
      q: "Do we need a separate video-call subscription?",
      a: "No. Live video, the shared whiteboard and the recording are part of the class on Tiisha. You do not need to pay for or set up a separate video-call service.",
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

/* ------------------------------------------------------------------ */
/* The full help centre at /faq. Grouped, global, and honest: where we */
/* do not have a number (review times, retention) the answer says so.  */
/* Parents never see the service fee, so it is not mentioned here.     */
/* ------------------------------------------------------------------ */

export type FaqSection = { heading?: string; items: Faq[] };
export type FaqGroup = { id: string; title: string; intro: string; sections: FaqSection[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    intro: "What Tiisha is, who it is for and how a first class works.",
    sections: [
      {
        items: [
          {
            q: "What is Tiisha?",
            a: "Tiisha is an online tutoring service. Parents book live one-to-one classes with verified tutors, pay online and can watch every class. After each class the tutor writes feedback, and you get a progress report every month.",
          },
          {
            q: "Who is Tiisha for?",
            a: "Families who want a tutor for homework help, catching up or exam preparation, and tutors who want to teach children online. Parents book and pay. Children join the class from the parent's account.",
          },
          {
            q: "How does it work in short?",
            a: "Tell us about your child, choose a verified tutor, learn live on a shared whiteboard, then see what changed in the tutor's feedback and the monthly report. The class is recorded.",
          },
          {
            q: "How do I get started as a parent?",
            a: "Create a parent account and verify your email. Add your child with their age group, school year and curriculum. Then choose a tutor and book a time. Telling us about your child takes about two minutes.",
          },
          {
            q: "Does it follow my child's school syllabus?",
            a: "Tutors teach to the curriculum and exams your child follows. Tell us the school year and curriculum when you sign up and we show tutors who teach it.",
          },
          {
            q: "Can my child prepare for an exam?",
            a: "Yes. Tell us the exam when you sign up. We show tutors who teach it, with practice assessments in the same style.",
          },
        ],
      },
    ],
  },
  {
    id: "parents",
    title: "For parents",
    intro: "Booking, paying, changing a class, your child's safety, recordings and progress.",
    sections: [
      {
        heading: "Booking",
        items: [
          {
            q: "How do I choose a tutor?",
            a: "Browse approved tutors and filter by subject, level, price and availability. Each profile shows the tutor's bio, subjects, qualifications, price and open times, with a verified badge.",
          },
          {
            q: "What if my child does not click with the tutor?",
            a: "Say so after the first class. We help you move to another tutor.",
          },
          {
            q: "What if the time I want is taken?",
            a: "Only open times can be booked. If another family books a time first, you get a clear message and other times to choose from.",
          },
          {
            q: "What happens after I book?",
            a: "You get a confirmation email with the date, time, tutor, child and the link to join. Reminders come before the class.",
          },
        ],
      },
      {
        heading: "Payment",
        items: [
          {
            q: "Who sets the price?",
            a: "Each tutor sets their own price. Compare profiles and choose the tutor that suits your family.",
          },
          {
            q: "Can I pay in my own currency?",
            a: "Yes. Each tutor sets their own price, and you see it in your currency when you book.",
          },
          {
            q: "What if my payment fails?",
            a: "Nothing is booked until payment succeeds. We hold the time briefly while you pay. If payment fails or times out, the time is released and you can try again.",
          },
        ],
      },
      {
        heading: "Cancelling and rescheduling",
        items: [
          {
            q: "Can I cancel a class?",
            a: "Yes. Cancellation is free up to 24 hours before a class.",
          },
          {
            q: "What if I cancel less than 24 hours before?",
            a: "Free cancellation ends 24 hours before the class. If something has gone wrong, contact Tiisha support with the date and the tutor's name and we will look at it.",
          },
          {
            q: "What if the tutor cancels?",
            a: "You get a full refund and other times to choose from. We tell you as soon as it happens.",
          },
          {
            q: "Can I move a class to another time?",
            a: "Yes. Move it to another open time, as long as there is enough notice before the class starts. The old time reopens and the new one is held in one step.",
          },
        ],
      },
      {
        heading: "Child safety",
        items: [
          {
            q: "Is online tutoring safe for my child?",
            a: "Every tutor is verified before they can teach, every class is recorded, and you can sit in on any class. Your child joins from your account and never sees a payment screen.",
          },
          {
            q: "Does my child need an email address?",
            a: "No. You create the student account. Children do not need an email address.",
          },
          {
            q: "What does my child see on Tiisha?",
            a: "First names only. There are no photos of children, no public leaderboards and no free chat between children. A student sees only their own lessons, homework and scores.",
          },
        ],
      },
      {
        heading: "Recordings and privacy",
        items: [
          {
            q: "Are classes recorded?",
            a: "Yes. Recording starts only after a parent has given consent. A class without consent runs unrecorded, and the tutor sees a notice.",
          },
          {
            q: "Can I watch the class?",
            a: "Yes. Join live as an observer, or watch the recording later. Your child can replay the part they missed.",
          },
          {
            q: "Who can watch a recording?",
            a: "You, through a secure link that expires soon after it is opened. The tutor can view recordings of their own classes but cannot download or share them. Tiisha staff can review recordings for quality and safety. Every view is logged.",
          },
          {
            q: "How long are recordings kept?",
            a: "Recordings are kept for a set period and then removed. You can see the date a recording expires next to it.",
          },
          {
            q: "What do you keep about my child?",
            a: "Only what tutoring needs: first name, age group, school year or grade, curriculum and gender. We do not collect a birth date, a photo or an email address for a child.",
          },
        ],
      },
      {
        heading: "Progress and homework",
        items: [
          {
            q: "What feedback do I get after a class?",
            a: "The tutor writes down the topics covered, what went well, what to practise next and how much effort your child put in. If it is not in yet, the lesson shows a gentle waiting-for-tutor note.",
          },
          {
            q: "What is in the monthly progress report?",
            a: "The report puts feedback and assessments together: what your child can do now, the trend, and the topics that need work. Every number comes with plain words, such as up, down or steady.",
          },
          {
            q: "Can a tutor help with homework?",
            a: "Yes. Many families use classes for homework help as well as catching up and exam preparation. Tell the tutor what you want in the first class.",
          },
        ],
      },
    ],
  },
  {
    id: "tutors",
    title: "For tutors",
    intro: "Applying, the checks, availability, earnings and running your classes.",
    sections: [
      {
        heading: "Applying",
        items: [
          {
            q: "How do I apply?",
            a: "Start an application in the Tiisha app with your name, photo, bio, subjects and levels, years of experience, your price and one qualification. Then complete the checks.",
          },
          {
            q: "Can I teach families in other countries?",
            a: "Yes. Classes are live video. Times show in each person's own time zone.",
          },
        ],
      },
      {
        heading: "Checks",
        items: [
          {
            q: "What checks will I go through?",
            a: "A photo of an official ID matched to a live selfie, your qualification certificates, two referees, a video interview, a bank account in your own name and a signed tutor agreement. Our team reviews every step before final approval.",
          },
          {
            q: "Why so many checks?",
            a: "Parents trust Tiisha because of them. They protect children, and they protect you.",
          },
        ],
      },
      {
        heading: "Approval",
        items: [
          {
            q: "How long does approval take?",
            a: "It depends on how quickly you finish the steps and how quickly your referees reply. You can see your application status in the app, and we email you when it changes.",
          },
          {
            q: "What if I am not approved?",
            a: "We tell you why. Only tutors who pass every step are approved and appear in search.",
          },
        ],
      },
      {
        heading: "Availability",
        items: [
          {
            q: "How do I set my hours?",
            a: "Set weekly hours in your own time zone and open the slots that suit you. Times convert to each family's time zone for you.",
          },
          {
            q: "Can I block a day off?",
            a: "Yes. Blocked times disappear from search. If a booking already sits in that time, it is flagged for you and not cancelled silently.",
          },
        ],
      },
      {
        heading: "Earnings and payouts",
        items: [
          {
            q: "What currency am I paid in?",
            a: "You set your price in your own currency, and earnings pay out to your bank account.",
          },
          {
            q: "When is an earning approved?",
            a: "Each completed class creates an earning. It is approved once attendance and your feedback are recorded, and paid to your bank account after that.",
          },
        ],
      },
      {
        heading: "Classes and recordings",
        items: [
          {
            q: "Do I need a laptop to teach?",
            a: "No. A phone is enough to teach, and the app has everything you need, including a whiteboard you can write and draw on. A tablet or laptop gives you more room.",
          },
          {
            q: "What do I write after a class?",
            a: "A short form: topics covered, strengths, next step and effort. Topics come from a list. We remind you after class until it is saved.",
          },
        ],
      },
    ],
  },
  {
    id: "classes-and-technology",
    title: "Classes and technology",
    intro: "What you need, which devices work and how a live video class runs.",
    sections: [
      {
        items: [
          {
            q: "Which devices can we use?",
            a: "Phones, tablets and laptops. Tiisha works in a web browser and in the iPhone, iPad and Android apps, with one account across all of them.",
          },
          {
            q: "Do we need to install anything?",
            a: "No. You can join a class from the lesson link in a web browser. The apps are optional and add one-tap joining and reminders.",
          },
          {
            q: "Do we need a separate video-call subscription?",
            a: "No. Live video, the shared whiteboard and the recording are part of the class on Tiisha. You do not need to pay for or set up a separate video-call service.",
          },
          {
            q: "Can my child join a class from a phone?",
            a: "Yes. A phone shows the video and the chat, and you and your child can write and draw on the whiteboard from it. A tablet or laptop gives more room.",
          },
          {
            q: "Does it work on a tablet?",
            a: "Yes, in the browser or in the app. A tablet is a good choice because the bigger screen gives more room on the whiteboard. You also need a camera, a microphone and an internet connection.",
          },
          {
            q: "How does a live class run?",
            a: "Your child, the tutor and, if you wish, you join the class room. Video, chat and a shared whiteboard sit side by side. The tutor leads the class and ends it.",
          },
          {
            q: "When can we join?",
            a: "You can join from 10 minutes before the start, in one tap from the reminder or from the home screen.",
          },
          {
            q: "What time zone are classes in?",
            a: "Yours. Times show in your time zone. If your tutor is in another part of the world, they see their own.",
          },
          {
            q: "What if the internet is slow or drops?",
            a: "When a connection is weak, we aim to lower video quality first and keep the audio going. If you drop out, rejoin from the same lesson link or the app.",
          },
          {
            q: "Will I get reminders?",
            a: "Yes. We send reminders before each class. Messages about class changes and cancellations cannot be switched off.",
          },
        ],
      },
    ],
  },
  {
    id: "safety-and-trust",
    title: "Safety and trust",
    intro: "How we check tutors, who can see what, and what to do if something feels wrong.",
    sections: [
      {
        items: [
          {
            q: "Who are the tutors?",
            a: "Teachers, graduates and subject specialists from around the world, each one chosen for the subjects and grades they teach. Each one is verified before they can teach.",
          },
          {
            q: "How do I know a tutor is real?",
            a: "They pass an ID and live selfie check, and we verify their qualifications and referees. You will see a verified badge on their profile.",
          },
          {
            q: "What if something feels wrong in a class?",
            a: "Tell us and we review the recording. You can also join any live class quietly from your own phone to see for yourself.",
          },
          {
            q: "Do tutors see my contact details?",
            a: "Not before a booking is confirmed. Profiles and messages carry no phone number or email address before then.",
          },
          {
            q: "Can anyone join my child's class?",
            a: "No. Only the booked student, their parent and the tutor can enter. A person without a booking cannot join, and the class link cannot be guessed.",
          },
          {
            q: "Is access to my child's information logged?",
            a: "Yes. Child data is private by default, and every access is explicit and logged. That includes every view of a recording.",
          },
        ],
      },
    ],
  },
  {
    id: "account-and-support",
    title: "Account and support",
    intro: "Your account, your children, notifications and how to reach us.",
    sections: [
      {
        items: [
          {
            q: "Why do I need to verify my email?",
            a: "You cannot book until your email is verified. The link in the email expires after a short time, so use it soon after you sign up.",
          },
          {
            q: "How do I add or switch between children?",
            a: "Add each child with their first name, age group, school year or grade and curriculum. Switch between children in one tap. The schedule, recordings and progress follow the child you pick.",
          },
          {
            q: "I forgot my password. What do I do?",
            a: "Use the reset link on the sign-in page. Each reset link works once and expires after a short time. You can also sign out of all devices.",
          },
          {
            q: "How do I change my currency?",
            a: "You pick a currency when you sign up. You can change it before your first booking.",
          },
          {
            q: "How do I contact Tiisha support?",
            a: "Contact Tiisha support and tell us the date, the tutor's name and what happened, so we can find the class quickly.",
          },
        ],
      },
    ],
  },
];

export const allGroupFaqs = (): Faq[] => FAQ_GROUPS.flatMap((g) => g.sections.flatMap((s) => s.items));

/** A stable anchor id for a question, used by links and the search script. */
export const faqSlug = (q: string) =>
  "q-" +
  q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
