import HomeHero from "../components/HeroSection";
import niniwiseImage1 from "../assets/Screen Shot 2023-01-05 at 11.56.24 PM.png";
import backgroundImage from "../assets/timing-stock-market.jpeg";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const Features = () => {
    return (
        <div className="features">
            <HomeHero pageTitle={'Features'} background={backgroundImage}></HomeHero>
            <div className="features__img-container">
                <img
                    className="features__img-image"
                    src={ niniwiseImage1 }
                    alt="Niniwise journal"
                />
            </div>
            <ButtonCta></ButtonCta>
            <Footer></Footer>
        </div>
    );
}

export default Features;
