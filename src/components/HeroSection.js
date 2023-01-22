import ButtonCta from "./ButtonCta";

const HomeHero = ({ background, title, description, getStartedButtonisEnabled, pageTitle }) => {
    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
    }
  return (
    <div className="home-hero" style={heroStyle}>
        <div className="container">
            { pageTitle &&
                <h2 className="home-hero__page-title">
                    { pageTitle }
                </h2>
            }
            { title && description &&
                <div className="home-hero__info">
                    <h2 className="home-hero__info-title">
                        { title }
                    </h2>
                    <p className="home-hero__info-text">
                        { description }
                    </p>
                    { getStartedButtonisEnabled && <ButtonCta></ButtonCta> }
                </div>
            }
        </div>
    </div>
  );
}

export default HomeHero;
