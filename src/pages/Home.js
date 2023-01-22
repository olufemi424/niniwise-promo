// import niniwiseImage1 from "../assets/app-home.png";
import niniwiseImage1 from "../assets/app-home1.png";
import backgroundImage from "../assets/backgrounds/home-hero.jpeg";
import ButtonCta from "../components/ButtonCta";
import HomeHero from "../components/HeroSection";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";

const Home = () => {
    const homeHeroData = {
        backgroundImage: backgroundImage,
        title: "Journal  your way to consistent profitability -",
        description: "A trading journal is a useful tool for traders to track their progress, identify patterns and mistakes, and improve their strategies. It can help traders overcome biases and emotions and improve their performance in the market."
    }
    return (
        <main className="home">
            <HomeHero
                background={homeHeroData.backgroundImage}
                title={homeHeroData.title}
                description={homeHeroData.description}
                getStartedButtonisEnabled={true}
            />
            <div className="home__img-container">
                <img
                    className="home__img-image"
                    src={ niniwiseImage1 }
                    alt="Niniwise journal"
                />
            </div>
            <Benefits/>
            <div className="cta-section">
                <ButtonCta/>
            </div>
            <div className="user-reviews">
                <ReviewCard/>
            </div>
            <Footer></Footer>
        </main>
    );
}

export default Home;
