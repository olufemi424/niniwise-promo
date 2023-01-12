import reflect from "../assets/benefits/reflect.png";
import tracking from "../assets/benefits/tracking.png";
import descisions from "../assets/benefits/descision.png";
import learning from "../assets/benefits/learning.png";
import risk_management from "../assets/benefits/risk-management.png";
import understanding from "../assets/benefits/understanding.png";

const Benefit = () => {
    const benefits = [
        {
            title: "Reflect",
            description: "Helps traders to reflect on their trades and identify patterns and mistakes",
            icon: reflect
        },
        {
            title: "Track",
            description: "Allows you to traders to track their progress and measure their performance over times",
            icon: tracking
        },
        {
            title: "Decisions",
            description: "Helps traders to overcome their own biases and emotions that may affect their trading decisions",
            icon: descisions
        },
        {
            title: "Learning",
            description: "Enables traders to continuously improve their trading strategies by learning from their past experiences",
            icon: learning
        },
        {
            title: "Risk Management",
            description: "Can be a useful tool for risk management and compliance, as it provides a record of trades and related information",
            icon: risk_management
        },
        {
            title: "Understanding",
            description: "Provides a way for traders to develop deep understanding of the market and their own trading style",
            icon: understanding
        }
    ]
    return (
        <div className="home-benefit">
            <h3 className="home-benefit__title">
                Benefits
            </h3>
            <div className="home-benefit__list">
                {benefits.map(benefit => (
                    <div className="home-benefit__list-item" key={benefit.title} >
                       <div className="icon">
                            <img src={ benefit.icon } alt={benefit.title} />
                       </div>
                       <div className="details">
                            <h5>{ benefit.title }</h5>
                            <p>{ benefit.description }</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Benefit;
