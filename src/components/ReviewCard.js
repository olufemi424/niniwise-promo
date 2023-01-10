
import results from "../assets/results.png";
import userImage from "../assets/profileImage.jpg";

const ReviewCard = () => {
    return (
        <figure className="review">
            <div className="review__box">
                <blockquote className="review__text">
                    The first 6 months of using Niniwise Journal, results were amazing, i am able to recognize common patterns in my losing and winning trades.
                </blockquote>
                <figcaption className="review__user">
                    <img src={ userImage } alt="Testimonail result" className="review__photo"/>
                    <div className="review__user-box">
                        <p className="review__user-name">Olufemi Afolabi</p>
                        <p className="review__user-date">Oct 23rd, 2022</p>
                    </div>
                </figcaption>
            </div>
            <img
                className="review__img"
                src={ results }
                alt="Niniwise journal"
            />
        </figure>
    );
}

export default ReviewCard;
