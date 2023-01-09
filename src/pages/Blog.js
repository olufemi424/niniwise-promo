import HomeHero from "../components/HeroSection";
import useFetch from "../useFetch";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import backgroundImage from "../assets/blog.jpeg";
import ButtonCta from "../components/ButtonCta";

const Blog = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8001/blogs');

    return (
        <div className="blog">
            <HomeHero pageTitle={'Blog'} background={backgroundImage}></HomeHero>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
            <ButtonCta></ButtonCta>
            <Footer></Footer>
        </div>

    );
}

export default Blog;
