const LINKEDIN_URL =
  "https://www.linkedin.com/in/bedrani-mohammed-adel-%F0%9F%87%B5%F0%9F%87%B8-3477b9247/";

const FIVERR_URL = "https://www.fiverr.com/bedrani_adel?up_rollout=true";

const GITHUB_URL = "https://github.com/youcefbedrani";

const NPM_URL = "https://www.npmjs.com/~youcef1234rr";

const EMAIL_ADDRESS = "bedranimohammed12@gmail.com";

const PDF_PATH = "BedraniMohammedAdelResume.pdf";

const PROJECTS = [
  {
    title: "NA Market Intelligence",
    description:
      "Founder of an AI-powered market intelligence system for ecommerce entrepreneurs. Find winner products in less than 1 minute with detailed reports and predictive analytics.",
    tags: ["Product Research", "AI", "Ecommerce", "Founder"],
    image: "https://res.cloudinary.com/doszhdiv2/image/upload/v1731840594/moxxldjgoplxzai490wq.jpg",
    url: "#",
    blogUrl: "/blog/na-market",
  },
  {
    title: "Role8 Corporate",
    description:
      "A professional corporate showcase website for Role8, highlighting their ERP solutions and business consultancy services with a modern UI/UX.",
    tags: ["WordPress", "UI/UX", "Responsive", "Corporate"],
    image: "/assets/images/project_fallback_1.png",
    url: "https://role8.com/",
    blogUrl: "/blog/role8",
  },
  {
    title: "Afaq Coffee",
    description:
      "A premium, mobile-first e-commerce platform for a specialty coffee brand, featuring a custom shopping experience and integrated payment solutions.",
    tags: ["E-commerce", "Modern Design", "Mobile-first"],
    image: "/assets/images/project_fallback_2.png",
    url: "https://afaqcoffee.com/",
    blogUrl: "/blog/afaq-coffee",
  },
  {
    title: "Rouisia Voice",
    description:
      "A high-traffic media and press platform with advanced CMS features, SEO optimizations, and full multi-language capabilities.",
    tags: ["CMS", "SEO", "Multi-language", "Press"],
    image: "/assets/images/project_fallback_1.png",
    url: "https://rouisiavoice.com/",
    blogUrl: "/blog/rouisia-voice",
  },
  {
    title: "WiFi Djelfa",
    description:
      "Lead generation platform for an ISP, optimized for the Algerian market with full RTL support and streamlined user conversion paths.",
    tags: ["Arabe RTL", "Lead Gen", "Optimization"],
    image: "/assets/images/project_fallback_1.png",
    url: "https://wifidjelfa.com/ar/",
    blogUrl: "/blog/wifi-djelfa",
  },
  {
    title: "Maroua Meubles",
    description:
      "Full-featured furniture e-commerce catalogue and store built with WooCommerce, featuring extensive product categories and RTL support.",
    tags: ["WooCommerce", "Arabe RTL", "Catalogue"],
    image: "/assets/images/project_fallback_2.png",
    url: "https://marouameubles.com/?lang=ar",
    blogUrl: "/blog/maroua-meubles",
  },
  {
    title: "Roisia News",
    description:
      "A performance-oriented news portal and information hub, designed for rapid content delivery and maximum engagement.",
    tags: ["News", "Responsive", "Performance"],
    image: "/assets/images/project_fallback_1.png",
    url: "https://roisia.com/",
    blogUrl: "/blog/roisia",
  },
  {
    title: "Micazone Application",
    description:
      "Real-time logistics mobile app for tracking truckers and requesting services instantly, featuring Firebase integration and custom order management.",
    tags: ["React Native", "Firebase", "Real-time", "Logistics"],
    image: "/photo_5931775480376180451_x.jpg",
    url: "https://github.com/youcefbedrani/DP_V1",
    blogUrl: "/blog/micazone",
  },
  {
    title: "Vogue Fashion Marketplace",
    description:
      "A high-end multi-vendor fashion marketplace with AI-driven style recommendations, real-time inventory sync, and a luxury-focused UI.",
    tags: ["Marketplace", "AI Recommendations", "Luxury UI"],
    image: "/assets/images/project_fallback_2.png",
    url: "#",
    blogUrl: "/blog/vogue-fashion",
  },
  {
    title: "FreshGo Grocery Delivery",
    description:
      "A complete grocery delivery ecosystem including a user app, driver app, and a sophisticated admin dashboard for order fulfillment.",
    tags: ["Mobile App", "Admin Dashboard", "Logistics"],
    image: "/assets/images/project_fallback_2.png",
    url: "#",
    blogUrl: "/blog/fresh-go",
  },
  {
    title: "Chrono Luxury Watches",
    description:
      "An ultra-premium e-commerce experience for luxury timepieces with 360° product views and secure high-value transaction handling.",
    tags: ["Luxury E-commerce", "360 Views", "Secure Payments"],
    image: "/assets/images/project_fallback_2.png",
    url: "#",
    blogUrl: "/blog/chrono-watches",
  },
  {
    title: "SaaS Subscription Platform",
    description:
      "A robust billing and subscription management system for software providers, featuring automated invoicing, multi-tier plans, and developer-friendly APIs.",
    tags: ["SaaS", "Billing", "Stripe", "Dashboard"],
    image: "/assets/images/project_fallback_1.png",
    url: "#",
    blogUrl: "/blog/saas-platform",
  },
  {
    title: "Artisan Marketplace",
    description:
      "A community-driven marketplace for local creators, featuring vendor dashboards, localized search, and integrated digital product delivery.",
    tags: ["Marketplace", "Vendor Management", "Community"],
    image: "/assets/images/project_fallback_2.png",
    url: "#",
    blogUrl: "/blog/artisan-marketplace",
  },
  {
    title: "Audiophile E-commerce",
    description:
      "A high-end audio equipment store featuring a complex product catalog, custom cart logic, and a multi-step checkout process with a sleek, dark-themed UI.",
    tags: ["React", "Next.js", "Redux", "Audio UI"],
    image: "/assets/images/project_fallback_2.png",
    url: "https://github.com/youcefbedrani/Audiophile-e-commerce",
    blogUrl: "/blog/audiophile",
  },
  {
    title: "Kids & Baby Lifestyle Shop",
    description:
      "A vibrant and user-friendly e-commerce platform dedicated to children's fashion and toys, featuring category filtering, wishlist, and secure checkout.",
    tags: ["Next.js", "Tailwind", "E-commerce", "Responsive"],
    image: "/assets/images/project_fallback_2.png",
    url: "https://github.com/youcefbedrani/Kids-E-commerce",
    blogUrl: "/blog/kids-shop",
  },
  {
    title: "Personal Portfolio",
    description:
      "The latest iteration of my professional portfolio, showcasing advanced frontend techniques and a premium user experience.",
    tags: ["Next.js", "Tailwind", "Motion"],
    image: "/assets/images/hero_premium.png",
    url: "https://nextjs-sigma-ten-42.vercel.app/",
    blogUrl: "/blog/portfolio",
  },
];

const EXPERIENCE = [
  {
    jobTitle: "Odoo Developer & ERP Consultant",
    description:
      "Remote Odoo developer for Role8 company in Saudi Arabia. Specializing in Odoo ERP customization, module development, and business process optimization for Saudi-based enterprises.",
    startDate: "2024-10-01",
    endDate: "Present",
    company: {
      name: "Role8",
      url: "https://role8.com",
    },
    modality: "Remote",
    tags: [
      "Odoo",
      "Python",
      "ERP",
      "Business Intelligence",
      "KSA Market",
    ],
  },
  {
    jobTitle: "Fullstack Web Developer",
    description:
      "Building enterprise-grade web applications using C# and ASP.NET Core at G22 company, Zeralda. Responsible for both frontend and backend development, ensuring high performance and scalability.",
    startDate: "2024-06-01",
    endDate: "Present",
    company: {
      name: "G22",
      url: "#",
    },
    modality: "On-site",
    tags: ["C#", "ASP.NET Core", "SQL Server", "Fullstack", "Enterprise"],
  },
  {
    jobTitle: "Main Software Engineer",
    description:
      "Created a mobile app with a real-time map to track online truckers, allowing users to request services instantly. Integrated Firebase Auth with Strapi CMS and SQLite for high-performance user management.",
    startDate: "2024-01-01",
    endDate: "2024-05-31",
    company: {
      name: "Micazone",
      url: "https://micazone.com",
    },
    modality: "Remote",
    tags: [
      "Mobile Development",
      "Firebase",
      "Strapi",
      "SQLite",
      "Web Dashboard",
    ],
  },
  {
    jobTitle: "Fullstack Web Developer Intern",
    description:
      "Developed a back-office application to manage company assets, improving operational efficiency with Django and PostgreSQL.",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    company: {
      name: "Icosnet",
      url: "https://icosnet.com",
    },
    modality: "On-site",
    tags: ["Django", "PostgreSQL", "Fullstack Development", "Asset Management"],
  },
];

const technologies = [
  {
    category: "Front-end",
    skills: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    category: "Back-end",
    skills: [
      {
        name: "Laravel",
        icon: "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
      },
      {
        name: "ASP.NET Core",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "Odoo ERP",
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Odoo-logo.png",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Strapi",
        icon: "https://avatars.githubusercontent.com/u/25422602?s=200&v=4",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
  },
  {
    category: "Others",
    skills: [
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "NeoVim",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
];

export {
  LINKEDIN_URL,
  GITHUB_URL,
  NPM_URL,
  FIVERR_URL,
  EMAIL_ADDRESS,
  PDF_PATH,
  PROJECTS,
  EXPERIENCE,
  technologies,
};
