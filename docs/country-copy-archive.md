# Country copy archive

Country-specific copy removed from the Tiisha marketing site when it moved to one global copy set (November 2026). Nothing here is live. When the site goes live in specific countries, take text from this file, or restore the original files from git history (the commit before the global copy change; try `git log -- src/content/markets.ts`).

What was removed, in short:

- Six market pages (/us, /uk, /ca, /ng, /gh, /ke) with their own hero, exams line, pricing line, extra FAQ, currency, hreflang set and sitemap entries.
- The market switcher bar, the footer country list, the "Looks like you are in" banner and the cookie and browser-language redirect (cookie name tiisha_market).
- Ten exam pages: 11-plus, gcse, a-level, sat, act, waec, neco, jamb, bece, kcse. Their old URLs now 301 to /tutors.
- Country lines inside each subject page.
- Currency and country text on the pricing, teach, how-it-works, faq and tutor-checks pages.

## Market definitions (src/content/markets.ts)

```ts
export type MarketSlug = "us" | "uk" | "ca" | "ng" | "gh" | "ke";

export type Faq = { q: string; a: string };

export type Market = {
  slug: MarketSlug;
  name: string;
  short: string;
  hreflang: string;
  iso: string;
  currency: { code: string; name: string; symbol: string };
  /** Short list used inside sentences, for example "Tutors teach to {exams}". */
  exams: string;
  headline: string;
  subline: string;
  examsLine: string;
  pricingLine: string;
  extraFaq: Faq;
  /** Level label for the hero illustration. */
  level: string;
  /** Short title keywords for metadata. */
  titleKeywords: string;
};

export const MARKETS: Market[] = [
  {
    slug: "us",
    name: "United States",
    short: "US",
    hreflang: "en-US",
    iso: "US",
    currency: { code: "USD", name: "US dollars", symbol: "$" },
    exams: "Common Core, SAT, ACT and AP",
    headline: "A tutor who gets your child past the stuck point.",
    subline:
      "Live one-to-one classes with verified tutors from around the world, for any grade. Homework help, test prep and catching up. Watch every class, and get a progress report every month.",
    examsLine:
      "Tutors teach to Common Core and state standards, and prepare students for the SAT, ACT and AP exams.",
    pricingLine: "Prices in US dollars. Pay by card.",
    extraFaq: {
      q: "Can my child prepare for the SAT or ACT?",
      a: "Yes. Choose SAT or ACT as the goal. We show tutors who teach it and practice assessments in the same format.",
    },
    level: "Grade 6",
    titleKeywords: "Online tutors for Common Core, SAT, ACT and AP",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    short: "UK",
    hreflang: "en-GB",
    iso: "GB",
    currency: { code: "GBP", name: "pounds", symbol: "£" },
    exams: "the 11 plus, GCSE and A level",
    headline: "The right tutor for the 11 plus, GCSEs and A levels.",
    subline:
      "Live one-to-one classes with verified tutors from around the world. Catch up, stretch ahead or prepare for the next exam. Watch every class, and get a progress report every month.",
    examsLine: "Tutors teach the National Curriculum, 11 plus, GCSE and A level, across the exam boards.",
    pricingLine: "Prices in pounds. Pay by card.",
    extraFaq: {
      q: "Does the tutor know my child's exam board?",
      a: "Add the board when you search, for example AQA, Edexcel or OCR, and we show tutors who teach it.",
    },
    level: "Year 7",
    titleKeywords: "Online tutors for the 11 plus, GCSE and A level",
  },
  {
    slug: "ca",
    name: "Canada",
    short: "Canada",
    hreflang: "en-CA",
    iso: "CA",
    currency: { code: "CAD", name: "Canadian dollars", symbol: "C$" },
    exams: "your province's curriculum",
    headline: "A tutor who follows your child's provincial curriculum.",
    subline:
      "Live one-to-one classes with verified tutors from around the world. Pick your province and your child's grade, and we show tutors who teach it. Watch every class, and get a progress report every month.",
    examsLine:
      "Tutors teach the curriculum of your province, from Ontario and British Columbia to Alberta, Quebec and the rest.",
    pricingLine: "Prices in Canadian dollars. Pay by card.",
    extraFaq: {
      q: "Which provinces do tutors cover?",
      a: "Tell us your province when you add your child. Tutors list the provinces and grades they teach.",
    },
    level: "Grade 6",
    titleKeywords: "Online tutors for every provincial curriculum",
  },
  {
    slug: "ng",
    name: "Nigeria",
    short: "Nigeria",
    hreflang: "en-NG",
    iso: "NG",
    currency: { code: "NGN", name: "naira", symbol: "₦" },
    exams: "Common Entrance, WAEC, NECO and JAMB",
    headline: "Tutors who have already sat where your child is going.",
    subline:
      "From Common Entrance to WAEC, NECO and JAMB, learn live with verified tutors, here in Nigeria or anywhere in the world. No commute, no evening rush to a lesson centre. Watch every class, and get a progress report every month.",
    examsLine:
      "Tutors teach the Nigerian curriculum, Common Entrance, WAEC, NECO and JAMB UTME, and British and American curricula for private schools.",
    pricingLine: "Prices in naira. Pay by card or bank transfer.",
    extraFaq: {
      q: "Can my child prepare for JAMB with Tiisha?",
      a: "Yes. Pick JAMB UTME as the goal and we show tutors who teach it, with practice assessments in the JAMB format.",
    },
    level: "JSS 1",
    titleKeywords: "Online tutors for WAEC, NECO, JAMB and more",
  },
  {
    slug: "gh",
    name: "Ghana",
    short: "Ghana",
    hreflang: "en-GH",
    iso: "GH",
    currency: { code: "GHS", name: "Ghana cedis", symbol: "GH₵" },
    exams: "BECE and WASSCE",
    headline: "BECE and WASSCE help from tutors who know the syllabus.",
    subline:
      "Live one-to-one classes with verified tutors, here in Ghana or anywhere in the world, from primary school to final year. Watch every class, and get a progress report every month.",
    examsLine:
      "Tutors teach the Ghana Education Service curriculum, BECE and WASSCE, in basic school and senior high school.",
    pricingLine: "Prices in Ghana cedis.",
    extraFaq: {
      q: "My child is in JHS 3. Can you help with the BECE?",
      a: "Yes. Choose BECE as the goal and we match your child with tutors who teach it and know the past questions.",
    },
    level: "JHS 1",
    titleKeywords: "Online tutors for BECE and WASSCE",
  },
  {
    slug: "ke",
    name: "Kenya",
    short: "Kenya",
    hreflang: "en-KE",
    iso: "KE",
    currency: { code: "KES", name: "Kenyan shillings", symbol: "KSh" },
    exams: "the CBC and KCSE",
    headline: "A tutor who knows the CBC, so homework stops being a guessing game.",
    subline:
      "Live one-to-one classes with verified tutors, here in Kenya or anywhere in the world, aligned to the Competency Based Curriculum and KCSE. Watch every class, and get a progress report every month.",
    examsLine:
      "Tutors teach the CBC from primary through junior school, and KCSE for senior school. Assessments follow the CBC format.",
    pricingLine: "Prices in Kenyan shillings.",
    extraFaq: {
      q: "My child is in Grade 7. Do tutors know the new curriculum?",
      a: "Tutors are checked on the subjects and grades they teach. Filter by CBC and your child's grade to see only those who do.",
    },
    level: "Grade 7",
    titleKeywords: "Online tutors for the CBC and KCSE",
  },
];

export const DEFAULT_MARKET: MarketSlug = "uk";

export const MARKET_SLUGS = MARKETS.map((m) => m.slug);

export function getMarket(slug: string): Market | undefined {
  return MARKETS.find((m) => m.slug === slug);
}

export function mustMarket(slug: string): Market {
  const m = getMarket(slug);
  if (!m) throw new Error(`Unknown market ${slug}`);
  return m;
}

/** Sentence form of all six pay currencies, as written in the copy deck. */
export const ALL_CURRENCIES_SENTENCE =
  "naira, pounds, US dollars, Canadian dollars, cedis or Kenyan shillings";

export const ALL_CURRENCIES = [
  { code: "NGN", name: "Nigerian naira", symbol: "₦" },
  { code: "GBP", name: "British pounds", symbol: "£" },
  { code: "USD", name: "US dollars", symbol: "$" },
  { code: "CAD", name: "Canadian dollars", symbol: "C$" },
  { code: "GHS", name: "Ghana cedis", symbol: "GH₵" },
  { code: "KES", name: "Kenyan shillings", symbol: "KSh" },
];

export function coreFaq(exams: string): Faq[] {
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
      a: `Tutors teach to ${exams}. Tell us the school year and curriculum when you sign up and we show tutors who teach it.`,
    },
    {
      q: "What time zone are classes in?",
      a: "Yours. Times show in your time zone. If your tutor is in another country, they see their own.",
    },
    {
      q: "Do we need a laptop?",
      a: "No. A phone works. A laptop or tablet gives a bigger whiteboard.",
    },
    {
      q: "Can I pay in my own currency?",
      a: "Yes. Choose naira, pounds, US dollars, Canadian dollars, cedis or Kenyan shillings when you sign up.",
    },
  ];
}

export const TUTOR_FAQ: Faq[] = [
  {
    q: "Can I teach families in other countries?",
    a: "Yes. Classes are live video. Times show in each person's own time zone.",
  },
  {
    q: "Which country do I choose if I live in one country and hold a passport from another?",
    a: "Choose the country you live in and can show an ID for. Your ID check and payout follow that country.",
  },
  {
    q: "What currency am I paid in?",
    a: "Naira, cedis or Kenyan shillings if you are in Nigeria, Ghana or Kenya. Pounds in the UK, Canadian dollars in Canada and US dollars everywhere else.",
  },
  {
    q: "Do I need a laptop?",
    a: "No. The app has everything you need to teach, including a whiteboard.",
  },
  {
    q: "What does Tiisha keep?",
    a: "A fee on each class, taken before your earnings are shown.",
  },
  {
    q: "Why so many checks?",
    a: "Parents trust Tiisha because of them. They protect children, and they protect you.",
  },
];

```

## Market detection (src/lib/detect.ts)

```ts
import type { MarketSlug } from "@/content/markets";

const REGION: Record<string, MarketSlug> = { US: "us", GB: "uk", CA: "ca", NG: "ng", GH: "gh", KE: "ke" };

const ZONES: Record<string, MarketSlug> = {
  "Africa/Lagos": "ng",
  "Africa/Accra": "gh",
  "Africa/Nairobi": "ke",
  "Europe/London": "uk",
  "Europe/Belfast": "uk",
  "America/Toronto": "ca",
  "America/Vancouver": "ca",
  "America/Edmonton": "ca",
  "America/Winnipeg": "ca",
  "America/Halifax": "ca",
  "America/St_Johns": "ca",
  "America/Regina": "ca",
  "America/Montreal": "ca",
  "America/New_York": "us",
  "America/Chicago": "us",
  "America/Denver": "us",
  "America/Los_Angeles": "us",
  "America/Phoenix": "us",
  "America/Anchorage": "us",
  "America/Detroit": "us",
  "Pacific/Honolulu": "us",
};

/** Picks a market from the browser language region first, then the time zone. */
export function detectMarket(languages: readonly string[], timeZone: string | undefined): MarketSlug | null {
  for (const lang of languages) {
    const region = lang.split("-")[1]?.toUpperCase();
    if (region && REGION[region]) return REGION[region];
  }
  if (timeZone && ZONES[timeZone]) return ZONES[timeZone];
  return null;
}

export const BOT_PATTERN =
  /bot|crawl|spider|slurp|lighthouse|headless|pagespeed|gtmetrix|prerender|facebookexternalhit|preview/i;

```

## Per-subject country lines

### maths

```ts
    markets: {
      us: "Tutors teach to Common Core and state standards, from elementary arithmetic through algebra and geometry, and prepare students for the SAT and ACT maths sections and AP courses.",
      uk: "Tutors cover the National Curriculum, 11 plus maths, GCSE maths and A level maths and further maths.",
      ca: "Tutors teach the maths course of your province and grade, and list the provinces they know.",
      ng: "Tutors cover primary maths, Common Entrance, WAEC and NECO mathematics, and the JAMB UTME maths paper.",
      gh: "Tutors cover basic school mathematics, BECE mathematics and WASSCE core mathematics.",
      ke: "Tutors cover CBC mathematics from primary through junior school, and KCSE mathematics for senior school.",
    },
```

### english

```ts
    markets: {
      us: "Tutors cover English language arts from elementary school through high school, including reading, writing and the reading and writing section of the SAT.",
      uk: "Tutors cover English in the National Curriculum, verbal reasoning and comprehension for the 11 plus, and GCSE English language and literature.",
      ca: "Tutors teach English language arts to your province's curriculum.",
      ng: "Tutors cover primary English, Common Entrance English, and Use of English for WAEC, NECO and JAMB.",
      gh: "Tutors cover English language for basic school, the BECE and the WASSCE.",
      ke: "Tutors cover English in the CBC and for KCSE.",
    },
```

### science

```ts
    markets: {
      us: "Tutors teach general science in elementary and middle school and the high school courses that follow.",
      uk: "Tutors cover National Curriculum science, and GCSE combined science or the separate sciences.",
      ca: "Tutors teach the science course of your province and grade.",
      ng: "Tutors cover basic science at primary and junior secondary level, then the sciences for WAEC, NECO and JAMB.",
      gh: "Tutors cover integrated science for basic school and the BECE, and the sciences for WASSCE.",
      ke: "Tutors cover integrated science in the CBC, and the sciences for KCSE.",
    },
```

### physics

```ts
    markets: {
      us: "Tutors support high school physics and AP physics courses.",
      uk: "Tutors cover GCSE physics, combined science physics content and A level physics.",
      ng: "Tutors cover physics for WAEC and NECO, and the JAMB UTME physics paper.",
      gh: "Tutors cover physics for the WASSCE.",
      ke: "Tutors cover physics for KCSE and the senior school sciences.",
    },
```

### chemistry

```ts
    markets: {
      us: "Tutors support high school chemistry and AP chemistry courses.",
      uk: "Tutors cover GCSE chemistry, combined science chemistry content and A level chemistry.",
      ng: "Tutors cover chemistry for WAEC and NECO, and the JAMB UTME chemistry paper.",
      gh: "Tutors cover chemistry for the WASSCE.",
      ke: "Tutors cover chemistry for KCSE and the senior school sciences.",
    },
```

### biology

```ts
    markets: {
      us: "Tutors support high school biology and AP biology courses.",
      uk: "Tutors cover GCSE biology, combined science biology content and A level biology.",
      ng: "Tutors cover biology for WAEC and NECO, and the JAMB UTME biology paper.",
      gh: "Tutors cover biology for the WASSCE.",
      ke: "Tutors cover biology for KCSE and the senior school sciences.",
    },
```

### coding

```ts
    markets: {
      us: "Coding is offered as an extra subject. Tutors list the languages and levels they teach.",
      uk: "Tutors may support school computing and computer science, including GCSE and A level. Check each profile.",
      ca: "Coding is offered as an extra subject. Tutors list the languages and levels they teach.",
      ng: "Coding is offered as an extra subject, and some tutors support school computing.",
      gh: "Coding is offered as an extra subject, and some tutors support school computing.",
      ke: "Coding is offered as an extra subject, and some tutors support school computing.",
    },
```

## Exam pages (removed from src/content/subjects.ts)

These entries use the old Subject type, which had a `markets` field keyed by country slug.

```ts
  {
    slug: "11-plus",
    name: "11 plus",
    kind: "exam",
    h1: "Online 11 plus tutors, live and one to one",
    title: "Online 11 plus tutors for selective school entry",
    description:
      "Verified online 11 plus tutors for live one-to-one classes. English, maths and reasoning for selective school entry. Every class recorded.",
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
      "Verified online GCSE tutors for live one-to-one classes. Maths, English, sciences and more, with exam board support. Every class recorded.",
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
      "Verified online A level tutors for live one-to-one classes. Maths, sciences and more, with exam board support. Every class recorded.",
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
      "Verified online SAT tutors for live one-to-one classes. Reading and writing, maths and timed practice. Every class recorded.",
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
      "Verified online ACT tutors for live one-to-one classes. English, maths, reading and timed practice. Every class recorded.",
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
      "Verified online WAEC and WASSCE tutors for live one-to-one classes. Maths, English, sciences and past question practice. Every class recorded.",
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
      "Verified online NECO tutors for live one-to-one classes. Maths, English, sciences and past question practice. Every class recorded.",
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
      "Verified online JAMB UTME tutors for live one-to-one classes. Use of English and subjects, with practice in the JAMB format. Every class recorded.",
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
      "Verified online BECE tutors for live one-to-one classes. English, maths, science and past question practice. Every class recorded.",
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
      "Verified online KCSE tutors for live one-to-one classes. Maths, English, sciences and exam preparation. Every class recorded.",
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
```

## Other removed copy

### Footer (src/components/Footer.tsx)

```tsx
      <nav className="country" aria-label="Country sites">
        <span className="label">Country</span>
        {MARKETS.map((m) => (
          <Link key={m.slug} href={`/${m.slug}`} className="chip">
            {m.name}
          </Link>
        ))}
      </nav>
      <p className="small">
        Tiisha serves families in the United States, United Kingdom, Canada, Nigeria, Ghana and Kenya. Tutors teach from
        anywhere.
      </p>
```

### Pricing section, currency grid and Choose your country (src/components/sections.tsx)

```tsx
export function CurrencyGrid() {
  return (
    <>
      <ul className="currencies">
        {ALL_CURRENCIES.map((c) => (
          <li className="cur" key={c.code}>
            <div className="code">{c.code}</div>
            <div className="sym">{c.symbol}</div>
            <div className="nm">{c.name}</div>
          </li>
        ))}
      </ul>
      <p className="note">Each tutor sets their own price. Tiisha shows it in the currency you chose.</p>
    </>
  );
}

export function PricingSection({ market }: { market: Market }) {
  return (
    <section id="pricing" className="section surface">
      <div className="wrap two">
        <div>
          <h2 className="title">Clear prices in {market.currency.name}.</h2>
          <p className="lead">
            Each tutor sets one price per hour. You see it in your currency, and that is what you pay. Free cancellation up
            to 24 hours before a class. You can pay in naira, pounds, US dollars, Canadian dollars, cedis or Kenyan
            shillings.
          </p>
          <p className="pricing-line">{market.pricingLine}</p>
          <p style={{ marginTop: 14 }}>
            <Link href="/pricing" className="textlink">
              More about pricing
            </Link>
          </p>
        </div>
        <div>
          <CurrencyGrid />
        </div>
      </div>
    </section>
  );
}
```

```tsx
export function ChooseCountry() {
  return (
    <section className="section bg">
      <div className="wrap">
        <h2 className="title">Choose your country.</h2>
        <p className="lead">
          Where you live sets the curricula and exams we show, your currency and your time zone. Tutors can be anywhere in
          the world.
        </p>
        <ul className="grid3">
          {MARKETS.map((m) => (
            <li key={m.slug}>
              <Link href={`/${m.slug}`} className="linkcard">
                <span className="h">{m.name}</span>
                <span className="d">
                  {m.exams.charAt(0).toUpperCase() + m.exams.slice(1)}. Prices in {m.currency.name}.
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

### Pricing page (src/app/pricing/page.tsx)

```tsx
      <Section title="Six currencies">
        <p className="lead" style={{ marginBottom: 24 }}>
          Free cancellation up to 24 hours before a class. You can pay in naira, pounds, US dollars, Canadian dollars,
          cedis or Kenyan shillings.
        </p>
        <CurrencyGrid />
      </Section>

      <Section tone="surface" title="Prices and payment by country">
        <table className="tbl">
          <caption className="sr-only">Currency and payment line for each country</caption>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Currency</th>
              <th scope="col">Payment</th>
            </tr>
          </thead>
          <tbody>
            {MARKETS.map((m) => (
              <tr key={m.slug}>
                <th scope="row">
                  <Link href={`/${m.slug}`}>{m.name}</Link>
                </th>
                <td>
                  {m.currency.name} ({m.currency.code})
                </td>
                <td>{m.pricingLine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
```

### Teach page (src/app/teach/page.tsx)

Description and lead said: "Families in the US, UK, Canada, Nigeria, Ghana and Kenya are looking for tutors like you."

First approval step: "Tell us where you teach from. Choose your country." ID step: "A photo of your ID and a short live selfie check. Some countries need an ID number too."

```tsx
      <Section title="Where do you teach from?">
        <div className="prose">
          <p>
            This decides your ID check and the currency you are paid in. You can teach families in any country. You choose
            the country you live in and can show an ID for.
          </p>
          <ul>
            <li>
              <strong>Nigeria:</strong> You will need your BVN and NIN, a photo of your ID and a live selfie.
            </li>
            <li>
              <strong>Ghana:</strong> You will need your Ghana Card number, a photo of your ID and a live selfie.
            </li>
            <li>
              <strong>Any other country:</strong> You will need a photo of a government ID, such as a passport or national
              ID card, and a live selfie.
            </li>
          </ul>
        </div>
      </Section>
```

### Tutor checks page (src/app/tutor-checks/page.tsx)

> For tutors in Nigeria we also check BVN and NIN, and for tutors in Ghana the Ghana Card number.

### How it works page (src/app/how-it-works/page.tsx)

> A parent in Toronto can book a tutor in Lagos, Nairobi or Manchester, and classes are live video, so distance does not matter.

The section "Pick your country for exact curricula and prices" linked to each market page.

### Terms and privacy drafts

- Terms: "Supported payment methods in each country: TO CONFIRM."
- Privacy: "Rights by country, the legal basis for processing and the contact address for privacy requests: TO CONFIRM."

### Metadata

- Home page used the UK market copy by default.
- Physics, chemistry and biology titles: "Online physics tutors for GCSE, A level, WAEC and more" (same pattern for chemistry and biology).
- Tutors index description: "Find verified online tutors by subject or exam: maths, English, sciences, coding, 11 plus, GCSE, A level, SAT, ACT, WAEC, NECO, JAMB, BECE and KCSE."
- Service JSON-LD listed one Country per market in areaServed.
- hreflang: en-US, en-GB, en-CA, en-NG, en-GH, en-KE and x-default, pointing to /us, /uk, /ca, /ng, /gh, /ke and /.
