import backgroundImage from "../assets/backgrounds/home-hero.jpeg";
import dailystatsscreen from "../assets/app-home2.png";
import niniwiseImage1 from "../assets/app-home1.png";
import HomeHero from "../components/HeroSection";
import ButtonCta from "../components/ButtonCta";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import LazyLoadedImage from "../components/LazyLoadedImage";

const Home = () => {
    const homeHeroData = {
        backgroundImage: backgroundImage,
        title: "Journal  your way to consistent profitability -",
        description: "A trading journal is a useful tool for traders to track their progress, identify patterns and mistakes, and improve their strategies. It can help traders overcome biases and emotions and improve their performance in the market."
    }
    return (
        <main className="home">
            <section className="home-hero-mobile">
                <HomeHero
                    className="home-hero-mobile"
                    background={homeHeroData.backgroundImage}
                    title={homeHeroData.title}
                    description={homeHeroData.description}
                    getStartedButtonisEnabled={true}
                />
            </section>
            <section className="home-landing">
                <div className="container">
                    <div className="home-landing__info">
                        <h2 className="home-landing__info-title">
                            {homeHeroData.title}
                        </h2>
                        <p className="home-landing__info-text">
                           {homeHeroData.description}
                        </p>
                         <ButtonCta />
                    </div>
                    <div className="home-landing__info">
                        <div className="home-landing__img-container">
                            <LazyLoadedImage
                                imageClass="home-landing-img image-1"
                                src={ niniwiseImage1 }
                                alt="Niniwise journal"
                            />
                            <LazyLoadedImage
                                imageClass="home-landing-img image-2"
                                src={ niniwiseImage1 }
                                alt="Niniwise journal"
                            />
                            <LazyLoadedImage
                                imageClass="home-landing-img image-3"
                                src={ niniwiseImage1 }
                                alt="Niniwise journal"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home__img-container">
                <LazyLoadedImage
                    imageClass="home__img-image"
                    src={ dailystatsscreen }
                    alt="Niniwise journal"
                />
            </section>
            <Benefits/>
            <section className="cta-section">
                <ButtonCta/>
            </section>
            <section className="user-reviews">
                <ReviewCard/>
            </section>
            <Footer></Footer>
        </main>
    );
}

export default Home;
