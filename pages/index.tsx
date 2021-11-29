import Container from "@mui/material/Container";
import About from "../src/domains/Home/about";
import Contact from "../src/domains/Home/contact";
import Episodes from "../src/domains/Home/episodes";
import Featured from "../src/domains/Home/featured";
import Header from "../src/domains/Home/header";

const Homepage = () => {
  return (
    <Container maxWidth={false} disableGutters>
    <Header/>
    <Featured/>
    <About />
    <Episodes />
    <Contact />
    </Container>
  );
};

export default Homepage
