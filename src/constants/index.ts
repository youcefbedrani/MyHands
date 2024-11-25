const LINKEDIN_URL =
  "https://www.linkedin.com/in/bedrani-mohammed-adel-%F0%9F%87%B5%F0%9F%87%B8-3477b9247/";

const FIVERR_URL = "https://www.fiverr.com/bedrani_adel?up_rollout=true";

const GITHUB_URL = "https://github.com/youcefbedrani";

const NPM_URL = "https://www.npmjs.com/~youcef1234rr";

const EMAIL_ADDRESS = "bedranimohammed12@gmail.com";

const PDF_PATH = "BedraniMohammedAdelResume.pdf";

const PROJECTS = [
  {
    title: "Modern Snake Game",
    description:
      "Built a modern rendition of the classic Snake game with a leaderboard to encourage competition among players.",
    tags: ["JavaScript", "React.js", "Tailwind CSS", "Vercel"],
    image: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
    url: "https://github.com/youcefbedrani/SnakeGame",
    blogUrl: "/blog/portfolio",
  },
  {
    title: "Expense Tracker",
    description:
      "Developed an expense tracker to monitor income and expenses, allowing users to categorize and visualize financial data.",
    tags: ["Vue.js", "TypeScript", "Tailwind CSS", "Vuex"],
    image: "/portfolio.png",
    url: "https://github.com/youcefbedrani/expense-tracker",
    blogUrl: "/blog/portfolio",
  },
  {
    title: "Gemini AI Clone",
    description:
      "Created a clone of the Gemini AI platform, demonstrating familiarity with AI design principles and interactivity.",
    tags: ["JavaScript", "React.js"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGEua5OXo7nFKVinH_d8BD2BycUAXDJwgRw&s",
    url: "https://github.com/youcefbedrani/Gimini-clone",
    blogUrl: "/blog/gemini-clone",
  },
  {
    title: "Server Monitoring Dashboard",
    description:
      "Developed a dashboard for real-time server monitoring, displaying CPU, RAM, and storage metrics, with automated email alerts for issues.",
    tags: ["JavaScript", "Node.js"],
    image: "/portfolio.png",
    url: "https://github.com/youcefbedrani/Server_Monitoring",
    blogUrl: "/blog/server-monitoring",
  },
  {
    title: "To-Do List Application",
    description:
      "Created a to-do list application with dynamic categorization and task management, built to optimize productivity.",
    tags: ["Vue.js", "TypeScript"],
    image: "/portfolio.png",
    url: "https://github.com/youcefbedrani/todo",
    blogUrl: "/blog/todo",
  },
  {
    title: "Point-of-Sale (POS) Application",
    description:
      "A point-of-sale (POS) application with functionalities tailored for managing market transactions and sales.",
    tags: ["C#"],
    image: "/portfolio.png",
    url: "https://github.com/youcefbedrani/My_Market",
    blogUrl: "/blog/pos-application",
  },
  {
    title: "Minesweeper Game",
    description:
      "A C# version of the classic Minesweeper game. This project allows players to test their skills in identifying mine locations on a grid.",
    tags: ["C#"],
    image: "/portfolio.png",
    url: "https://github.com/youcefbedrani/Minesweeper",
    blogUrl: "/blog/minesweeper",
  },
  {
    title: "Node Dashboard",
    description:
      "A simple Node.js dashboard that demonstrates my skills in backend development using Node.js and EJS templating.",
    tags: ["EJS", "JavaScript", "Node.js"],
    image: "/portfolio.png",
    url: "https://github.com/youcefbedrani/Node-GG",
    blogUrl: "/blog/node-dashboard",
  },
  {
    title: "Micazone Application",
    description:
      "A mobile app with real-time map tracking, allowing users to request truck services instantly. Features include user registration, order management, and real-time trucker tracking.",
    tags: ["React Native", "Leaflet", "Firebase", "Strapi"],
    image: "/photo_5931775480376180451_x.jpg",
    url: "https://github.com/youcefbedrani/DP_V1",
    blogUrl: "/blog/micazone",
  },
];

const EXPERIENCE = [
  {
    jobTitle: "Main Software Engineer",
    description:
      "Created a mobile app with a real-time map to track online truckers, allowing users to request services instantly. Integrated Firebase Auth with Strapi CMS and SQLite for high-performance user management. Connected the mobile app with a web dashboard to manage users and display comprehensive app statistics.",
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
      "Developed a back-office application to manage company assets, improving operational efficiency. Designed a user-friendly interface for asset tracking and control, and built backend services using Django and PostgreSQL to support real-time monitoring and data management.",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    company: {
      name: "Icosnet",
      url: "https://icosnet.com",
    },
    modality: "On-site",
    tags: ["Django", "PostgreSQL", "Fullstack Development", "Asset Management"],
  },
  {
    jobTitle: "Software Engineer Intern",
    description:
      "Developed a comprehensive server monitoring dashboard to track CPU, RAM, and storage in real-time. Designed an intuitive UI for efficient server management and automated email alerts for high CPU usage, enhancing system reliability.",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    company: {
      name: "Netfer",
      url: "https://netfer.com",
    },
    modality: "On-site",
    tags: ["Server Monitoring", "Backend Development", "UI Design"],
  },
  {
    jobTitle: "Project Management Intern",
    description:
      "Gained insights into Algeria's telecommunications infrastructure and internet operations. Observed best practices in postal and telecommunications systems management.",
    startDate: "2024-03-01",
    endDate: "2024-04-30",
    company: {
      name: "Algiers Post",
      url: "https://algierspost.com",
    },
    modality: "On-site",
    tags: ["Project Management", "Telecommunications"],
  },
  {
    jobTitle: "Networking Intern",
    description:
      "Explored telecommunications technologies and learned about internet distribution across Algeria. Acquired foundational knowledge in networking principles and internet connectivity standards.",
    startDate: "2023-02-01",
    endDate: "2023-03-31",
    company: {
      name: "Algiers Telecom",
      url: "https://algerietelecom.dz",
    },
    modality: "On-site",
    tags: ["Networking", "Telecommunications"],
  },
  {
    jobTitle: "System Admin Intern",
    description:
      "Gained hands-on experience with local networks and system management at Sonatrach. Learned key networking and system administration concepts, supporting critical energy sector infrastructure.",
    startDate: "2022-04-01",
    endDate: "2022-05-31",
    company: {
      name: "Sonatrach",
      url: "https://sonatrach.com",
    },
    modality: "On-site",
    tags: ["System Administration", "Networking", "Energy Sector"],
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
      {
        name: "REST API",
        icon: "https://freepngimg.com/download/icon/web/7955-rest-api.png",
      },
      {
        name: "GraphQL API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
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
        name: "Oracle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
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
