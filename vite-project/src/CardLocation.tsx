import './Accueil.css'
import { Link } from 'react-router-dom'



interface CardLocationProps {
  image:string
  texte:string
  id:string
}

function CardLocation (props:CardLocationProps) {
return       <Link to='/logement' className='card-link'>
   <div className='card'>
          <img src={props.image}  />
          <p className='card-text'>{props.texte}</p>
        </div>
        </Link>
}


export default CardLocation