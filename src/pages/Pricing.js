import HomeHero from "../components/HeroSection";
import backgroundImage from "../assets/backgrounds/pricing.jpeg";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const Pricing = () => {
    return (
        <div className="pricing">
            <HomeHero pageTitle={'Free for first 20 users'} background={backgroundImage}></HomeHero>
            <ButtonCta></ButtonCta>
            <Footer></Footer>
        </div>
    );
}

export default Pricing;
