/**
 * Centralized Portfolio Configuration for Adnan Malik
 * All personal details, projects, experience, skills, and links can be customized here.
 */

// Image imports
import developerPortrait from '../assets/images/adnan_developer_portrait_1792085356540.jpg';
import previewEasyShortLink from '../assets/images/preview_easy_short_link_1792085356439.jpg';
import previewMultiFeed from '../assets/images/preview_multifeed_shopping_1792085357371.jpg';
import previewRecurringSub from '../assets/images/preview_recurring_subscription_1792085358157.jpg';
import previewAlphaUpsells from '../assets/images/preview_alpha_upsells_1792085375744.jpg';
import previewMyBranz from '../assets/images/preview_mybranz_calendar_1792085375451.jpg';
import previewRozmarrahPOS from '../assets/images/preview_rozmarrah_pos_1792085358140.jpg';

export const portfolioData = {
  personal: {
    name: "Adnan Malik",
    title: "Senior Full-Stack Developer | Shopify App Developer | Laravel & React Specialist",
    shortRole: "Senior Full-Stack & Shopify App Developer",
    experienceYears: "6+",
    email: "adnan.malik2012sgd@gmail.com",
    linkedin: "https://linkedin.com/in/adnan-mallik/",
    github: "https://github.com/adnan-malik",
    whatsapp: "+923226411283",
    whatsappMessage: "Hi Adnan, I saw your portfolio and would like to discuss a project with you.",
    location: "Available for Remote Worldwide",
    availableForHire: true,
    availabilityBadgeText: "Available for high-impact opportunities",
    cvUrl: "", // If empty string, built-in interactive CV viewer & printable view is used
    avatar: developerPortrait,
    hero: {
      headline: "Building Scalable Web Applications & Shopify Experiences.",
      supportingText: "I'm Adnan Malik, a Full-Stack Developer specializing in Shopify apps, Laravel backends, and modern React applications. I turn complex business requirements into reliable, high-performance digital products.",
      primaryCta: {
        text: "Explore My Work",
        targetId: "projects"
      },
      secondaryCta: {
        text: "Let's Talk",
        targetId: "contact"
      }
    }
  },

  credibilityHighlights: [
    { label: "Experience", value: "6+ Years", detail: "End-to-end full-stack & e-commerce software engineering" },
    { label: "Core Specialization", value: "Shopify Ecosystem", detail: "Embedded apps, GraphQL/Admin APIs, webhook engines" },
    { label: "Backend Engineering", value: "Laravel & PHP", detail: "Clean architectures, REST APIs, high-throughput pipelines" },
    { label: "Modern Frontend", value: "React & Remix", detail: "Type-safe interfaces, snappy state management, UX precision" }
  ],

  compactTechStack: [
    "Laravel",
    "PHP",
    "React.js",
    "Remix",
    "Shopify APIs",
    "GraphQL",
    "REST APIs",
    "MySQL",
    "Prisma ORM",
    "TypeScript",
    "Node.js"
  ],

  about: {
    heading: "Engineering reliable software systems for global commerce and business scale.",
    paragraphs: [
      "I am a Full-Stack Developer with 6+ years of experience building scalable web applications, Shopify apps, custom e-commerce solutions, and business management systems. I specialize in Laravel, PHP, React.js, Remix, Shopify APIs, REST APIs, GraphQL, and MySQL.",
      "Over the course of my career, I have designed and deployed mission-critical software: from high-volume Shopify applications handling catalog synchronization and automated subscriptions, to multi-tenant retail POS platforms with offline resilience.",
      "My engineering philosophy centers around high-performance architecture, clean codebases, intuitive user experiences, and dependable backend systems that scale gracefully without technical debt."
    ],
    expertisePillars: [
      {
        title: "Shopify App Development",
        description: "Deep mastery of Shopify Admin API, GraphQL queries/mutations, App Bridge, Session Tokens, webhooks, and embedded Remix architectures."
      },
      {
        title: "Robust Backend Architecture",
        description: "Designing structured Laravel and PHP applications, modular service layers, resilient database schemas in MySQL, and secure RESTful endpoints."
      },
      {
        title: "Modern React & Remix Interfaces",
        description: "Crafting fast, accessible client applications using modern React, Remix loaders/actions, Inertia.js, and strict TypeScript types."
      },
      {
        title: "Performance & Database Optimization",
        description: "Optimizing indexing, query execution plans, caching layers, background queue workers, and large data feed ingestion pipelines."
      }
    ]
  },

  skillGroups: [
    {
      id: "backend",
      title: "Backend Development",
      summary: "Server-side architecture, business logic engines, and API engineering",
      skills: [
        { name: "PHP", level: "Expert" },
        { name: "Laravel", level: "Expert" },
        { name: "Node.js", level: "Proficient" },
        { name: "RESTful API Design", level: "Expert" },
        { name: "Queue & Job Processing", level: "Advanced" },
        { name: "Authentication & Security", level: "Advanced" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      summary: "Modern client-side frameworks, interactive state, and responsive design",
      skills: [
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "React.js", level: "Expert" },
        { name: "Remix", level: "Advanced" },
        { name: "Next.js", level: "Proficient" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML5 & Modern CSS", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" }
      ]
    },
    {
      id: "shopify",
      title: "Shopify & E-commerce",
      summary: "Embedded apps, custom extensions, and merchant workflow automation",
      skills: [
        { name: "Shopify App Development", level: "Expert" },
        { name: "Shopify Admin API", level: "Expert" },
        { name: "Shopify GraphQL API", level: "Expert" },
        { name: "Shopify Webhooks & Events", level: "Expert" },
        { name: "App Bridge & Session Auth", level: "Advanced" },
        { name: "Store Integrations", level: "Expert" }
      ]
    },
    {
      id: "database",
      title: "Databases & APIs",
      summary: "Relational data modeling, ORM mappings, and cross-service communication",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "Prisma ORM", level: "Advanced" },
        { name: "GraphQL", level: "Advanced" },
        { name: "REST APIs", level: "Expert" },
        { name: "Inertia.js", level: "Advanced" },
        { name: "Database Indexing & Queries", level: "Advanced" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & Deployment",
      summary: "Version control, Linux server administration, and infrastructure provisioning",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Linux Server Administration", level: "Advanced" },
        { name: "AWS EC2", level: "Proficient" },
        { name: "DigitalOcean", level: "Advanced" },
        { name: "Contabo VPS", level: "Advanced" },
        { name: "CI/CD & GitHub Actions", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "easy-short-link",
      title: "Easy Short Link",
      subtitle: "Custom Short Link Generator & Conversion Analytics for Shopify",
      category: "Shopify App",
      image: previewEasyShortLink,
      problem: "Merchants needed branded, concise URLs for marketing campaigns and social channels without losing attribution or analytics inside their Shopify admin.",
      solution: "Engineered an embedded Shopify application that creates branded short links, logs real-time click engagement, maps UTM parameters, and presents conversion funnel analytics.",
      technologies: ["Remix", "React", "Prisma ORM", "MySQL", "Shopify APIs", "Tailwind CSS"],
      liveDemoUrl: "", // Configurable: populate when live demo is available
      sourceCodeUrl: "", // Configurable: populate when public repo is available
      highlights: [
        "Embedded Shopify Admin app with App Bridge and Session Token authentication",
        "Sub-millisecond link redirection routing with UTM preservation",
        "Aggregated click-stream analytics dashboard with engagement rates",
        "Clean Prisma schema backing performant MySQL tables"
      ]
    },
    {
      id: "multi-feed-google-shopping",
      title: "Multi Feed for Google Shopping",
      subtitle: "Large-Scale Product Catalog Feed Manager for Google Merchant Center",
      category: "Shopify App",
      image: previewMultiFeed,
      problem: "Stores with tens of thousands of SKUs and complex variants experienced feed generation timeouts and product rejections on Google Merchant Center.",
      solution: "Built a high-throughput feed synchronization app that chunks catalog data, automates variant formatting, and reliably distributes updated XML feeds to Google Shopping.",
      technologies: ["Shopify Admin API", "Shopify GraphQL API", "PHP", "Laravel", "MySQL", "Queue Workers"],
      liveDemoUrl: "",
      sourceCodeUrl: "",
      highlights: [
        "Processes 50,000+ SKU catalogs through queued background worker jobs",
        "Automated mapping for Google Product Categories and custom labels",
        "Real-time feed health diagnostics and error auditing",
        "Shopify GraphQL bulk query integration for minimal rate-limit overhead"
      ]
    },
    {
      id: "recurring-order-subscription",
      title: "Recurring Order Subscription",
      subtitle: "Subscription Management & Automated Recurring Billing System",
      category: "Shopify App",
      image: previewRecurringSub,
      problem: "Merchants required flexible subscription intervals, automated recurring orders, and self-serve customer management portals without excessive platform fees.",
      solution: "Developed an end-to-end subscription application integrating with Shopify Subscription APIs and customer checkout contracts for seamless recurring purchases.",
      technologies: ["Shopify Subscription APIs", "React", "Node.js / Laravel", "GraphQL", "MySQL", "Webhooks"],
      liveDemoUrl: "",
      sourceCodeUrl: "",
      highlights: [
        "Integrates native Shopify Subscription Contracts and Selling Plans",
        "Customer portal allowing pause, skip, reschedule, and swap frequencies",
        "Automated webhook listener handling payment retries and renewals",
        "Admin retention and churn analytics dashboard"
      ]
    },
    {
      id: "alpha-upsells-suite",
      title: "Alpha Upsells Suite",
      subtitle: "High-Converting In-Cart & Post-Purchase Upsell Engine",
      category: "Shopify App",
      image: previewAlphaUpsells,
      problem: "E-commerce stores struggled to maximize Average Order Value (AOV) due to intrusive or poorly integrated third-party popup apps.",
      solution: "Created an intelligent upsell suite enabling one-click post-purchase promotions and subtle in-cart product recommendations with zero checkout friction.",
      technologies: ["Shopify Post-Purchase API", "React", "Remix", "Shopify App Bridge", "MySQL"],
      liveDemoUrl: "",
      sourceCodeUrl: "",
      highlights: [
        "Zero-friction post-purchase one-click upsells without re-entering payment info",
        "A/B testing suite for merchants to compare offer conversion rates",
        "Dynamic cart drawer upsell widget with live inventory checks",
        "Optimized bundle suggestions based on customer cart contents"
      ]
    },
    {
      id: "mybranz-calendar-reviews",
      title: "MyBranz Marketing Calendar & Reviews",
      subtitle: "Omnichannel Campaign Planner & Verified Customer Review Workflow",
      category: "E-Commerce Tool",
      image: previewMyBranz,
      problem: "Brand managers lacked a unified interface to coordinate multi-channel promotional calendars alongside user-generated customer reviews and ratings.",
      solution: "Engineered a centralized marketing schedule calendar and automated review collection system with moderation workflows and verified badge displays.",
      technologies: ["React", "Laravel", "Shopify APIs", "REST APIs", "MySQL", "Tailwind CSS"],
      liveDemoUrl: "",
      sourceCodeUrl: "",
      highlights: [
        "Interactive drag-and-drop campaign calendar for scheduling marketing blasts",
        "Automated post-delivery email triggers for verified buyer review capture",
        "Review moderation inbox with sentiment tagging and photo attachments",
        "Storefront widget embed with SEO-rich schema markup"
      ]
    },
    {
      id: "rozmarrah-pos",
      title: "Rozmarrah POS",
      subtitle: "Multi-Tenant Cloud Point of Sale & Retail Management System",
      category: "Full-Stack SaaS",
      image: previewRozmarrahPOS,
      problem: "Retail businesses with multiple physical branches needed a fast, reliable POS that kept inventory synchronized with digital sales and handled offline registers.",
      solution: "Architected a multi-tenant Point of Sale system with instant barcode lookups, register drawer reconciliations, receipt printing, and live stock synchronization.",
      technologies: ["Laravel", "React", "Inertia.js", "TypeScript", "MySQL", "Tailwind CSS"],
      liveDemoUrl: "",
      sourceCodeUrl: "",
      highlights: [
        "Multi-tenant database schema separating store locations, staff, and inventories",
        "Touch-optimized register UI with instantaneous barcode lookup and cash/card split",
        "Inertia.js + TypeScript frontend delivering SPA speed with server-driven routing",
        "Comprehensive sales reporting, daily register closing summaries, and inventory audits"
      ]
    }
  ],

  experience: [
    {
      company: "Casa Apps",
      role: "Shopify App Developer / Full-Stack Developer",
      period: "Senior Engineer",
      location: "Remote",
      responsibilities: [
        "Architected and maintained production Shopify applications using Remix, React, and Laravel backends.",
        "Integrated Shopify GraphQL and REST APIs, implementing session token authentication and App Bridge.",
        "Engineered webhook event-handling pipelines processing thousands of merchant events daily.",
        "Optimized database schemas, SQL queries, and caching mechanisms in MySQL for high concurrency.",
        "Mentored team members on modern Shopify app guidelines, Polaris UX patterns, and test coverage."
      ]
    },
    {
      company: "Base2Brand",
      role: "Shopify Apps Developer & Laravel Developer",
      period: "Full-Stack Specialist",
      location: "Remote / On-site",
      responsibilities: [
        "Developed custom Shopify applications and custom store integrations for international e-commerce clients.",
        "Engineered robust Laravel backend services, designing RESTful APIs and background job queues.",
        "Built responsive, interactive frontend modules using React.js and modern JavaScript standards.",
        "Resolved critical production bugs, reduced server latency, and ensured 99.9% uptime on Linux VPS instances.",
        "Collaborated with project managers and design teams to deliver complex client specifications on schedule."
      ]
    },
    {
      company: "Wixpa",
      role: "Shopify Apps Developer",
      period: "Software Engineer",
      location: "On-site / Hybrid",
      responsibilities: [
        "Developed features for embedded Shopify applications using PHP, MySQL, and JavaScript.",
        "Implemented data synchronization mechanisms between Shopify stores and external third-party services.",
        "Authored comprehensive API documentation and conducted code reviews for backend endpoints.",
        "Optimized storefront script injection, asset payloads, and loading speeds across desktop and mobile devices."
      ]
    }
  ],

  services: [
    {
      id: "shopify-apps",
      title: "Shopify App Development",
      description: "End-to-end development of public and custom Shopify applications using modern Remix, React, App Bridge, and robust backend architectures."
    },
    {
      id: "laravel-backend",
      title: "Laravel Backend Development",
      description: "Scalable server-side architectures, RESTful APIs, queue pipelines, complex data modeling, and business logic execution with clean code."
    },
    {
      id: "full-stack-web",
      title: "Full-Stack Web Applications",
      description: "Complete web applications built with Laravel, React, Next.js/Remix, Inertia.js, and TypeScript tailored for business management and SaaS."
    },
    {
      id: "shopify-integrations",
      title: "Shopify API Integrations",
      description: "Seamless connectivity with Shopify Admin API, GraphQL queries, webhook handling, inventory synchronization, and external ERP/CRM bridges."
    },
    {
      id: "admin-dashboards",
      title: "Custom Admin Dashboards",
      description: "Clean, responsive back-office control panels, real-time analytics, order tracking, and role-based permissions designed for operational efficiency."
    },
    {
      id: "optimization-debugging",
      title: "Performance Optimization & Bug Fixing",
      description: "Auditing slow database queries, resolving complex runtime bottlenecks, fixing legacy codebase bugs, and hardening security."
    }
  ],

  contact: {
    heading: "Have a project in mind? Let's build something great.",
    subheading: "Whether you need a custom Shopify app, a scalable Laravel backend, or an end-to-end web application, I am available to discuss your goals.",
    email: "adnan.malik2012sgd@gmail.com",
    linkedin: "https://linkedin.com/in/adnan-mallik/",
    github: "https://github.com/adnan-malik",
    whatsapp: "+923226411283",
    whatsappMessage: "Hi Adnan, I saw your portfolio and would like to discuss a project with you."
  }
};
