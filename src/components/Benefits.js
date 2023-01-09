const Benefit = () => {
    const benefits = [
        {
            title: "Reflect",
            description: "Helps traders to reflect on their trades and identify patterns and mistakes",
        },
        {
            title: "Track",
            description: "Allows you to traders to track their progress and measure their performance over times",
        },
        {
            title: "Decisions",
            description: "Helps traders to overcome their own biases and emotions that may affect their trading decisions",
        },
        {
            title: "Learning",
            description: "Enables traders to continuously improve their trading strategies by learning from their past experiences",
        },
        {
            title: "Risk Management",
            description: "Can be a useful tool for risk management and compliance, as it provides a record of trades and related information",
        },
        {
            title: "Understanding",
            description: "Provides a way for traders to develop deep understanding of the market and their own trading style",
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
                       <span className="icon"></span>
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
