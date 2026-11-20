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
    titleKeywords: "Online tutors for Common Entrance, WAEC, NECO and JAMB",
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
