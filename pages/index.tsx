import Container from "@mui/material/Container";
import About from "../src/domains/Home/about";
import Episodes from "../src/domains/Home/episodes";
import Featured from "../src/domains/Home/featured";
import Header from "../src/domains/Home/header";
import Contact from "../src/shared/components/contact";
import Footer from "../src/shared/components/footer";

const Homepage = () => {
  return (
    <Container maxWidth={false} disableGutters>
    <Header/>
    <Featured/>
    <About />
    <Episodes />
    <Contact />
    <Footer />
    </Container>
  );
};

export default Homepage
