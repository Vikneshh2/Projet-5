import ActiveStar from './assets/star-active 2.svg'
import InactiveStar from './assets/star-inactive 1.svg'


interface StarRatingProps {
  rating:Number
}

function StarRating (props:StarRatingProps) {
  let result= []
  for(let i=1; i<=5; i++) {
    if (i<=props.rating) {
      result.push(<img src={ActiveStar}  className='star'/>)  
    } else {
      result.push (<img src={InactiveStar}  className='star'/>)
    }
  }
  return result
}

export default StarRating