import './Accueil.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"
import './ErrorPage.css'

function ErrorPage () {
  return <>
  <header>
      <img src={Logo} id='logo' />
      <div>
        <button>Accueil</button>
        <button>A propos</button>
      </div>
    </header>
    <main>
  <h1 className="error">404</h1>
  <p>Oups! La page que vous avez demandz n'existe pas.</p>
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
    </>

}
export default ErrorPage