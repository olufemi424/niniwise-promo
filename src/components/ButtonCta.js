const ButtonCta = ({size}) => {
    const handleCtaClick = () => alert('we are no longer accepting users. we are dedicated to the development of problem solving tools. niniwiseoriginal@gmail.com, olufemiaf@gmail.com')
    return (
        <div className={`button__cta ${size}`}>
            <button onClick={handleCtaClick} className="btn">
                Get Started
            </button>
        </div>
    );
}

export default ButtonCta;
