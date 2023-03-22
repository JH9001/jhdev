import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Box } from "@mui/system";

const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "2000px",
        margin: "0 auto",
      }}
    >
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <ContactForm />
      <Footer />
    </Box>
  );
};
export default App;
