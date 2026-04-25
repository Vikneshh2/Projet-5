import './Accueil.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"
import './ErrorPage.css'
import { Link } from 'react-router-dom'
import HeaderApp from './HeaderApp'

function ErrorPage () {
  return <>
  {/* <header>
      <img src={Logo} id='logo' />
      <div>
        <Link to= '/'><button>Accueil</button></Link>
        <Link to= '/propos' ><button>A propos</button></Link>
      </div>
    </header> */}
    <HeaderApp image={Logo}></HeaderApp>
    <main>
  <h1 className='error'>404</h1>
  <p>Oups! La page que vous avez demandez n'existe pas.</p>
  <Link to='/'><button className='retour-accueil'>Retournez sur la page d'accueil</button></Link>
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
    </>

}
export default ErrorPage