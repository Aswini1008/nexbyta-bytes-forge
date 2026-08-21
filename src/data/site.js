// Central content source. Values here are safe to replace with admin/CMS data later.

export const company = {
  name: "Nexbyta Technologies",
  tagline: "Building the Next Byte of Technology",
  city: "Chennai, Tamil Nadu",
  phone: "+91 82485 88520",
  phoneHref: "tel:+918248588520",
  whatsapp:
    "https://wa.me/918248588520?text=" +
    encodeURIComponent(
      "Hi Nexbyta Technologies, I am interested in your courses/services. Please share more details.",
    ),
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Services", to: "/services" },
  { label: "Career", to: "/career" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const trustPoints = [
  "Industry-Focused Learning",
  "Hands-On Projects",
  "Career Preparation",
  "Modern Technology",
  "Real-World Development",
];

export const courses = [
  {
    slug: "java-programming",
    title: "Java Programming",
    icon: "Coffee",
    level: "Beginner to Advanced",
    shortDescription:
      "Build a strong programming foundation with Java, from core syntax to data structures and applied projects.",
    path: "Fundamentals → OOP → Collections → DSA → Projects",
    tags: ["Java", "OOP", "Collections", "DSA"],
    overview:
      "A structured Java track that moves from language fundamentals to object-oriented design, collections and problem solving, finishing with applied projects.",
    audience: [
      "Students preparing for placements",
      "Beginners starting programming",
      "Professionals moving into backend development",
    ],
    prerequisites: ["Basic computer literacy", "No prior coding experience required"],
    outcomes: [
      "Write clean, idiomatic Java",
      "Apply object-oriented design principles",
      "Work confidently with collections and generics",
      "Solve data structure and algorithm problems",
    ],
    curriculum: [
      { title: "Programming Fundamentals", topics: ["Syntax and data types", "Control flow", "Methods and arrays"] },
      { title: "Object-Oriented Programming", topics: ["Classes and objects", "Inheritance", "Interfaces", "Exceptions"] },
      { title: "Collections", topics: ["List, Set, Map", "Generics", "Streams basics"] },
      { title: "Problem Solving", topics: ["Complexity", "Searching and sorting", "Core data structures"] },
      { title: "Projects", topics: ["Console application", "File-based application", "Mini backend module"] },
    ],
    technologies: ["Java", "JDK", "JUnit", "Git"],
    projects: ["Library management console app", "Employee records manager"],
    career: "Relevant for Java developer, backend developer and software engineer trainee roles.",
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    icon: "Terminal",
    level: "Beginner to Advanced",
    shortDescription:
      "Learn Python for application development, automation and API work with a practical, project-first approach.",
    path: "Python Fundamentals → OOP → APIs → Automation → Projects",
    tags: ["Python", "OOP", "APIs", "Automation"],
    overview:
      "A practical Python track covering language fundamentals, object-oriented design, working with APIs and automating real tasks.",
    audience: ["Beginners", "Students exploring automation and data work", "Professionals upskilling"],
    prerequisites: ["Basic computer literacy"],
    outcomes: [
      "Write readable, modular Python",
      "Consume and build simple APIs",
      "Automate repetitive workflows",
      "Structure and ship small applications",
    ],
    curriculum: [
      { title: "Python Fundamentals", topics: ["Types and collections", "Control flow", "Functions and modules"] },
      { title: "Object-Oriented Programming", topics: ["Classes", "Inheritance", "Error handling"] },
      { title: "Working with APIs", topics: ["HTTP basics", "requests", "JSON handling"] },
      { title: "Automation", topics: ["Files and directories", "Scheduling", "Scripting patterns"] },
      { title: "Projects", topics: ["API-driven utility", "Automation toolkit"] },
    ],
    technologies: ["Python", "pip", "requests", "Git"],
    projects: ["Report automation script", "API data collector"],
    career: "Relevant for Python developer, automation engineer and junior backend roles.",
  },
  {
    slug: "c-cpp",
    title: "C / C++",
    icon: "Cpu",
    level: "Beginner to Intermediate",
    shortDescription:
      "Understand how software really works with C and C++, memory, data structures and disciplined problem solving.",
    path: "Programming Fundamentals → OOP → Data Structures → Problem Solving",
    tags: ["C", "C++", "Data Structures", "Problem Solving"],
    overview:
      "A fundamentals-first track that builds low-level understanding: memory, pointers, data structures and algorithmic thinking.",
    audience: ["Engineering students", "Beginners building core CS foundations"],
    prerequisites: ["None"],
    outcomes: [
      "Work confidently with pointers and memory",
      "Implement core data structures from scratch",
      "Apply object-oriented concepts in C++",
      "Approach coding problems methodically",
    ],
    curriculum: [
      { title: "Programming Fundamentals", topics: ["Syntax", "Functions", "Pointers and memory"] },
      { title: "Object-Oriented Programming", topics: ["Classes", "Operator overloading", "Templates"] },
      { title: "Data Structures", topics: ["Linked lists", "Stacks and queues", "Trees"] },
      { title: "Problem Solving", topics: ["Recursion", "Sorting and searching", "Complexity analysis"] },
      { title: "Projects", topics: ["Data structure library", "Console simulation"] },
    ],
    technologies: ["C", "C++", "GCC", "Git"],
    projects: ["Custom data structure library", "Inventory simulation"],
    career: "Relevant for core engineering roles, embedded software and technical interview preparation.",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    icon: "Braces",
    level: "Beginner to Advanced",
    shortDescription:
      "Master modern JavaScript, the language behind every interactive product on the web.",
    path: "JavaScript Fundamentals → ES6+ → DOM → APIs → Modern Development",
    tags: ["JavaScript", "ES6+", "DOM", "APIs"],
    overview:
      "From language fundamentals to modern ES6+ patterns, DOM work and API integration for real interfaces.",
    audience: ["Aspiring web developers", "Students building portfolios"],
    prerequisites: ["Basic HTML and CSS is helpful but not required"],
    outcomes: [
      "Write modern ES6+ JavaScript",
      "Build interactive interfaces with the DOM",
      "Consume REST APIs and handle async flows",
      "Structure maintainable frontend code",
    ],
    curriculum: [
      { title: "JavaScript Fundamentals", topics: ["Types", "Functions", "Scope and closures"] },
      { title: "ES6+", topics: ["Modules", "Destructuring", "Promises and async/await"] },
      { title: "DOM & Events", topics: ["Selection and updates", "Event handling", "Forms"] },
      { title: "Working with APIs", topics: ["fetch", "Error handling", "State patterns"] },
      { title: "Projects", topics: ["Interactive dashboard", "API-driven single page"] },
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
    projects: ["Interactive dashboard", "Weather and news aggregator"],
    career: "Relevant for frontend developer and web developer roles.",
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    icon: "Layers",
    level: "Beginner to Job Ready",
    shortDescription:
      "Go end to end: build, connect and ship complete web applications with React, Node.js, Express and MongoDB.",
    path: "HTML → CSS → JavaScript → React → Node.js → Express → MongoDB",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    overview:
      "A complete web development track that takes you from markup and styling through React interfaces, Node and Express APIs, and MongoDB data modelling.",
    audience: ["Students targeting developer roles", "Career switchers", "Freelancers"],
    prerequisites: ["Basic computer literacy", "Willingness to build consistently"],
    outcomes: [
      "Build responsive interfaces with React",
      "Design and secure REST APIs with Express",
      "Model data with MongoDB and Mongoose",
      "Deploy and maintain a full application",
    ],
    curriculum: [
      { title: "Web Foundations", topics: ["HTML semantics", "CSS layout", "Responsive design"] },
      { title: "JavaScript & ES6+", topics: ["Core language", "Async patterns", "Tooling"] },
      { title: "React", topics: ["Components", "State and hooks", "Routing", "Data fetching"] },
      { title: "Node.js & Express", topics: ["Server basics", "REST APIs", "Auth and middleware"] },
      { title: "MongoDB & Projects", topics: ["Schema design", "Mongoose", "Capstone application"] },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    projects: ["Full-stack job board", "Course platform capstone"],
    career: "Relevant for full-stack developer, MERN developer and web application engineer roles.",
  },
];

export const services = [
  {
    slug: "web-application-development",
    title: "Web Application Development",
    icon: "Globe",
    description: "Modern, responsive web applications built around real business requirements.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    benefits: ["Responsive across devices", "Performance-focused builds", "Maintainable component architecture"],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    icon: "Layers",
    description: "Complete frontend and backend solutions delivered as one coherent product.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    benefits: ["Single accountable team", "Consistent data flow", "Faster iteration"],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    icon: "Server",
    description: "Secure APIs, databases, authentication and scalable backend architecture.",
    technologies: ["Node.js", "Express", "MongoDB"],
    benefits: ["Well-documented APIs", "Role-based access", "Scalable data models"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: "Settings2",
    description: "Technology solutions tailored to specific business workflows and requirements.",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
    benefits: ["Built to your process", "Ownership of the codebase", "Room to extend"],
  },
  {
    slug: "portfolio-website-development",
    title: "Portfolio & Website Development",
    icon: "Sparkles",
    description: "Professional websites for individuals, startups and growing businesses.",
    technologies: ["React", "Tailwind CSS"],
    benefits: ["Strong first impression", "SEO-ready structure", "Easy content updates"],
  },
];

export const techStack = [
  { group: "Languages", items: ["Java", "Python", "C", "C++", "JavaScript"] },
  { group: "Frontend", items: ["HTML", "CSS", "React"] },
  { group: "Backend", items: ["Node.js", "Express.js"] },
  { group: "Database", items: ["MongoDB"] },
];

export const careerServices = [
  { title: "Resume Preparation", icon: "FileText", description: "Create professional, ATS-friendly resumes that present your skills clearly." },
  { title: "Placement Preparation", icon: "Target", description: "Structured preparation for technical and HR rounds." },
  { title: "Aptitude Preparation", icon: "Calculator", description: "Practice quantitative, logical and verbal reasoning." },
  { title: "Portfolio Development", icon: "LayoutGrid", description: "Build a professional digital presence that shows real work." },
  { title: "Interview Preparation", icon: "MessagesSquare", description: "Improve technical depth and communication confidence." },
];

export const whyNexbyta = [
  { title: "Practical Learning", description: "Concepts are taught through building, not memorising." },
  { title: "Industry-Relevant Skills", description: "Curriculum tracks the tools teams actually use." },
  { title: "Hands-On Projects", description: "Every module ends in something you can demonstrate." },
  { title: "Structured Curriculum", description: "A clear path from fundamentals to job-ready work." },
  { title: "Career-Focused Preparation", description: "Resume, aptitude and interview practice built in." },
  { title: "Modern Technology Stack", description: "Current languages, frameworks and workflows." },
];

export const learningProcess = [
  { step: "01", title: "Choose Your Path", description: "Pick the track that matches your goal." },
  { step: "02", title: "Learn the Fundamentals", description: "Build a foundation you can rely on." },
  { step: "03", title: "Practice & Build", description: "Apply every concept through exercises." },
  { step: "04", title: "Work on Projects", description: "Ship work worth showing to employers." },
  { step: "05", title: "Prepare for Opportunities", description: "Resume, aptitude and interview readiness." },
];

export const deliveryProcess = [
  { step: "01", title: "Understand", description: "Clarify goals, users and constraints." },
  { step: "02", title: "Plan", description: "Define scope, architecture and milestones." },
  { step: "03", title: "Design", description: "Structure interfaces and data models." },
  { step: "04", title: "Develop", description: "Build in reviewable increments." },
  { step: "05", title: "Deliver", description: "Test, deploy and hand over cleanly." },
];

// Illustrative examples of the kind of work we build - not client case studies.
export const sampleProjects = [
  { title: "Learning Management Portal", category: "Web Application", tags: ["React", "Node.js", "MongoDB"], description: "Course delivery, progress tracking and admin content management." },
  { title: "Business Operations Dashboard", category: "Custom Software", tags: ["React", "Express", "MongoDB"], description: "Role-based dashboards with reporting and workflow automation." },
  { title: "Studio Portfolio Site", category: "Website", tags: ["React", "Tailwind CSS"], description: "Fast, responsive marketing site with structured content." },
];

// Real client work delivered by Nexbyta Technologies.
export const deliveredWork = [
  {
    title: "St. Joseph's Church Website",
    category: "Full-Stack Web Development",
    description:
      "A full-stack, responsive website developed and delivered for St. Joseph's Church, Kamplar, with structured content sections, event and announcement pages, and a mobile-first layout built for everyday use by the parish community.",
    url: "https://stjosephskamplar.org/",
    tags: ["React", "Node.js", "Responsive Design", "Deployment"],
  },
];

export const courseFaqs = [
  { q: "Who can join?", a: "Students, recent graduates and working professionals who want practical technology skills." },
  { q: "Are beginners welcome?", a: "Yes. Every track starts from fundamentals before moving to advanced topics." },
  { q: "Are classes online or offline?", a: "Both formats are available. Contact us to confirm the current schedule for your track." },
  { q: "What technologies are covered?", a: "Java, Python, C/C++, JavaScript, React, Node.js, Express and MongoDB." },
  { q: "How can I register?", a: "Submit the enquiry form or call us and our team will guide you through the next steps." },
];

export const serviceFaqs = [
  { q: "How do I start a project?", a: "Share your requirement through the enquiry form or call us. We begin with a scoping conversation." },
  { q: "What technologies do you use?", a: "React on the frontend, Node.js and Express on the backend, and MongoDB for data." },
  { q: "Do you build custom applications?", a: "Yes. We build software around your workflows rather than forcing a fixed template." },
  { q: "How can I request a quote?", a: "Send your scope and timeline through the contact form and we will respond with next steps." },
];

export const interestOptions = [
  "Java",
  "Python",
  "C / C++",
  "JavaScript",
  "Full-Stack Development",
  "Web Application Development",
  "Backend Development",
  "Resume Preparation",
  "Placement Preparation",
  "Aptitude Preparation",
  "Portfolio Development",
  "Software Development",
  "Other",
];
