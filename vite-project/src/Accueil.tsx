import './Accueil.css'
import Logo from './assets/Logo.svg'
import Footer from "./assets/Footer.svg"
import Banner from './Banner'
import HeaderApp from './HeaderApp'
import BannerImage from './assets/Banniere.svg'
import logementsJSON from '../logements.json'
import CardLocation from './CardLocation'


// const length = logementsJSON.length

function Accueil () {
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
     <Banner image={BannerImage} texte='Chez vous, partout et ailleurs'></Banner>
      <div className='container'>
        {/* <div className='card'>
          <img src={''}  />
          <p className='card-text'>Texte</p>
        </div>
        <div className='card'>
          <img src={''}  />
          <p className='card-text'>Texte</p>
        </div>
        <div className='card'>
          <img src={''}  />
          <p className='card-text'>Texte</p>
        </div>
        <div className='card'>
          <img src={''}  />
          <p className='card-text'>Texte</p>
        </div>
        <div className='card'>
          <img src={''}  />
          <p className='card-text'>Texte</p>
        </div>
        <div className='card'>
          <img src={''}  />
          <p className='card-text'>Texte</p>
        </div> */}

{logementsJSON.map((logement) => (
            <CardLocation image={logement.cover} texte={logement.title} id={logement.id} ></CardLocation>
      ))}
 


          
      </div>
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
  </>
}
export default Accueil