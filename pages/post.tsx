import Content from "../src/domains/Post/content";
import Episode from "../src/domains/Post/episode";
import Header from "../src/domains/Post/header";
import Contact from "../src/shared/components/contact";
import Footer from "../src/shared/components/footer";

const Post = () => {
  return (<>
    <Header />
    <Episode /><Content /><Contact /><Footer /></>
  )
    // 
    // <Platforms />
    // <Content />
    // <Contact />
}

export default Post;
