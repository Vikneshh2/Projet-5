import './Accueil.css'
import Logo from './assets/Logo.svg'
import Footer from "./assets/Footer.svg"
import Banner from './Banner'
import HeaderApp from './HeaderApp'
import BannerImage from './assets/Banniere.svg'
import logementsJSON from '../logements.json'
import CardLocation from './CardLocation'



function Accueil () {
  return <>
    <HeaderApp image={Logo}></HeaderApp>
    <main>
     <Banner image={BannerImage} texte='Chez vous, partout et ailleurs'></Banner>
      <div className='container'>
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