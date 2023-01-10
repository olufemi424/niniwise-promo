import niniwiseImage1 from "../assets/app-home.png";
import backgroundImage from "../assets/timing-stock-market.jpeg";
import HomeHero from "../components/HeroSection";
import ButtonCta from "../components/ButtonCta";
import Footer from "../components/Footer";

const Features = () => {
    return (
        <div className="features">
            <HomeHero pageTitle={'Features'} background={backgroundImage}></HomeHero>

            <div className="features__container">
                <div className="features__item">
                    <p>Record Trades</p>
                </div>
                <div className="features__item">
                    <p>Charts Images</p>
                </div>
                <div className="features__item">
                    <p>Categorize Trades</p>
                </div>
                <div className="features__item">
                    <p>Track Goals</p>
                </div>
            </div>

            <div className="features__description">
                <div className="features__description-box">
                    <p>A place to record trades, including trade details such as the instrument traded, entry and exit prices, and any notes about the trade</p>
                </div>
                <div className="features__description-box">
                    <img
                        className="features__image"
                        src={ niniwiseImage1 }
                        alt="Niniwise journal"
                    />
                </div>
            </div>

            <div className="features__description">
                <div className="features__description-box">
                    <img
                        className="features__image"
                        src={ niniwiseImage1 }
                        alt="Niniwise journal"
                    />
                </div>
                <div className="features__description-box">
                    <p>Charts or graphs to visualize trade data and track progress</p>
                </div>
            </div>

            <div className="features__description">
                <div className="features__description-box">
                    <p>A way to categorize trades by type (e.g. long, short, day trade, swing trade)</p>
                </div>
                <div className="features__description-box">
                    <img
                        className="features__image"
                        src={ niniwiseImage1 }
                        alt="Niniwise journal"
                    />
                </div>
            </div>

            <div className="features__description">
                <div className="features__description-box">
                    <img
                        className="features__image"
                        src={ niniwiseImage1 }
                        alt="Niniwise journal"
                    />
                </div>
                <div className="features__description-box">
                    <p>A way to set and track goals for the trader's performance</p>
                </div>
            </div>
            <ButtonCta></ButtonCta>
            <Footer></Footer>
        </div>
    );
}

export default Features;
