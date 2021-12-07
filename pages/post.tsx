import { Container } from "@mui/material";
import Content from "../src/domains/Post/content";
import Episode from "../src/domains/Post/episode";
import Header from "../src/domains/Post/header";
import Contact from "../src/shared/components/contact";
import Footer from "../src/shared/components/footer";

const Post = () => {
  return (
    <Container maxWidth={"xl"} disableGutters>
      <Header />
      <Episode />
      <Content />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Post;
