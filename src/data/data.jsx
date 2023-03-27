//TechStack imports
import css3 from "../assets/images/css3.svg";
import git from "../assets/images/git.svg";
import github from "../assets/images/github.svg";
import html5 from "../assets/images/html5.svg";
import javascript from "../assets/images/javascript.svg";
import linux from "../assets/images/linux.svg";
import mui from "../assets/images/mui.svg";
import react from "../assets/images/react.svg";
import vite from "../assets/images/vite.svg";

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
    href: "https://www.linkedin.com/in/joshua-hughes-620ab2261/",
  },
  {
    id: 2,
    icon: <GitHubIcon />,
    name: "GitHub",
    href: "https://github.com/JH9001",
  },
  { id: 3, icon: <DescriptionIcon />, name: "Resume" },
  { id: 4, icon: <EmailIcon />, name: "Email" },
  { id: 5, icon: <CodeIcon />, name: "Source" },
];

export const projectLinksData = [
  { id: 1, icon: <PublicIcon />, name: "Preview" },
  { id: 2, icon: <GitHubIcon />, name: "GitHub" },
];

//Projects imports
import sydney from "../assets/images/sydney.jpg";

export const projectsData = [
  { name: "Sydney", image: sydney },
  { name: "Sydney", image: sydney },
  { name: "Sydney", image: sydney },
  { name: "Sydney", image: sydney },
  { name: "Sydney", image: sydney },
  { name: "Sydney", image: sydney },
];
