import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ContactFormSpree from "./components/ContactFormSpree";
import Footer from "./components/Footer";
import { Box } from "@mui/system";

const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "1800px",
        margin: "0 auto",
      }}
    >
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <ContactFormSpree />
      <Footer />
    </Box>
  );
};
export default App;
