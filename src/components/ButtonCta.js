const ButtonCta = ({size}) => {
    const handleCtaClick = () => alert('Still in testing before going live.')
    return (
        <div className={`button__cta ${size}`}>
            <button onClick={handleCtaClick} className="btn">
                Get Started
            </button>
        </div>
    );
}

export default ButtonCta;
