const seo = {
  title: "Ronit Verma's Portfolio",
  description:
    "Ronit Kumar Verma is a Backend Developer skilled in Java, Spring Boot, REST APIs, SQL, and scalable system design. Explore projects, skills, and experience.",

  keywords: [
    "Ronit Verma",
    "Ronit Kumar Verma",
    "Ronit Kumar Verma Portfolio",
    "Ronit Portfolio",
    "Ronit Verma Portfolio",
    "Ronit Verma Backend Developer",
    "Java Developer Portfolio",
    "Spring Boot Developer India",
    "Backend Developer Portfolio",
    "REST API Developer",
    "Full Stack Developer India",
    "Computer Science Student Portfolio",
    "Hire Java Developer",
  ],

  author: "Ronit Kumar Verma",

  og: {
    title: "Ronit Kumar Verma | Backend Developer",
    description:
      "Explore the portfolio of Ronit Verma, Backend Developer skilled in Java, Spring Boot, APIs, and scalable systems.",
    type: "website",
    url: "https://ronit-verma-portfolio.vercel.app",
    image: "/src/assets/images/ronit_yellow_logo.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ronit Kumar Verma | Backend Developer",
    description:
      "Backend Developer specializing in Java, Spring Boot, and scalable backend systems.",
    image: "/src/assets/images/ronit_yellow_logo.png",
  },

  robots: "index, follow",
};

const greeting = {
  title: "Ronit Kumar Verma",
  logo_name: "Ronit Verma",
  nickname: "Java Developer",
  subTitle:
    "Building scalable, secure, and high-performance backend systems.",
  resumeLink:
    "https://drive.google.com/file/d/1YrWxDb7QvsulPdyXX_Ka5aMdOn9-zcLy/view?usp=sharing",
  portfolio_repository: "https://github.com/ronitverma28/personal-portfolio",
  githubProfile: "https://github.com/ronitverma28",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/ronitverma28",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ronitkumarverma/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:rontiroy22678@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/its_ronit_rv",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/the___ronit/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Languages",
      fileName: "FullStackImg",
      categoryIcon: "mdi:language-java",
      proficiency: "Intermediate",
      skills: ["Java", "HTML", "CSS", "JS"],
      focus:
        "Primary stack for building backend services and integrating clean API-driven interfaces.",
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        }, {
          skillName: "JS",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Backend",
      fileName: "CloudInfraImg",
      categoryIcon: "mdi:server-security",
      proficiency: "Intermediate",
      skills: [
        "Spring Boot",
        "REST APIs",
        "Spring Security",
        "JWT",
        "JPA",
        "Hibernate",
      ],
      focus:
        "Build secure Spring Boot applications with authentication, authorization, and production-ready API architecture.",
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "mdi:api",
          style: {
            color: "#1D4ED8",
          },
        },
        {
          skillName: "Spring Security",
          fontAwesomeClassname: "mdi:shield-lock-outline",
          style: {
            color: "#0F766E",
          },
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "JPA",
          fontAwesomeClassname: "mdi:database-cog-outline",
          style: {
            color: "#2563EB",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#59666C",
          },
        },
      ],
    },
    {
      title: "Database",
      fileName: "DataScienceImg",
      categoryIcon: "mdi:database",
      proficiency: "Intermediate",
      skills: ["MySQL", "PostgreSQL"],
      focus:
        "Design normalized schemas, optimize queries, and ensure reliable persistence with JPA and Hibernate.",
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Tools",
      fileName: "DesignImg",
      categoryIcon: "mdi:toolbox-outline",
      proficiency: "Intermediate",
      skills: ["Git", "GitHub", "Docker", "Postman"],
      focus:
        "Use version control, containerization, and API testing workflows for collaborative backend delivery.",
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
    {
      title: "Core Concepts",
      fileName: "FullStackImg",
      categoryIcon: "mdi:source-branch",
      proficiency: "Intermediate",
      skills: ["DSA", "OOP", "Multithreading", "DBMS"],
      focus:
        "Apply foundational CS concepts to design scalable, concurrent, and maintainable backend systems.",
      softwareSkills: [
        {
          skillName: "DSA",
          fontAwesomeClassname: "mdi:source-branch",
          style: {
            color: "#0369A1",
          },
        },
        {
          skillName: "OOP",
          fontAwesomeClassname: "mdi:cube-outline",
          style: {
            color: "#4338CA",
          },
        },
        {
          skillName: "Multithreading",
          fontAwesomeClassname: "mdi:timeline-text-outline",
          style: {
            color: "#7C3AED",
          },
        },
        {
          skillName: "DBMS",
          fontAwesomeClassname: "mdi:database-settings-outline",
          style: {
            color: "#166534",
          },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ronitverma",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ronitroy22678",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ronitverma28",
    }

  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. A.P.J. Abdul Kalam Technical University",
      subtitle: "B.Tech in Computer Science",
      logo_path: "aktu_logo.png",
      alt_name: "AKTU",
      duration: "2023 - Present",
      descriptions: [
        "⚡ Currently pursuing B.Tech in Computer Science with focus on Backend Development and Software Engineering.",
        "⚡ Studied core subjects like Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Operating Systems.",
        "⚡ Actively building real-world projects using Java, Spring Boot, and REST APIs.",
        "⚡ Practicing problem-solving on platforms like LeetCode, HackerRank, and GeeksforGeeks.",
        "⚡ Exploring modern technologies including Microservices Architecture and Cloud (AWS basics)."
      ],
      website_link: "https://aktu.ac.in",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Java Programming Fundamentals for Spring Boot Development",
      logo_path: "board_infinity_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/RDX2SAK918ED",
      alt_name: "Board Infinity",
      color_code: "#fff",
    },
    {
      title: "Spring Framework",
      logo_path: "learnquest_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/FCUFPMRY7WZF",
      alt_name: "LearnQuest",
      color_code: "#fff",
    },
    {
      title: "Java Spring Boot Backend Development",
      logo_path: "board_infinity_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/7XD4901LBIFC",
      alt_name: "Board Infinity",
      color_code: "#fff",
    },
    {
      title: "Java Programming for Beginners",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WALX8GE98J62",
      alt_name: "IBM",
      color_code: "#fff",
    }
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "linear-sorting-research-paper",
      name: "Beyond the Myth of Linear Sorting",
      createdAt: "2025-12-01T00:00:00Z",
      description: "Paper published in IJRPR Journal",
      url: "https://ijrpr.com/uploads/V6ISSUE12/IJRPR57262.pdf"
    }

  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ronit_yellow_logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },

  addressSection: {
    title: "Address",
    subtitle: "AVJ Heights, Greater Noida, Uttar Pradesh, India - 201310",
    locality: "Greater Noida",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "201310",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6204614201",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
