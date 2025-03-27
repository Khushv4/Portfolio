export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "WordFlow - Blog Platform",
    desc: "WordFlow is a modern blog platform that streamlines content creation with a seamless and intuitive user experience. Featuring robust authentication and post-management capabilities, it empowers users to write, edit, and publish blogs effortlessly.",
    subdesc:
      "Built using React, Redux, Tailwind CSS, and Appwrite, WordFlow ensures high performance and scalability. With a rich text editor powered by TinyMCE, it delivers a smooth writing experience while leveraging real-time data handling and secure cloud storage.",
    href: "https://word-flow-4c1p.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Redux",
        path: "/assets/Redux.png",
      },
      {
        id: 4,
        name: "Appwrite",
        path: "/assets/Appwrite.png",
      },
    ],
  },
  {
    title: "Communion Hub - Event Exploring Platform",
    desc: "Communion Hub is a dynamic event discovery platform designed for seamless exploration and engagement. With a user-friendly interface and real-time updates, it allows users to browse, track, and interact with events effortlessly.",
    subdesc:
      "Built with React, Redux, and Firebase, Communion Hub ensures smooth performance, secure authentication, and real-time data handling. Tailwind CSS and GSAP enhance the UI with responsive design and engaging animations for an immersive experience.",
    href: "https://communion-hub-plum.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/GSAP.png",
      },
      {
        id: 4,
        name: "FIREBASE",
        path: "/assets/Firebase.png",
      },
    ],
  },
  {
    title: "Meal Rescue India - Food Donation Platform",
    desc: "Meal Rescue India is an innovative platform that bridges the gap between surplus food providers and underprivileged communities. It enables restaurants and individuals to donate excess food efficiently, reducing waste and ensuring better food distribution.",
    subdesc:
      "Built with React, Firebase, and CSS, Meal Rescue India offers seamless navigation using React Router and modular components for donations, user profiles, and food request dashboards. The platform ensures a smooth, user-friendly experience for donors and recipients alike.",
    href: "https://meal-rescue-india.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/CSS.png",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/Firebase.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.062,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -4.5, 0],
    cubePosition: isSmall
      ? [3, -5, 3]
      : isMobile
      ? [5, -5, -2]
      : isTablet
      ? [5, -5, 0]
      : [9, -3, 0],
    reactLogoPosition: isSmall
      ? [7, 6, -5]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 5, -2],
    ringPosition: isSmall
      ? [-4, 3.5, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-10, 5, 0],
    targetPosition: isSmall
      ? [-4, 5, -7]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-9, -5, 3],
  };
};
