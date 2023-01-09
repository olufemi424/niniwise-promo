import HomeHero from "../components/HeroSection";
import Benefits from "../components/Benefits";
import niniwiseImage1 from "../assets/Screen Shot 2023-01-05 at 11.56.24 PM.png";
import backgroundImage from "../assets/home-hero.jpeg";
import results from "../assets/results.png";
import userImage from "../assets/profileImage.jpg";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const Home = () => {
    const homeHeroData = {
        backgroundImage: backgroundImage,
        title: "Journal  your way to consistent profitability -",
        description: "A trading journal is a useful tool for traders to track their progress, identify patterns and mistakes, and improve their strategies. It can help traders overcome biases and emotions and improve their performance in the market."
    }
    return (
        <div className="home">
            <HomeHero
                background={homeHeroData.backgroundImage}
                title={homeHeroData.title}
                description={homeHeroData.description}
                getStartedButtonisEnabled={true}
            ></HomeHero>
            <div className="home__img-container">
                <img
                    className="home__img-image"
                    src={ niniwiseImage1 }
                    alt="Niniwise journal"
                />
            </div>
            <Benefits></Benefits>
            <ButtonCta></ButtonCta>
            <div className="user-reviews">
                <figure className="review">
                    <blockquote className="review__text">
                        The first 6 months of using Niniwise Journal, results were amazing, i am able to recognize common patterns in my losing and winning trades.
                    </blockquote>
                    <figcaption className="review__user">
                        <img src={ userImage } alt="Testimonail result" className="review__photo"/>
                        <div className="review__user-box">
                            <p className="review__user-name">Olufemi Afolabi</p>
                            <p className="review__user-date">Oct 23rd, 2022</p>
                        </div>
                        <div className="review__rating">7.8</div>
                    </figcaption>
                </figure>
                <img
                    className="review__img"
                    src={ results }
                    alt="Niniwise journal"
                />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
