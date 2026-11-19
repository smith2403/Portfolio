const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive web experiences using React, JavaScript, HTML, CSS and Tailwind CSS.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description:
      "Developing application logic, integrating REST APIs and payment gateways, and working with PHP, Python, Java, SQL and MongoDB.",
    icon: "⚙️",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning, computer vision, LLMs and RAG to build intelligent AI-powered applications.",
    icon: "🧠",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "Web Developer",
    company: "GreyBath Technology Pvt. Ltd. (LAKSN Technologies)",
    date: "August 2024 - August 2025",
    logoPath: "/images/greybath.png",
    responsibilities: [
      "Developed and maintained full-stack web applications using PHP, JavaScript, jQuery and MySQL.",
      "Integrated REST APIs to connect application features with backend services.",
      "Worked directly with clients to understand project requirements and implement customised solutions.",
      "Optimised website performance, resolved technical issues and followed security best practices.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "SDAC Infotech",
    date: "April 2023 - July 2023",
    logoPath: "/images/sdac.png",
    responsibilities: [
      "Developed backend features for a client website as part of a collaborative development team.",
      "Used Java, JDBC and MySQL to implement database connectivity and manage data operations.",
      "Followed the MVC architecture to organise application logic and maintain a structured codebase.",
      "Implemented business logic, including data storage, retrieval and processing.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  {
    name: "GitHub",
    imgPath: "/images/github.png",
    mediaLink: "https://github.com/smith2403",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    mediaLink: "https://www.linkedin.com/in/smith-kinny-003361241/",
  },
];

export {
  words,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks
};
