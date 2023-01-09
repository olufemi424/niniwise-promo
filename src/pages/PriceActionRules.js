import HomeHero from "../components/HeroSection";
import backgroundImage from "../assets/pricing.jpeg";
import backgroundImage1 from "../assets/priceaction.png";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const PriceActionRules = () => {
    return (
        <div className="pricing">
            <HomeHero pageTitle={'Price Action Rules'} background={backgroundImage}/>
            <HomeHero background={backgroundImage1}/>
            <ButtonCta></ButtonCta>
            <Footer></Footer>
        </div>
    );
}

export default PriceActionRules;
