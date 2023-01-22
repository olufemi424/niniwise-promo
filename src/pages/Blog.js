import backgroundImage from "../assets/backgrounds/blog.jpeg";
import HomeHero from "../components/HeroSection";
import useFetch from "../useFetch";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const Blog = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8001/blogs');

    return (
        <main className="blog">
            <HomeHero pageTitle={'Blog'} background={backgroundImage}></HomeHero>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
            <div className="cta-section">
                <ButtonCta/>
            </div>
            <Footer></Footer>
        </main>

    );
}

export default Blog;
