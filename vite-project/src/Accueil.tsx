import './Accueil.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"



function Accueil () {
  return <>
  {/* <div> */}
  <header>
      <img src={Logo} id='logo' />
      <div>
        <button>Accueil</button>
        <button>A propos</button>
      </div>
    </header>
    <main>
      <div className="banner">Chez vous, partout et ailleurs</div>
      <div className='container'></div>
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
  </>
}
export default Accueil