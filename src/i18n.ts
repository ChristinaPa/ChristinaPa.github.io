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

// Full-site translations. Proper nouns, product names, role titles, technology
// tags, certification names, and article titles intentionally stay in English
// (industry standard in the German and Greek tech communities); the surrounding
// prose, section labels, and group names are localized.
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
  focus: {
    eyebrow: string;
    title: string;
    lead: string;
    weekTitle: string;
    weekLead: string;
    topics: { title: string; description: string }[];
    whatIDo: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    microsoftTitle: string;
    engineeringTitle: string;
    microsoft: { period: string; summary: string }[];
    engineering: { period: string; summary: string }[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: { degree: string; period: string; summary: string; thesisLabel: string }[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    lead: string;
    associateTitle: string;
    fundamentalsTitle: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    lead: string;
    groupNames: string[];
  };
  community: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; description: string; bullets?: string[]; note?: string; linkLabels?: string[] }[];
  };
  blog: {
    eyebrow: string;
    title: string;
    lead: string;
    allArticles: string;
  };
  resources: {
    eyebrow: string;
    title: string;
    intro: string;
    groupNames: string[];
    notes: (string | null)[];
    linksComingSoon: string;
  };
  interests: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; description: string; bullets?: string[]; note?: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailMe: string;
    copyEmail: string;
    copied: string;
  };
  i18nNotice?: { text: string; linkLabel: string };
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
    focus: {
      eyebrow: 'What I do',
      title: 'Focus areas',
      lead: 'Areas where I help Microsoft partners design, build, and ship.',
      weekTitle: 'In a typical week',
      weekLead: 'My work has a particular focus on the German market.',
      topics: [
        {
          title: 'Agentic AI architectures',
          description:
            'Helping partners design and deploy AI applications that are reliable, secure, and production-ready — from first prototype to scale, with a focus on Microsoft Foundry.',
        },
        {
          title: 'GitHub-driven SDLC modernization',
          description:
            'Driving GitHub-driven SDLC modernization across the partner ecosystem — modern developer workflows, automation, and GitHub Copilot. And yes, this website was built with GitHub Copilot.',
        },
      ],
      whatIDo: [
        'Delivering technical trainings and hands-on workshops to upskill partner teams',
        'Running architecture reviews and design sessions to validate solutions before they scale',
        'Building proofs of concept that de-risk new ideas and prove value quickly',
        'Collaborating closely with account teams to align technical strategy with business goals',
        'Guiding partners on reliable, secure, and cost-efficient cloud and AI solutions',
        'Driving GitHub and developer-productivity adoption across the partner ecosystem',
      ],
    },
    experience: {
      eyebrow: 'Career',
      title: 'Work experience',
      lead: "Where I've worked and what I focused on.",
      microsoftTitle: 'My Microsoft journey',
      engineeringTitle: 'When I thought I wanted to work as an engineer',
      microsoft: [
        {
          period: 'Feb 2026 – Present · Munich',
          summary:
            'Work directly with EMEA partners on Agentic AI architectures and GitHub-driven SDLC modernization, providing technical guidance on building reliable, performant, secure, and cost-efficient cloud solutions and helping them shape their own cloud services offerings. Communications Lead of the Mosaic Inclusion Network in Germany, championing multicultural inclusion and representation.',
        },
        {
          period: 'Sep 2022 – Feb 2026 · Munich',
          summary:
            'Worked directly with enterprise customers, specializing in Microsoft Fabric, Azure Data Factory, Azure Synapse Analytics, Azure Databricks, and Power BI. Ran proof of concepts and architecture reviews, delivered technical workshops, drove feature requests with Product Engineering, and coordinated AI and lakehouse migration projects end to end. Delivered Microsoft Fabric sessions at the Microsoft Executive Center EMEA to 50+ senior decision makers.',
        },
        {
          period: 'Oct 2021 – Mar 2022 · Munich',
          summary:
            'Ran market research and a Dynamics 365 Remote Assist lead-generation campaign for Automotive and Manufacturing accounts using LinkedIn Sales Navigator and Dynamics 365 Sales, built outreach templates, analyzed campaign results, and supported presales demos.',
        },
        {
          period: 'Jan 2020 – Mar 2022 · Thessaloniki',
          summary:
            'Authored a Microsoft Learn path on Azure Health Bot and spoke at virtual events on Azure Machine Learning, Power Platform, Cloud Security, and Health Bot — including the Global AI Student Conference 2021 — while building local tech communities.',
        },
      ],
      engineering: [
        {
          period: 'Jun 2021 – Sep 2021 · Thessaloniki',
          summary:
            'Supported radio frequency engineering, including E911 call testing for small cells and creating KPI reports for network efficiency.',
        },
        {
          period: 'Jan 2020 – Jun 2020 · Thessaloniki',
          summary:
            'Gained hands-on experience in network management, traffic accounting, wireless networks, routing, and switching using LibreNMS, Icinga, SecureCRT, and Cisco Prime Infrastructure.',
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Education',
      items: [
        {
          degree: 'M.Eng. Electrical & Computer Engineering — Telecommunications',
          period: '2016 – 2022',
          summary: 'Telecommunications Engineering. Thesis: Interference in novel leadless pacemaker implants.',
          thesisLabel: 'Read my thesis →',
        },
      ],
    },
    certifications: {
      eyebrow: 'Credentials',
      title: 'Certifications',
      lead: 'Microsoft and Databricks certifications.',
      associateTitle: 'Associate level',
      fundamentalsTitle: 'Fundamentals',
    },
    skills: {
      eyebrow: 'Toolbox',
      title: 'Skills',
      lead: 'Technologies and practices I work with regularly.',
      groupNames: ['Data & Analytics', 'Programming', 'AI', 'Cloud & Architecture', 'GitHub & DevOps'],
    },
    community: {
      eyebrow: 'What I care about',
      title: 'Community & inclusion',
      lead:
        "Beyond architecture, I'm passionate about multicultural communities and inclusion — bringing people together and making sure everyone has a seat at the table.",
      items: [
        {
          title: 'Mosaic Inclusion Network',
          description:
            'Communications Lead of the Mosaic Inclusion Network at Microsoft Germany, championing multicultural inclusion and representation across our community at Microsoft.',
          note:
            'At Microsoft, an inclusion network is an employee-led community that brings people together around a shared background or experience to foster belonging, drive cultural awareness, and support one another across the company.',
        },
        {
          title: 'ReDI School volunteering',
          description:
            'Volunteering with <a href="https://www.redi-school.org/" target="_blank" rel="noopener">ReDI School of Digital Integration</a>, helping newcomers build digital skills:',
          bullets: [
            'Taught a full semester of AI Fundamentals to newcomers as part of a teaching team',
            'Returned twice as a train-the-trainer mentor, coaching teachers on how to use AI in their own teaching',
          ],
          note:
            'If this resonates with you, please consider volunteering or donating to ReDI School — every bit helps newcomers build the digital skills to thrive.',
          linkLabels: ['LinkedIn post about volunteer teachers'],
        },
        {
          title: 'Student leadership & volunteering',
          description: 'Mentoring others and growing diverse tech communities through student leadership:',
          bullets: [
            'Volunteered with <a href="https://aiesec.org/" target="_blank" rel="noopener">AIESEC</a>, supporting international student exchange and leadership',
            'Contributed to the Student Conference of Electrical and Computer Engineering (ECESCON) as marketing manager',
            'Served as a <a href="https://mvp.microsoft.com/studentambassadors" target="_blank" rel="noopener">Microsoft Learn Student Ambassador</a>',
          ],
        },
      ],
    },
    blog: {
      eyebrow: 'Writing',
      title: 'From the blog',
      lead: "Articles I've published on cloud, AI, and architecture.",
      allArticles: 'All articles →',
    },
    resources: {
      eyebrow: 'Toolbox',
      title: 'Resources',
      intro:
        'These are some of my personal go-to links to help you on your journey. With today\u2019s AI tools you can surface plenty of resources on your own — but these are the ones I\u2019ve seen genuinely help the partners and customers I work with. Consider them my personal recommendations.',
      groupNames: ['Agentic AI architectures', 'GitHub-driven SDLC modernization'],
      notes: ['My focus here is on Microsoft Azure as the core technology.', null],
      linksComingSoon: 'Links coming soon.',
    },
    interests: {
      eyebrow: 'Beyond work',
      title: 'Personal interests',
      lead:
        "When I'm not designing data and AI solutions, I'm usually outdoors — most often on a mountain trail.",
      items: [
        {
          title: 'Hiking adventures',
          description: "Hiking is my favourite way to switch off. Two trails I'll never forget:",
          bullets: [
            'Trekking to Everest Base Camp in Nepal',
            "Standing on top of the Zugspitze, Germany's highest peak",
          ],
          note: "Closer to home, most weekends you'll find me somewhere in the Bavarian Alps.",
        },
        {
          title: 'Travel & exploring',
          description:
            "I love exploring cultures outside of Europe and usually combine my trips with a good hike. So far I've visited 37 of the world's 193 countries. And yes — at 28, I still text my mum the moment I land somewhere new.",
        },
        {
          title: 'Running',
          description: 'Mostly I just try to run 10 km without dying.',
        },
        {
          title: 'Mentoring',
          description:
            'I love mentoring students and early-in-career professionals — helping people break into tech, navigate their first cloud or AI roles, and grow the confidence to back themselves.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's connect",
      lead: "Interested in collaborating, or just want to say hi? I'd love to hear from you.",
      emailMe: 'Email me',
      copyEmail: 'Copy email',
      copied: 'Copied!',
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
    focus: {
      eyebrow: 'Τι κάνω',
      title: 'Τομείς εστίασης',
      lead: 'Τομείς όπου βοηθώ τους partners της Microsoft να σχεδιάζουν, να χτίζουν και να παραδίδουν λύσεις.',
      weekTitle: 'Σε μια τυπική εβδομάδα',
      weekLead: 'Η δουλειά μου έχει ιδιαίτερη εστίαση στη γερμανική αγορά.',
      topics: [
        {
          title: 'Αρχιτεκτονικές Agentic AI',
          description:
            'Βοηθώ τους partners να σχεδιάζουν και να αναπτύσσουν εφαρμογές AI που είναι αξιόπιστες, ασφαλείς και έτοιμες για παραγωγή — από το πρώτο prototype έως την κλιμάκωση, με έμφαση στο Microsoft Foundry.',
        },
        {
          title: 'Εκσυγχρονισμός του SDLC με γνώμονα το GitHub',
          description:
            'Προωθώ τον εκσυγχρονισμό του SDLC με γνώμονα το GitHub σε όλο το οικοσύστημα των partners — σύγχρονες ροές εργασίας για developers, αυτοματισμό και GitHub Copilot. Και ναι, αυτό το website φτιάχτηκε με GitHub Copilot.',
        },
      ],
      whatIDo: [
        'Παραδίδω τεχνικά trainings και πρακτικά workshops για την αναβάθμιση των δεξιοτήτων των ομάδων των partners',
        'Διεξάγω architecture reviews και design sessions ώστε να επικυρώνουμε τις λύσεις πριν κλιμακωθούν',
        'Δημιουργώ proofs of concept που μειώνουν το ρίσκο νέων ιδεών και αποδεικνύουν γρήγορα την αξία τους',
        'Συνεργάζομαι στενά με τις account teams για να ευθυγραμμίζω την τεχνική στρατηγική με τους επιχειρηματικούς στόχους',
        'Καθοδηγώ τους partners σε αξιόπιστες, ασφαλείς και οικονομικά αποδοτικές λύσεις cloud και AI',
        'Προωθώ την υιοθέτηση του GitHub και της παραγωγικότητας των developers σε όλο το οικοσύστημα των partners',
      ],
    },
    experience: {
      eyebrow: 'Καριέρα',
      title: 'Επαγγελματική εμπειρία',
      lead: 'Πού έχω εργαστεί και σε τι εστίασα.',
      microsoftTitle: 'Η διαδρομή μου στη Microsoft',
      engineeringTitle: 'Όταν νόμιζα ότι ήθελα να γίνω μηχανικός',
      microsoft: [
        {
          period: 'Φεβ. 2026 – σήμερα · Μόναχο',
          summary:
            'Συνεργάζομαι απευθείας με partners σε όλη την EMEA πάνω σε αρχιτεκτονικές Agentic AI και στον εκσυγχρονισμό του SDLC με γνώμονα το GitHub, παρέχοντας τεχνική καθοδήγηση για τη δημιουργία αξιόπιστων, αποδοτικών, ασφαλών και οικονομικά αποδοτικών λύσεων cloud, και βοηθώντας τους partners να διαμορφώσουν τις δικές τους προσφορές cloud υπηρεσιών. Communications Lead του Mosaic Inclusion Network στη Γερμανία, προωθώντας την πολυπολιτισμική συμπερίληψη και εκπροσώπηση.',
        },
        {
          period: 'Σεπ. 2022 – Φεβ. 2026 · Μόναχο',
          summary:
            'Συνεργάστηκα απευθείας με enterprise πελάτες, με εξειδίκευση στο Microsoft Fabric, το Azure Data Factory, το Azure Synapse Analytics, το Azure Databricks και το Power BI. Υλοποίησα proof of concepts και architecture reviews, παρέδωσα τεχνικά workshops, προώθησα feature requests μαζί με το Product Engineering και συντόνισα έργα μετάβασης σε AI και lakehouse από την αρχή έως το τέλος. Παρέδωσα sessions για το Microsoft Fabric στο Microsoft Executive Center EMEA σε 50+ ανώτερα στελέχη που λαμβάνουν αποφάσεις.',
        },
        {
          period: 'Οκτ. 2021 – Μάρ. 2022 · Μόναχο',
          summary:
            'Διεξήγαγα έρευνα αγοράς και μια καμπάνια lead generation για το Dynamics 365 Remote Assist σε πελάτες των κλάδων Automotive και Manufacturing, χρησιμοποιώντας το LinkedIn Sales Navigator και το Dynamics 365 Sales· δημιούργησα templates επικοινωνίας, ανέλυσα τα αποτελέσματα της καμπάνιας και υποστήριξα presales demos.',
        },
        {
          period: 'Ιαν. 2020 – Μάρ. 2022 · Θεσσαλονίκη',
          summary:
            'Συνέγραψα ένα Microsoft Learn path για το Azure Health Bot και μίλησα σε virtual events για το Azure Machine Learning, το Power Platform, το Cloud Security και το Health Bot — μεταξύ άλλων στο Global AI Student Conference 2021 — χτίζοντας παράλληλα τοπικές τεχνολογικές κοινότητες.',
        },
      ],
      engineering: [
        {
          period: 'Ιούν. 2021 – Σεπ. 2021 · Θεσσαλονίκη',
          summary:
            'Υποστήριξα εργασίες radio frequency engineering, συμπεριλαμβανομένων δοκιμών κλήσεων E911 για small cells και της δημιουργίας αναφορών KPI για την αποδοτικότητα του δικτύου.',
        },
        {
          period: 'Ιαν. 2020 – Ιούν. 2020 · Θεσσαλονίκη',
          summary:
            'Απέκτησα πρακτική εμπειρία σε διαχείριση δικτύων, traffic accounting, ασύρματα δίκτυα, routing και switching, χρησιμοποιώντας LibreNMS, Icinga, SecureCRT και Cisco Prime Infrastructure.',
        },
      ],
    },
    education: {
      eyebrow: 'Εκπαίδευση',
      title: 'Εκπαίδευση',
      items: [
        {
          degree: 'M.Eng. Ηλεκτρολόγων Μηχανικών & Μηχανικών Υπολογιστών — Τηλεπικοινωνίες',
          period: '2016 – 2022',
          summary:
            'Τομέας Τηλεπικοινωνιών. Διπλωματική εργασία: Παρεμβολές σε νέου τύπου εμφυτεύσιμους βηματοδότες χωρίς ηλεκτρόδια (leadless).',
          thesisLabel: 'Διάβασε τη διπλωματική μου →',
        },
      ],
    },
    certifications: {
      eyebrow: 'Διαπιστευτήρια',
      title: 'Πιστοποιήσεις',
      lead: 'Πιστοποιήσεις Microsoft και Databricks.',
      associateTitle: 'Επίπεδο Associate',
      fundamentalsTitle: 'Fundamentals',
    },
    skills: {
      eyebrow: 'Εργαλειοθήκη',
      title: 'Δεξιότητες',
      lead: 'Τεχνολογίες και πρακτικές με τις οποίες δουλεύω τακτικά.',
      groupNames: ['Data & Analytics', 'Προγραμματισμός', 'AI', 'Cloud & Αρχιτεκτονική', 'GitHub & DevOps'],
    },
    community: {
      eyebrow: 'Αυτά που με νοιάζουν',
      title: 'Κοινότητα & συμπερίληψη',
      lead:
        'Πέρα από την αρχιτεκτονική, με συγκινούν οι πολυπολιτισμικές κοινότητες και η συμπερίληψη — να φέρνω ανθρώπους κοντά και να εξασφαλίζω ότι όλοι έχουν θέση στο τραπέζι.',
      items: [
        {
          title: 'Mosaic Inclusion Network',
          description:
            'Communications Lead του Mosaic Inclusion Network στη Microsoft Γερμανίας, προωθώντας την πολυπολιτισμική συμπερίληψη και εκπροσώπηση σε όλη την κοινότητά μας στη Microsoft.',
          note:
            'Στη Microsoft, ένα inclusion network είναι μια κοινότητα που καθοδηγείται από εργαζομένους και φέρνει κοντά ανθρώπους με κοινό υπόβαθρο ή εμπειρία, ώστε να καλλιεργεί το αίσθημα του ανήκειν, να ενισχύει την πολιτισμική επίγνωση και να στηρίζει τα μέλη της σε όλη την εταιρεία.',
        },
        {
          title: 'Εθελοντισμός στο ReDI School',
          description:
            'Εθελοντισμός με το <a href="https://www.redi-school.org/" target="_blank" rel="noopener">ReDI School of Digital Integration</a>, βοηθώντας newcomers να αναπτύξουν ψηφιακές δεξιότητες:',
          bullets: [
            'Δίδαξα ένα ολόκληρο εξάμηνο AI Fundamentals σε newcomers ως μέλος μιας ομάδας εκπαιδευτών',
            'Επέστρεψα δύο φορές ως train-the-trainer mentor, καθοδηγώντας εκπαιδευτές στο πώς να χρησιμοποιούν το AI στη δική τους διδασκαλία',
          ],
          note:
            'Αν αυτό σου μιλάει, σκέψου να γίνεις εθελοντής ή να κάνεις μια δωρεά στο ReDI School — κάθε βοήθεια μετράει ώστε οι newcomers να αποκτήσουν τις ψηφιακές δεξιότητες για να ευδοκιμήσουν.',
          linkLabels: ['Δημοσίευση στο LinkedIn για τους εθελοντές εκπαιδευτές'],
        },
        {
          title: 'Φοιτητική ηγεσία & εθελοντισμός',
          description: 'Καθοδηγώ άλλους και αναπτύσσω ποικιλόμορφες τεχνολογικές κοινότητες μέσα από φοιτητική ηγεσία:',
          bullets: [
            'Εθελοντισμός με την <a href="https://aiesec.org/" target="_blank" rel="noopener">AIESEC</a>, υποστηρίζοντας τη διεθνή ανταλλαγή φοιτητών και την ηγεσία',
            'Συνεισέφερα στο Student Conference of Electrical and Computer Engineering (ECESCON) ως marketing manager',
            'Διετέλεσα <a href="https://mvp.microsoft.com/studentambassadors" target="_blank" rel="noopener">Microsoft Learn Student Ambassador</a>',
          ],
        },
      ],
    },
    blog: {
      eyebrow: 'Αρθρογραφία',
      title: 'Από το blog',
      lead: 'Άρθρα που έχω δημοσιεύσει για cloud, AI και αρχιτεκτονική.',
      allArticles: 'Όλα τα άρθρα →',
    },
    resources: {
      eyebrow: 'Εργαλειοθήκη',
      title: 'Πόροι',
      intro:
        'Αυτά είναι μερικά από τα προσωπικά μου go-to links για να σε βοηθήσουν στη διαδρομή σου. Με τα σημερινά εργαλεία AI μπορείς να βρεις άφθονους πόρους μόνος σου — αλλά αυτοί είναι εκείνοι που έχω δει να βοηθούν πραγματικά τους partners και τους πελάτες με τους οποίους συνεργάζομαι. Θεώρησέ τους προσωπικές μου προτάσεις.',
      groupNames: ['Αρχιτεκτονικές Agentic AI', 'Εκσυγχρονισμός του SDLC με γνώμονα το GitHub'],
      notes: ['Εδώ η εστίασή μου είναι στο Microsoft Azure ως βασική τεχνολογία.', null],
      linksComingSoon: 'Σύντομα κι άλλα links.',
    },
    interests: {
      eyebrow: 'Πέρα από τη δουλειά',
      title: 'Προσωπικά ενδιαφέροντα',
      lead:
        'Όταν δεν σχεδιάζω λύσεις data και AI, είμαι συνήθως έξω στη φύση — τις περισσότερες φορές σε κάποιο ορεινό μονοπάτι.',
      items: [
        {
          title: 'Περιπέτειες πεζοπορίας',
          description: 'Η πεζοπορία είναι ο αγαπημένος μου τρόπος για να αποσυνδέομαι. Δύο διαδρομές που δεν θα ξεχάσω ποτέ:',
          bullets: [
            'Πεζοπορία μέχρι το Everest Base Camp στο Νεπάλ',
            'Στην κορυφή του Zugspitze, του ψηλότερου βουνού της Γερμανίας',
          ],
          note: 'Πιο κοντά στο σπίτι, τα περισσότερα σαββατοκύριακα θα με βρεις κάπου στις Βαυαρικές Άλπεις.',
        },
        {
          title: 'Ταξίδια & εξερεύνηση',
          description:
            'Λατρεύω να εξερευνώ πολιτισμούς εκτός Ευρώπης και συνήθως συνδυάζω τα ταξίδια μου με μια καλή πεζοπορία. Μέχρι τώρα έχω επισκεφθεί 37 από τις 193 χώρες του κόσμου. Και ναι — στα 28 μου, ακόμα στέλνω μήνυμα στη μαμά μου μόλις προσγειωθώ κάπου καινούργια.',
        },
        {
          title: 'Τρέξιμο',
          description: 'Ως επί το πλείστον, απλώς προσπαθώ να τρέξω 10 χλμ. χωρίς να πεθάνω.',
        },
        {
          title: 'Mentoring',
          description:
            'Λατρεύω να κάνω mentoring σε φοιτητές και επαγγελματίες στα πρώτα τους βήματα — βοηθώντας ανθρώπους να μπουν στον χώρο της τεχνολογίας, να βρουν τον δρόμο τους στους πρώτους ρόλους cloud ή AI και να αποκτήσουν την αυτοπεποίθηση να στηρίζονται στον εαυτό τους.',
        },
      ],
    },
    contact: {
      eyebrow: 'Επικοινωνία',
      title: 'Ας συνδεθούμε',
      lead: 'Σε ενδιαφέρει μια συνεργασία ή θέλεις απλώς να πεις ένα γεια; Θα χαρώ πολύ να επικοινωνήσεις μαζί μου.',
      emailMe: 'Στείλε μου email',
      copyEmail: 'Αντιγραφή email',
      copied: 'Αντιγράφηκε!',
    },
    i18nNotice: {
      text: 'Αυτή η σελίδα μεταφράστηκε αυτόματα — ορισμένες διατυπώσεις μπορεί να μην αποδίδονται απόλυτα σωστά.',
      linkLabel: 'Δες την αγγλική έκδοση',
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
    focus: {
      eyebrow: 'Was ich mache',
      title: 'Schwerpunkte',
      lead: 'Bereiche, in denen ich Microsoft-Partner beim Entwerfen, Entwickeln und Ausliefern unterstütze.',
      weekTitle: 'In einer typischen Woche',
      weekLead: 'Mein Fokus liegt besonders auf dem deutschen Markt.',
      topics: [
        {
          title: 'Agentic-AI-Architekturen',
          description:
            'Ich unterstütze Partner dabei, KI-Anwendungen zu entwerfen und bereitzustellen, die zuverlässig, sicher und produktionsreif sind — vom ersten Prototyp bis zur Skalierung, mit Fokus auf Microsoft Foundry.',
        },
        {
          title: 'GitHub-getriebene SDLC-Modernisierung',
          description:
            'Ich treibe die GitHub-getriebene SDLC-Modernisierung im gesamten Partner-Ökosystem voran — moderne Entwickler-Workflows, Automatisierung und GitHub Copilot. Und ja, diese Website wurde mit GitHub Copilot gebaut.',
        },
      ],
      whatIDo: [
        'Technische Trainings und praxisnahe Workshops, um Partner-Teams weiterzubilden',
        'Architecture Reviews und Design Sessions, um Lösungen vor der Skalierung zu validieren',
        'Proofs of Concept, die neue Ideen absichern und ihren Mehrwert schnell belegen',
        'Enge Zusammenarbeit mit Account-Teams, um technische Strategie und Geschäftsziele in Einklang zu bringen',
        'Beratung von Partnern zu zuverlässigen, sicheren und kosteneffizienten Cloud- und KI-Lösungen',
        'Förderung der Einführung von GitHub und Entwicklerproduktivität im gesamten Partner-Ökosystem',
      ],
    },
    experience: {
      eyebrow: 'Werdegang',
      title: 'Berufserfahrung',
      lead: 'Wo ich gearbeitet habe und worauf ich mich konzentriert habe.',
      microsoftTitle: 'Mein Weg bei Microsoft',
      engineeringTitle: 'Als ich dachte, ich wollte als Ingenieurin arbeiten',
      microsoft: [
        {
          period: 'Feb. 2026 – heute · München',
          summary:
            'Ich arbeite direkt mit Partnern in der gesamten EMEA-Region an Agentic-AI-Architekturen und GitHub-getriebener SDLC-Modernisierung, biete technische Beratung zum Aufbau zuverlässiger, performanter, sicherer und kosteneffizienter Cloud-Lösungen und unterstütze die Partner bei der Gestaltung ihrer eigenen Cloud-Service-Angebote. Communications Lead des Mosaic Inclusion Network in Deutschland, das sich für multikulturelle Inklusion und Repräsentation einsetzt.',
        },
        {
          period: 'Sep. 2022 – Feb. 2026 · München',
          summary:
            'Ich arbeitete direkt mit Enterprise-Kunden, spezialisiert auf Microsoft Fabric, Azure Data Factory, Azure Synapse Analytics, Azure Databricks und Power BI. Ich habe Proofs of Concept und Architecture Reviews durchgeführt, technische Workshops gehalten, Feature Requests gemeinsam mit dem Product Engineering vorangetrieben und KI- und Lakehouse-Migrationsprojekte end-to-end koordiniert. Außerdem habe ich im Microsoft Executive Center EMEA Microsoft-Fabric-Sessions für über 50 Entscheidungsträger gehalten.',
        },
        {
          period: 'Okt. 2021 – März 2022 · München',
          summary:
            'Ich führte Marktforschung und eine Lead-Generierungskampagne für Dynamics 365 Remote Assist im Automotive- und Manufacturing-Segment durch — mit LinkedIn Sales Navigator und Dynamics 365 Sales —, erstellte Outreach-Vorlagen, analysierte die Kampagnenergebnisse und unterstützte Presales-Demos.',
        },
        {
          period: 'Jan. 2020 – März 2022 · Thessaloniki',
          summary:
            'Ich erstellte einen Microsoft-Learn-Pfad zum Azure Health Bot und sprach bei virtuellen Events über Azure Machine Learning, Power Platform, Cloud Security und Health Bot — unter anderem auf der Global AI Student Conference 2021 — und baute dabei lokale Tech-Communities auf.',
        },
      ],
      engineering: [
        {
          period: 'Juni 2021 – Sep. 2021 · Thessaloniki',
          summary:
            'Ich unterstützte im Bereich Radio Frequency Engineering, einschließlich E911-Anruftests für Small Cells und der Erstellung von KPI-Reports zur Netzwerkeffizienz.',
        },
        {
          period: 'Jan. 2020 – Juni 2020 · Thessaloniki',
          summary:
            'Ich sammelte praktische Erfahrung in Netzwerkmanagement, Traffic Accounting, drahtlosen Netzwerken, Routing und Switching mit LibreNMS, Icinga, SecureCRT und Cisco Prime Infrastructure.',
        },
      ],
    },
    education: {
      eyebrow: 'Ausbildung',
      title: 'Ausbildung',
      items: [
        {
          degree: 'M.Eng. Elektro- und Informationstechnik — Telekommunikation',
          period: '2016 – 2022',
          summary:
            'Schwerpunkt Telekommunikationstechnik. Abschlussarbeit: Interferenzen bei neuartigen elektrodenlosen (leadless) Herzschrittmacher-Implantaten.',
          thesisLabel: 'Meine Abschlussarbeit lesen →',
        },
      ],
    },
    certifications: {
      eyebrow: 'Qualifikationen',
      title: 'Zertifizierungen',
      lead: 'Microsoft- und Databricks-Zertifizierungen.',
      associateTitle: 'Associate-Level',
      fundamentalsTitle: 'Fundamentals',
    },
    skills: {
      eyebrow: 'Toolbox',
      title: 'Fähigkeiten',
      lead: 'Technologien und Methoden, mit denen ich regelmäßig arbeite.',
      groupNames: ['Data & Analytics', 'Programmierung', 'AI', 'Cloud & Architektur', 'GitHub & DevOps'],
    },
    community: {
      eyebrow: 'Was mir wichtig ist',
      title: 'Community & Inklusion',
      lead:
        'Über die Architektur hinaus begeistere ich mich für multikulturelle Communities und Inklusion — Menschen zusammenzubringen und dafür zu sorgen, dass alle einen Platz am Tisch haben.',
      items: [
        {
          title: 'Mosaic Inclusion Network',
          description:
            'Communications Lead des Mosaic Inclusion Network bei Microsoft Deutschland, das sich für multikulturelle Inklusion und Repräsentation in unserer gesamten Community bei Microsoft einsetzt.',
          note:
            'Bei Microsoft ist ein Inclusion Network eine von Mitarbeitenden geführte Community, die Menschen mit gemeinsamem Hintergrund oder gemeinsamen Erfahrungen zusammenbringt, um Zugehörigkeit zu fördern, kulturelles Bewusstsein zu stärken und einander unternehmensweit zu unterstützen.',
        },
        {
          title: 'Ehrenamt bei der ReDI School',
          description:
            'Ehrenamtliches Engagement bei der <a href="https://www.redi-school.org/" target="_blank" rel="noopener">ReDI School of Digital Integration</a>, um Neuankömmlingen beim Aufbau digitaler Kompetenzen zu helfen:',
          bullets: [
            'Ein ganzes Semester AI Fundamentals für Neuankömmlinge als Teil eines Lehrteams unterrichtet',
            'Zweimal als Train-the-Trainer-Mentorin zurückgekehrt und Lehrkräfte darin gecoacht, KI in ihrem eigenen Unterricht einzusetzen',
          ],
          note:
            'Wenn dich das anspricht, denk bitte darüber nach, dich ehrenamtlich zu engagieren oder an die ReDI School zu spenden — jede Unterstützung hilft Neuankömmlingen, die digitalen Kompetenzen für ein erfolgreiches Ankommen aufzubauen.',
          linkLabels: ['LinkedIn-Beitrag über die ehrenamtlichen Lehrkräfte'],
        },
        {
          title: 'Engagement & Ehrenamt im Studium',
          description: 'Ich begleite andere und baue vielfältige Tech-Communities durch studentisches Engagement auf:',
          bullets: [
            'Ehrenamtlich bei <a href="https://aiesec.org/" target="_blank" rel="noopener">AIESEC</a> aktiv, zur Förderung von internationalem Studierendenaustausch und Leadership',
            'Bei der Student Conference of Electrical and Computer Engineering (ECESCON) als Marketing Manager mitgewirkt',
            'Als <a href="https://mvp.microsoft.com/studentambassadors" target="_blank" rel="noopener">Microsoft Learn Student Ambassador</a> tätig gewesen',
          ],
        },
      ],
    },
    blog: {
      eyebrow: 'Publikationen',
      title: 'Aus dem Blog',
      lead: 'Artikel, die ich zu Cloud, KI und Architektur veröffentlicht habe.',
      allArticles: 'Alle Artikel →',
    },
    resources: {
      eyebrow: 'Toolbox',
      title: 'Ressourcen',
      intro:
        'Das sind einige meiner persönlichen Go-to-Links, die dir auf deinem Weg helfen sollen. Mit den heutigen KI-Tools kannst du selbst jede Menge Ressourcen finden — aber das hier sind die, von denen ich gesehen habe, dass sie den Partnern und Kunden, mit denen ich arbeite, wirklich helfen. Betrachte sie als meine persönlichen Empfehlungen.',
      groupNames: ['Agentic-AI-Architekturen', 'GitHub-getriebene SDLC-Modernisierung'],
      notes: ['Mein Fokus liegt hier auf Microsoft Azure als Kerntechnologie.', null],
      linksComingSoon: 'Weitere Links folgen in Kürze.',
    },
    interests: {
      eyebrow: 'Neben der Arbeit',
      title: 'Persönliche Interessen',
      lead:
        'Wenn ich nicht gerade Daten- und KI-Lösungen entwerfe, bin ich meist draußen — am liebsten auf einem Bergpfad.',
      items: [
        {
          title: 'Wander-Abenteuer',
          description: 'Wandern ist für mich die liebste Art abzuschalten. Zwei Touren, die ich nie vergessen werde:',
          bullets: [
            'Trekking zum Everest Base Camp in Nepal',
            'Auf dem Gipfel der Zugspitze, Deutschlands höchstem Berg',
          ],
          note: 'Näher an zu Hause findest du mich an den meisten Wochenenden irgendwo in den Bayerischen Alpen.',
        },
        {
          title: 'Reisen & Entdecken',
          description:
            'Ich liebe es, Kulturen außerhalb Europas zu entdecken, und verbinde meine Reisen meist mit einer schönen Wanderung. Bisher habe ich 37 der 193 Länder der Welt besucht. Und ja — mit 28 schreibe ich immer noch meiner Mama, sobald ich irgendwo Neues lande.',
        },
        {
          title: 'Laufen',
          description: 'Meistens versuche ich einfach, 10 km zu laufen, ohne zu sterben.',
        },
        {
          title: 'Mentoring',
          description:
            'Ich liebe es, Studierende und Berufseinsteiger zu mentoren — Menschen dabei zu helfen, in die Tech-Welt einzusteigen, ihre ersten Cloud- oder KI-Rollen zu meistern und das Selbstvertrauen zu entwickeln, an sich zu glauben.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Lass uns vernetzen',
      lead: 'Interesse an einer Zusammenarbeit oder einfach nur Hallo sagen? Ich freue mich, von dir zu hören.',
      emailMe: 'E-Mail schreiben',
      copyEmail: 'E-Mail kopieren',
      copied: 'Kopiert!',
    },
    i18nNotice: {
      text: 'Diese Seite wurde automatisch übersetzt — einige Formulierungen sind möglicherweise nicht ganz korrekt.',
      linkLabel: 'Zur englischen Version',
    },
  },
};

export function getTranslation(locale: Locale): Translation {
  return ui[locale] ?? ui[defaultLocale];
}
