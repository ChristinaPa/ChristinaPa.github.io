export const defaultLocale = 'en' as const;
export const locales = ['en', 'el', 'de'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  el: 'ΕΛ',
  de: 'DE',
};

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  el: 'Ελληνικά',
  de: 'Deutsch',
};

// Proof-of-concept scope: hero + about are fully translated; the remaining
// sections currently fall back to English. Expand these dictionaries to
// translate more of the site.
export interface Translation {
  htmlLang: string;
  metaTitleSuffix: string;
  nav: {
    about: string;
    focus: string;
    experience: string;
    education: string;
    skills: string;
    community: string;
    blog: string;
    resources: string;
    interests: string;
    contact: string;
  };
  hero: {
    role: string;
    greeting: string;
    welcome: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    title: string;
    para1Html: string;
    para2Html: string;
    para3Html: string;
    funFacts: string[];
    factRole: string;
    factLocation: string;
    factFocus: string;
    factLanguages: string;
    locationValue: string;
    focusValue: string;
    languagesValue: string;
    footnoteHtml: string;
  };
}

export const ui: Record<Locale, Translation> = {
  en: {
    htmlLang: 'en',
    metaTitleSuffix: 'Partner Solution Architect',
    nav: {
      about: 'About',
      focus: 'Focus areas',
      experience: 'Work experience',
      education: 'Education',
      skills: 'Skills',
      community: 'Community',
      blog: 'Blog',
      resources: 'Resources',
      interests: 'Interests',
      contact: 'Contact',
    },
    hero: {
      role: 'Partner Solution Architect',
      greeting: "Hi, I'm",
      welcome:
        'Welcome to my little corner of the internet! I\u2019m a Greek who fell in love with Munich, a Partner Solution Architect at Microsoft by day, and a mountain-chaser the rest of the time. Grab a coffee, scroll around, and get to know me a bit.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'What I do',
    },
    about: {
      eyebrow: 'About',
      title: 'A bit about me',
      para1Html:
        '<span class="about-lead">👋 Hi!</span> I\'m a Partner Solution Architect on Microsoft\'s EMEA<a href="#emea-note" class="footnote-ref" aria-label="What does EMEA mean?">*</a> team, based in Munich. Originally from Thessaloniki, Greece, I moved to Munich when I was 23 and have called it home ever since. I work with partners to build reliable and cost-efficient Agentic AI architectures, help them shape their cloud services offerings, and drive GitHub-driven SDLC modernization across the ecosystem.',
      para2Html:
        '<span class="about-lead">📊 Before that</span> I spent three and a half years as a Data Analytics Cloud Solution Architect, specializing in Microsoft Fabric, Azure Databricks, Synapse, Data Factory, and Power BI. I love delivering technical workshops and sharing what I learn.',
      para3Html:
        '<span class="about-lead">🎤 Beyond the day job</span> I deliver executive briefings — sessions where I meet with customer leadership teams to cut through the noise on AI and translate the technology into clear business value. Alongside this, I serve as Communications Lead of the Mosaic Inclusion Network in Germany, championing multicultural inclusion and representation across our community at Microsoft.',
      funFacts: [
        '🇬🇷 Greek at heart',
        '🏔️ Munich-based',
        '🥾 Hiked to Everest Base Camp',
        '☕ Coffee-powered',
        '🗣️ Speaks Greek, English & German',
        '🤖 Built this site with Copilot',
      ],
      factRole: 'Role',
      factLocation: 'Location',
      factFocus: 'Focus',
      factLanguages: 'Languages',
      locationValue: 'Munich, Germany',
      focusValue: 'AI Apps · Azure · GitHub',
      languagesValue: 'Greek · English · German',
      footnoteHtml:
        '<span aria-hidden="true">*</span> EMEA stands for Europe, the Middle East, and Africa — the region this role covers.',
    },
  },
  el: {
    htmlLang: 'el',
    metaTitleSuffix: 'Partner Solution Architect',
    nav: {
      about: 'Σχετικά',
      focus: 'Τομείς εστίασης',
      experience: 'Εμπειρία',
      education: 'Εκπαίδευση',
      skills: 'Δεξιότητες',
      community: 'Κοινότητα',
      blog: 'Blog',
      resources: 'Πόροι',
      interests: 'Ενδιαφέροντα',
      contact: 'Επικοινωνία',
    },
    hero: {
      role: 'Partner Solution Architect',
      greeting: 'Γεια, είμαι η',
      welcome:
        'Καλώς ήρθες στη μικρή μου γωνιά του διαδικτύου! Είμαι μια Ελληνίδα που ερωτεύτηκε το Μόναχο — Partner Solution Architect στη Microsoft τη μέρα και κυνηγός βουνών τον υπόλοιπο καιρό. Πάρε έναν καφέ, ρίξε μια ματιά και γνώρισέ με λίγο.',
      ctaPrimary: 'Επικοινώνησε μαζί μου',
      ctaSecondary: 'Τι κάνω',
    },
    about: {
      eyebrow: 'Σχετικά',
      title: 'Λίγα λόγια για μένα',
      para1Html:
        '<span class="about-lead">👋 Γεια!</span> Είμαι Partner Solution Architect στην ομάδα EMEA<a href="#emea-note" class="footnote-ref" aria-label="Τι σημαίνει EMEA;">*</a> της Microsoft, με έδρα το Μόναχο. Κατάγομαι από τη Θεσσαλονίκη και μετακόμισα στο Μόναχο στα 23 μου, που έκτοτε το θεωρώ σπίτι μου. Συνεργάζομαι με partners για να χτίσουμε αξιόπιστες και οικονομικά αποδοτικές αρχιτεκτονικές Agentic AI, τους βοηθώ να διαμορφώσουν τις προσφορές cloud υπηρεσιών τους και προωθώ τον εκσυγχρονισμό του SDLC με γνώμονα το GitHub σε όλο το οικοσύστημα.',
      para2Html:
        '<span class="about-lead">📊 Πριν από αυτό</span> πέρασα τρεισήμισι χρόνια ως Data Analytics Cloud Solution Architect, με εξειδίκευση στο Microsoft Fabric, το Azure Databricks, το Synapse, το Data Factory και το Power BI. Λατρεύω να παραδίδω τεχνικά workshops και να μοιράζομαι όσα μαθαίνω.',
      para3Html:
        '<span class="about-lead">🎤 Πέρα από τη δουλειά</span> πραγματοποιώ executive briefings — συναντήσεις με τις ηγετικές ομάδες πελατών, όπου ξεκαθαρίζουμε τον θόρυβο γύρω από το AI και μεταφράζουμε την τεχνολογία σε ξεκάθαρη επιχειρηματική αξία. Παράλληλα, είμαι Communications Lead του Mosaic Inclusion Network στη Γερμανία, προωθώντας την πολυπολιτισμική συμπερίληψη και εκπροσώπηση στην κοινότητά μας στη Microsoft.',
      funFacts: [
        '🇬🇷 Ελληνίδα στην καρδιά',
        '🏔️ Με βάση το Μόναχο',
        '🥾 Πεζοπορία στο Everest Base Camp',
        '☕ Με καύσιμο τον καφέ',
        '🗣️ Μιλάει Ελληνικά, Αγγλικά & Γερμανικά',
        '🤖 Έφτιαξα αυτό το site με Copilot',
      ],
      factRole: 'Ρόλος',
      factLocation: 'Τοποθεσία',
      factFocus: 'Εστίαση',
      factLanguages: 'Γλώσσες',
      locationValue: 'Μόναχο, Γερμανία',
      focusValue: 'AI Apps · Azure · GitHub',
      languagesValue: 'Ελληνικά · Αγγλικά · Γερμανικά',
      footnoteHtml:
        '<span aria-hidden="true">*</span> EMEA σημαίνει Ευρώπη, Μέση Ανατολή και Αφρική — η περιοχή που καλύπτει αυτός ο ρόλος.',
    },
  },
  de: {
    htmlLang: 'de',
    metaTitleSuffix: 'Partner Solution Architect',
    nav: {
      about: 'Über mich',
      focus: 'Schwerpunkte',
      experience: 'Berufserfahrung',
      education: 'Ausbildung',
      skills: 'Fähigkeiten',
      community: 'Community',
      blog: 'Blog',
      resources: 'Ressourcen',
      interests: 'Interessen',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Partner Solution Architect',
      greeting: 'Hi, ich bin',
      welcome:
        'Willkommen in meiner kleinen Ecke des Internets! Ich bin eine Griechin, die sich in München verliebt hat — tagsüber Partner Solution Architect bei Microsoft und in der übrigen Zeit in den Bergen unterwegs. Schnapp dir einen Kaffee, schau dich um und lerne mich ein bisschen kennen.',
      ctaPrimary: 'Kontakt aufnehmen',
      ctaSecondary: 'Was ich mache',
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Ein bisschen über mich',
      para1Html:
        '<span class="about-lead">👋 Hallo!</span> Ich bin Partner Solution Architect im EMEA<a href="#emea-note" class="footnote-ref" aria-label="Was bedeutet EMEA?">*</a>-Team von Microsoft mit Sitz in München. Ursprünglich komme ich aus Thessaloniki, Griechenland; mit 23 bin ich nach München gezogen und nenne es seitdem mein Zuhause. Ich arbeite mit Partnern daran, zuverlässige und kosteneffiziente Agentic-AI-Architekturen aufzubauen, unterstütze sie bei der Gestaltung ihrer Cloud-Service-Angebote und treibe die GitHub-getriebene SDLC-Modernisierung im gesamten Ökosystem voran.',
      para2Html:
        '<span class="about-lead">📊 Davor</span> war ich dreieinhalb Jahre als Data Analytics Cloud Solution Architect tätig, spezialisiert auf Microsoft Fabric, Azure Databricks, Synapse, Data Factory und Power BI. Ich liebe es, technische Workshops zu halten und mein Wissen zu teilen.',
      para3Html:
        '<span class="about-lead">🎤 Neben dem Tagesgeschäft</span> halte ich Executive Briefings — Sitzungen mit den Führungsteams von Kunden, in denen wir den Lärm rund um KI durchdringen und die Technologie in klaren geschäftlichen Mehrwert übersetzen. Daneben bin ich Communications Lead des Mosaic Inclusion Network in Deutschland und setze mich für multikulturelle Inklusion und Repräsentation in unserer Community bei Microsoft ein.',
      funFacts: [
        '🇬🇷 Griechin im Herzen',
        '🏔️ In München zu Hause',
        '🥾 Zum Everest Base Camp gewandert',
        '☕ Kaffeebetrieben',
        '🗣️ Spricht Griechisch, Englisch & Deutsch',
        '🤖 Diese Seite mit Copilot gebaut',
      ],
      factRole: 'Rolle',
      factLocation: 'Standort',
      factFocus: 'Schwerpunkt',
      factLanguages: 'Sprachen',
      locationValue: 'München, Deutschland',
      focusValue: 'AI Apps · Azure · GitHub',
      languagesValue: 'Griechisch · Englisch · Deutsch',
      footnoteHtml:
        '<span aria-hidden="true">*</span> EMEA steht für Europa, den Nahen Osten und Afrika — die Region, die diese Rolle abdeckt.',
    },
  },
};

export function getTranslation(locale: Locale): Translation {
  return ui[locale] ?? ui[defaultLocale];
}
