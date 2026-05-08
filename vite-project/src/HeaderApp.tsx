import './Accueil.css'
import { NavLink } from 'react-router-dom'


interface HeaderAppProps {
  image: string
}


function HeaderApp (props:HeaderAppProps) {

return <header>
      <img src={props.image} id='logo' />
      <div>
        <NavLink to= '/' end><button id='accueil'>Accueil</button></NavLink>
        <NavLink to= '/propos' ><button id='propos'>A propos</button></NavLink>
      </div>
    </header>
}

export default HeaderApp