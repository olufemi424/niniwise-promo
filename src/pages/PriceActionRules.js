import backgroundImage from "../assets/backgrounds/pricing.jpeg";
import downtrend from "../assets/price-action/downtrend.png";
import uptrend from "../assets/price-action/uptrend.png";
import balanced from "../assets/price-action/balanced.png";
import HomeHero from "../components/HeroSection";
import Footer from "../components/Footer";
import ButtonCta from "../components/ButtonCta";

const PriceActionRules = () => {
    return (
        <div className="price-action">
            <HomeHero pageTitle={'Price Action Rules'} background={backgroundImage}/>
            <div className="price-action__container">
                <div className="price-action__type">
                    <div className="price-action__types">
                        <h3>Uptrend</h3>
                        <img
                            className="price-action__image"
                            src={ uptrend }
                            alt="Niniwise journal"
                        />
                    </div>
                    <div className="price-action__types">
                        <h3>Downtrend</h3>
                        <img
                            className="price-action__image"
                            src={ downtrend }
                            alt="Niniwise journal"
                        />
                    </div>
                    <div className="price-action__types">
                        <h3>Balanced</h3>
                        <img
                            className="price-action__image"
                            src={ balanced }
                            alt="Niniwise journal"
                        />
                    </div>
                </div>
            </div>
            <ButtonCta></ButtonCta>
            <Footer></Footer>
        </div>
    );
}

export default PriceActionRules;
