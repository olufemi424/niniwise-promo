const ButtonCta = ({size, text='Get Started', refCta}) => {
    const handleCtaClick = () => alert('we are no longer accepting users. we are dedicated to the development of problem solving tools. niniwiseoriginal@gmail.com, olufemiaf@gmail.com')
    return (
        <div ref={refCta} className={`button__cta ${size ? size : ''}`}>
            <button onClick={handleCtaClick} className="btn">
                {text}
            </button>
        </div>
    );
}

export default ButtonCta;
