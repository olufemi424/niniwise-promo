import HomeHero from "../components/HeroSection";
import backgroundImage from "../assets/backgrounds/pricing.jpeg";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const Pricing = () => {
    return (
        <main className="pricing">
            <HomeHero pageTitle={'Free for first 20 users'} background={backgroundImage}></HomeHero>
            <div className="cta-section">
                <ButtonCta/>
            </div>
            <Footer></Footer>
        </main>
    );
}

export default Pricing;
