import './Accueil.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"

function Logement () {
return <>
  <header>
      <img src={Logo} id='logo' />
      <div>
        <button>Accueil</button>
        <button>A propos</button>
      </div>
    </header>
    <main>
LOGEMENT
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
    </>
}

export default Logement