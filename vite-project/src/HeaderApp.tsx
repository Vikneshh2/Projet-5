import './Accueil.css'
import { Link } from 'react-router-dom'

interface HeaderAppProps {
  image: string
}

function HeaderApp (props:HeaderAppProps) {
return <header>
      <img src={props.image} id='logo' />
      <div>
        <Link to= '/'><button>Accueil</button></Link>
        <Link to= '/propos' ><button>A propos</button></Link>
      </div>
    </header>
}

export default HeaderApp