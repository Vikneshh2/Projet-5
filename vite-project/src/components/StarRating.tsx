import ActiveStar from "../assets/star-active 2.svg";
import InactiveStar from "../assets/star-inactive 1.svg";
import "../scss/StarRating.scss";

interface StarRatingProps {
  rating: string | undefined;
}

function StarRating(props: StarRatingProps) {
  if (props.rating != undefined) {
    const rating = Number(props.rating);
    let result = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        result.push(<img src={ActiveStar} key={i} className="star" />);
      } else {
        result.push(<img src={InactiveStar} key={i} className="star" />);
      }
    }
    return result;
  }
}
export default StarRating;
