// Single source of truth for all site content.
// Transcribed verbatim from Demetris_Bakas_CV.md — nothing here is invented.
// File paths point to assets copied into /public.

const BASE = process.env.PUBLIC_URL || "";

export const profile = {
  name: "Demetris Bakas",
  title: "Computer Engineering & Informatics Graduate",
  summary:
    "I am a software developer that loves to write code and be creative. I always find new technologies intriguing and I like to work with other people and be a part of a team. My goal is to develop software that people will find useful and will aid them in their everyday lives.",
  cvPdf: `${BASE}/cv/Demetris_Bakas_CV_(Academic).pdf`,
};

export const contact = {
  email: "demetrisbakas@hotmail.com",
  phone: "+357 965 174 34",
  linkedin: "https://linkedin.com/in/demetrisbakas/",
  github: "https://github.com/demetrisbakas",
  blog: "https://binarygrounds.com/",
};

export const education = [
  {
    period: "2013 - 2021",
    title: "Computer Engineering and Informatics",
    org: "University of Patras",
    description:
      "I am an integrated master's degree graduate. Grade: 6.52.",
    links: [
      { label: "View thesis", url: "https://github.com/demetrisbakas/ActivityCoachingBot/" },
    ],
  },
  {
    period: "2009 - 2012",
    title: "Graduated High School",
    org: "Kykkos A', Nicosia",
    description: "Grade: 19.2/20",
  },
];

export const experience = {
  work: [
    {
      period: "October 2024 - Now",
      title: "NCR Atleos",
      role: "Software Engineer",
      description: "Python, .NET, Angular, SQL, Microsoft Azure",
    },
    {
      period: "March 2022 - September 2024",
      title: "Goldman Solutions & Services",
      role: "Software Developer",
      description:
        "ASP.NET, SQL Server, MVC and Microsoft Azure. Bank of Cyprus contractor from June 2022 to March 2024 and from July 2024 since October 2024, working with .NET",
    },
    {
      period: "2016 - 2018",
      title: "EKAB (Internship)",
      role: "Patras Medical Station",
      description:
        "On call IT support representing Computer Engineering and Informatics Department of the University of Patras.",
    },
  ],
  vocational: [
    {
      period: "2018 - 2019",
      title: "Orange Grove Patras",
      role: "Member",
      description: "A mentoring incubator that teaches soft-skills to startups.",
    },
    {
      period: "2017 - 2018",
      title: "Lab assistant",
      role: "Introduction to Computers & Programming",
      description: "Using C programming language.",
    },
    {
      period: "2016",
      title: "Security team",
      role: "Member",
      description:
        "After the teams formation, its activities has been on hold since today, by the teams lead.",
    },
    {
      period: "2015 - 2021",
      title: "GOLD Microsoft Learn Student Ambassador",
      role: "GOLD since 2021, Active Member, Deputy Country Leader for Cyprus, Coordinator for South Greece Universities and Event Coordinator for Greece since 2020",
      description:
        "Microsoft Learn Student Ambassadors (previously named: Microsoft Student Partners) are student technology leaders, empowered to build Microsoft communities on their campus and share their deep knowledge and passion for technology with their fellow classmates. Was Digital Material Coordinator for one year (2019-2020). Currently the Community Manager for the University of Patras since 2019 as well as Coordinator for South Greece Universities and Event Coordinator for Greece since 2020.",
    },
    {
      period: "2014 - 2021",
      title: "StudentGuru Patras",
      role: "Member, Community Manager since 2019",
      description:
        "StudentGuru is an on-line as well as an offline community with many members, supported by Microsoft. Apart from the forums and the on-line discussions offline members attend or even create events based on new computer technologies spanning from software development to Internet of things. More than 20 presentations performed to this day and participation in various workshops, in relation to C#, Unity, Azure cloud services, Linux, OpenGL and many more. It was renamed to Microsoft Learn Student Ambassadors Patras in 2020.",
    },
  ],
  events: [
    {
      period: "2021",
      title: "Global Azure 2021",
      role: "AzureHeads",
      description:
        "Over 3 days, communities around the world are organizing localized live streams for everyone around the world to join and learn about Azure from the best-in-class community leaders. I was both a volunteer and a presenter at the event. I presented about proactive messages in Azure Bot Service and helped with the organization and smooth execution of the event.",
    },
    {
      period: "2020",
      title: "IT PRO | DEV Connections 2020",
      role: "Multiple Greek technical communities",
      description:
        "A 2-day long event with over 100 technical presentations about technology. Apart from being a speaker in the event, with a presentations covering Azure Bot Service, I was also part of the organizing team behind the event.",
    },
    {
      period: "2020",
      title: "Summer In Greece Festival",
      role: "Microsoft Learn Student Ambassadors",
      description:
        "A 5-day long festival with over 30 technical presentations about technology. Apart from being a speaker in the event, with a presentations covering Bot Framework and LUIS Services, I was also part of the organizing team behind the event.",
      links: [
        { label: "More information", url: "http://summeringreece.studentambassadors.gr/" },
      ],
    },
    {
      period: "2015 - 2016",
      title: "Hour of code",
      role: "Microsoft",
      description: "Presentation in junior high school as a Microsoft Student Partner.",
    },
    {
      period: "2015",
      title: "Night of the Living Devs",
      role: "Microsoft, 24hr hackathon",
      description: "Part of a four member team, 9th prize winners (UWP).",
    },
    {
      period: "2015",
      title: "Microsoft Imagine Cup",
      role: "National Finals",
      description:
        "With a five member team called Greencore Studios, submitted a tower defense game called Green Alert.",
    },
  ],
  miscellaneous: [
    {
      period: "2012 - 2013",
      title: "Military Service",
      role: "Cyprus",
      description:
        "I have completed my military service of 6 months in Cyprus as an artillery signalman.",
    },
  ],
};

export const certifications = [
  {
    year: "2022",
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    description:
      "Earning the Azure AI Engineer Associate certification validates the skills and knowledge required to build, manage, and deploy AI solutions that leverage Azure Cognitive Services, Azure Cognitive Search, and Microsoft Bot Framework. Candidates understand the components that make up the Azure AI portfolio.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_AI-102.pdf`,
  },
  {
    year: "2021",
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    description:
      "Earners of the Security, Compliance, and Identity Fundamentals demonstrate a functional understanding of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_SC-900.pdf`,
  },
  {
    year: "2021",
    title: "Microsoft 365 Certified: Fundamentals",
    issuer: "Microsoft",
    description:
      "Earning the Microsoft 365 Fundamentals certification demonstrates an understanding of the options available in Microsoft 365 and the benefits of adopting cloud services, the Software as a Service (SaaS) cloud model, and implementing Microsoft 365 cloud service.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_MS-900.pdf`,
  },
  {
    year: "2021",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    description:
      "Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_AI-900.pdf`,
  },
  {
    year: "2021",
    title: "Microsoft Certified: Power Platform Fundamentals",
    issuer: "Microsoft",
    description:
      "Earners of the Power Platform Fundamentals certification are users who aspire to improve productivity by automating business processes, analyzing data to produce business insights, and acting more effectively by creating simple app experiences.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_PL-900.pdf`,
  },
  {
    year: "2021",
    title: "MTA: Security Fundamentals",
    issuer: "Microsoft",
    description:
      "Earners of the MTA: Security Fundamentals certification have demonstrated fundamental security knowledge and skills.",
    file: `${BASE}/certificates/Microsoft_Technology_Associate_98-367.pdf`,
  },
  {
    year: "2021",
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    description:
      "Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_DP-900.pdf`,
  },
  {
    year: "2021",
    title: "Microsoft Certified: Dynamics 365 Fundamentals",
    issuer: "Microsoft",
    description:
      "Earners of the Microsoft Certified: Dynamics 365 Fundamentals certification demonstrate a functional understanding of Dynamics 365 capabilities and Microsoft cloud computing.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_MB-901.pdf`,
  },
  {
    year: "2021",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    description:
      "Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
    file: `${BASE}/certificates/Microsoft_Certified_Professional_Certificate_AZ-900.pdf`,
  },
  {
    year: "2015",
    title: "Quality Software Developer Foundation Certificate in Maintainability",
    issuer: "Software Improvement Group",
    description:
      "Building Maintainable Software using C#. In accordance with SIG standards for building maintainable software. (Beta exam)",
    file: `${BASE}/certificates/Demetris Bakas Certificate in Maintainability.pdf`,
  },
  {
    year: "ECDL",
    title: "ECDL",
    issuer: "European Computer Driving Licence",
    description:
      "ECDL / ICDL certification is a globally recognised information and communication technology (ICT) and digital literacy qualification.",
    file: null,
  },
];

export const publications = [
  {
    year: "2020",
    title: "Personal Blog",
    subtitle: "Creation of personal blog called binarygrounds.com",
    description:
      "This blog is dedicated to creating content on things I am working with and enjoy, on various programming related topics!",
    link: { label: "Visit blog", url: "https://binarygrounds.com/" },
  },
  {
    year: "2020",
    title:
      "Getting started with Bot Framework - Introduction to luis Cognitive Services",
    subtitle: "Microsoft Learn Student Ambassadors CEE YouTube channel",
    description:
      "This educational video demonstrates how to create a simple bot in Azure and get it ready to go. Following this video allows you to dive into Cognitive Services and use machine learning to teach your bot human interaction through understanding natural language. Train your bot to extract the exact information you need to process by guessing the user's intents and finding the entities in the sentence.",
    link: { label: "Watch video", url: "https://www.youtube.com/watch?v=da50ccvsGr4" },
  },
  {
    year: "2015",
    title: "Platform Rush",
    subtitle: "Unity2D",
    description:
      "An infinite platformer game, created using Unity2D and C#. Since the development of the project stopped the app was removed from the Google Play and Microsoft Store.",
    link: { label: "View on GitHub", url: "https://github.com/demetrisbakas/Platform-Rush" },
  },
];

export const languages = [
  { name: "Greek", level: "Native", note: "" },
  {
    name: "English",
    level: "Professional",
    note: "International General Certificate of Secondary Education (IGCSE) from the University of Cambridge.",
    file: `${BASE}/certificates/IGCSE.jpg`,
  },
];

export const programmingLanguages = [
  {
    name: "C#",
    level: "Highly Skilled",
    note: "Experienced with .NET, ASP.NET, UWP, Azure Cloud Services, Unity 2D/3D and Bot Framework.",
  },
  {
    name: "C",
    level: "Highly Skilled",
    note: "Lab assistant. Experienced with kernel programming and networking.",
  },
  { name: "Visual Basic", level: "Highly Skilled", note: "Experienced with .NET, ASP.NET" },
  { name: "SQL", level: "Intermediate level", note: "Experienced with SQL server and IBM i DB2 databases" },
  { name: "C++", level: "Intermediate level", note: "" },
  { name: "Python", level: "Intermediate level", note: "" },
];

export const softwareSkills = [
  {
    name: "Adobe Photoshop",
    level: "Highly Skilled",
    note: "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.",
  },
  {
    name: "Microsoft Office",
    level: "Highly Skilled",
    note: "Experienced in Word, Excel, PowerPoint and Access. Certified with ECDL.",
  },
  {
    name: "GIMP",
    level: "Intermediate level",
    note: "GIMP is a free and open-source raster graphics editor used for image retouching and editing, free-form drawing, converting between different image formats, and more specialized tasks.",
  },
  {
    name: "MATLAB",
    level: "Intermediate level",
    note: "MATLAB is a multi-paradigm numerical computing environment and proprietary programming language developed by MathWorks.",
  },
];

export const softSkills = [
  {
    name: "Communication",
    note: "Communication between various student groups and team projects.",
  },
  {
    name: "Team Spirit",
    note: "Member of the Microsoft Learn Student Ambassadors group, Member and Community Manager of the StudentGuru Patras student group.",
  },
  {
    name: "Presentational Skills",
    note: "Multiple presentations with student teams (like StudentGuru & Microsoft Learn Student Ambassadors) and within various university courses.",
  },
  {
    name: "Self-driven",
    note: "Motivation to learn new technologies and create fun projects!",
  },
];

export const interests = [
  { name: "Programming", note: "Passion for software engineering." },
  { name: "Music", note: "I find it relaxing and inspiring." },
  { name: "DIY", note: "Creating sceneries using everyday items is fascinating." },
  { name: "Reading", note: "A great way to pass my time and get lost in a fantasy world." },
];

// Skills & Programming Languages (Summary) — used as a quick tag cloud.
export const skillsSummary = [
  "C#", ".NET", "Visual Basic", "SQL", "C++", "Java", "Python", "C",
  "Azure Cloud Services", "Bot Framework", "Pascal", "Unity 2D/3D",
  "Assembly Atmel AT91", "Adobe Photoshop", "GIMP", "Microsoft Office",
  "ECDL", "Matlab",
];

export const courses = {
  column1: [
    "Digital Design I", "Mathematics I", "Physics I", "Physics Lab I",
    "Discrete Mathematics I", "Introduction to Computer Science", "English I",
    "Assembly Lab", "Object Oriented Programming I (Java)", "Circuit Theory",
    "Introduction to Algorithms", "Electronics Lab I", "Electronics Lab II",
    "Signals and Systems Theory", "Digital Signal Processing", "Digital Electronics",
    "Artificial Intelligence", "Operating Systems", "Operating Systems Lab",
    "Parallel Processing", "Computational Complexity", "Heuristic Methods",
    "Digital Telecommunications", "Microprocessors", "Microprocessors Lab",
    "Social and Legal Aspects of Technology", "E-business", "Commercial law",
    "Software Quality Assurance and Standards", "Optical Communication Networks",
    "Economic Theory and Algorithms", "Distributed Systems I", "Computer Architecture Lab",
  ],
  column2: [
    "Digital Design II", "Mathematics II", "Physics II", "Physics Lab II",
    "Discrete Mathematics II", "Programming (C)", "English II", "Digital Lab",
    "Object Oriented Programming II (C++)", "Basic Electronics",
    "Probability and Basic Statistics", "Basic Electronics",
    "Topics in Computer Architecture", "Modern Topics in Computer Architecture",
    "Numerical Analysis & Implementation Environments", "Data Structures",
    "Database Systems", "Database Systems Lab", "Theory of Computing",
    "Computer Networks", "Computer Networks Lab",
    "Principles of Programming Languages and Compilers", "Scientific Computing",
    "Web Programming & Systems", "Software Engineering", "Practice", "Cryptography",
    "History of Art", "Software & Programming of High Performance Systems (CUDA)",
    "Public Networks and Internetworking", "Computer Systems Performance Analysis",
    "Advanced Information Systems",
  ],
};

// Credly / Acclaim verified badges, embedded via the official embed.js script.
// `id` is the data-share-badge-id, `host` is the badge host. The embed script
// renders each as an iframe pointing at <host>/embedded_badge/<id>, the endpoint
// Credly allows to be framed by third-party sites.
const CREDLY = {
  host: "https://www.credly.com",
  script: "//cdn.credly.com/assets/utilities/embed.js",
};
const ACCLAIM = {
  host: "https://www.youracclaim.com",
  script: "//cdn.youracclaim.com/assets/utilities/embed.js",
};

export const badges = [
  { id: "4b8608f4-f833-4fca-8389-dec0c673ddda", ...CREDLY },
  { id: "dfbbbbb3-e3f9-47f4-a0f9-c22546ebb762", ...CREDLY },
  { id: "d2d1ca2b-7158-4199-b069-f4d56301daa2", ...CREDLY },
  { id: "20c0862d-b2c9-4957-b9a6-67029a0780c5", ...CREDLY },
  { id: "ae9a5979-c031-4626-996f-2c58293b2e4d", ...CREDLY },
  { id: "2a274c68-eb23-4e1a-bc9c-baf17c647069", ...CREDLY },
  { id: "0460ac69-3e5c-4b0c-ac69-578e25f11e2c", ...CREDLY },
  { id: "c5a576e3-a976-405f-ac79-e7b0dc17e7fe", ...ACCLAIM },
  { id: "c9ca1771-c52f-46d1-926a-235d79326c52", ...ACCLAIM },
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "badges", label: "Badges" },
  { id: "publications", label: "Publications" },
  { id: "languages", label: "Languages" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Interests" },
  { id: "courses", label: "Courses" },
];
