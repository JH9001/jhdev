import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </>
  );
};
export default App;
