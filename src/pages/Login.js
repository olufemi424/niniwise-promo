import HomeHero from "../components/HeroSection";
import backgroundImage from "../assets/pricing.jpeg";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const Login = () => {
    return (
        <div className="pricing">
            <HomeHero pageTitle={'Free for first 20 users'} background={backgroundImage}></HomeHero>
            <ButtonCta></ButtonCta>
            <Footer></Footer>
        </div>
    );
}

export default Login;
