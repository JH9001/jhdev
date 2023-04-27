//TechStack imports
import css3 from "../assets/images/icons/css3.svg";
import git from "../assets/images/icons/git.svg";
import github from "../assets/images/icons/github.svg";
import html5 from "../assets/images/icons/html5.svg";
import javascript from "../assets/images/icons/javascript.svg";
import linux from "../assets/images/icons/linux.svg";
import mui from "../assets/images/icons/mui.svg";
import react from "../assets/images/icons/react.svg";
import vite from "../assets/images/icons/vite.svg";

export const techStackData = [
  { id: 1, name: "HTML5", icon: html5 },
  { id: 2, name: "CSS3", icon: css3 },
  { id: 3, name: "JavaScript", icon: javascript },
  { id: 4, name: "React", icon: react },
  { id: 5, name: "Vite", icon: vite },
  { id: 6, name: "Material UI", icon: mui },
  { id: 7, name: "Git", icon: git },
  { id: 8, name: "GitHub", icon: github },
  { id: 9, name: "Linux", icon: linux },
];

//NavLinks && Footer && Projects icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";

export const navLinksData = [
  {
    id: 1,
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joshua-fsd/",
  },
  {
    id: 2,
    icon: <GitHubIcon />,
    name: "GitHub",
    href: "https://github.com/JH9001",
  },
  {
    id: 3,
    icon: <DescriptionIcon />,
    name: "Resume",
    href: "https://www.canva.com/design/DAFf3JPUoEo/view",
  },
  {
    id: 4,
    icon: <EmailIcon />,
    name: "Email",
    href: "mailto:josh.fsd@icloud.com",
  },
  {
    id: 5,
    icon: <CodeIcon />,
    name: "Source",
    href: "https://github.com/JH9001/jhdev",
  },
];

//Projects imports
import taskify from "../assets/images/projects/taskify.png";
import jhdev from "../assets/images/projects/jhdev.png";
import pokedex from "../assets/images/projects/pokedex.png";
import calculator from "../assets/images/projects/calculator.png";

export const projectsData = [
  {
    name: "Pokédex",
    image: pokedex,
    description1:
      "A Pokédex app that utilizes the PokeAPI to dynamically display information about various Pokémon. The app displays key information for each Pokémon, including their image, name, type, base stats, and abilities.",
    description2:
      "To implement the search functionality, I used the popular formik library. Additionally, I leveraged Material UI to style the app and ensure it was user-friendly and responsive. I also incorporated dynamic styling into the app by setting the page theme based on the primary color of each Pokémon.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Material UI"],
    links: [
      {
        id: 1,
        icon: <PublicIcon />,
        name: "Preview",
        href: "https://jh9001-pokedex.netlify.app/",
      },
      {
        id: 2,
        icon: <GitHubIcon />,
        name: "GitHub",
        href: "https://github.com/JH9001/pokedex",
      },
    ],
  },
  {
    name: "Portfolio Website",
    image: jhdev,
    description1:
      "This portfolio website was built from scratch using React and Material UI, enabling me to create a responsive and dynamic design by customizing Material UI components.",
    description2:
      "The contact form was built using formik and yup and includes form validation to ensure that all input data is accurate and complete. It is connected to the formspree backend service, which allows me to receive messages from the contact form in my email.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Material UI"],
    links: [
      {
        id: 1,
        icon: <PublicIcon />,
        name: "Preview",
        href: "https://joshuahughes.dev",
      },
      {
        id: 2,
        icon: <GitHubIcon />,
        name: "GitHub",
        href: "https://github.com/JH9001/jhdev",
      },
    ],
  },
  {
    name: "To-Do List",
    image: taskify,
    description1:
      "Simple to-do list app styled with the Bulma framework for an intuitive interface that allows users to effortlessly create, sort, and delete to-dos. Priorities can be assigned to each to-do, which are color-coded to help users prioritize their workload.",
    description2:
      "The app is designed using the Model-View-Controller pattern, with separate files for the Model and View Controller, ensuring a clean and organized codebase.",
    tech: ["HTML", "CSS", "JavaScript", "Bulma"],
    links: [
      {
        id: 1,
        icon: <PublicIcon />,
        name: "Preview",
        href: "https://jh9001.github.io/taskify/",
      },
      {
        id: 2,
        icon: <GitHubIcon />,
        name: "GitHub",
        href: "https://github.com/JH9001/taskify",
      },
    ],
  },
  {
    name: "Calculator",
    image: calculator,
    description1:
      "This is a fully functional calculator built entirely with HTML, CSS, and JavaScript. It supports all basic mathematical operations and allows users to chain together multiple operations.",
    description2:
      "The calculator also includes a button that toggles numbers from positive to negative. To prevent display overflow, long numbers are automatically truncated and displayed up to seven digits.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        id: 1,
        icon: <PublicIcon />,
        name: "Preview",
        href: "https://jh9001.github.io/calculator/",
      },
      {
        id: 2,
        icon: <GitHubIcon />,
        name: "GitHub",
        href: "https://github.com/JH9001/calculator",
      },
    ],
  },
];
