import './Accueil.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"
import HeaderApp from './HeaderApp'
import Slideshow from './Slideshow'
import logementsJSON from '../logements.json'
import { useParams } from "react-router-dom"
import Dropdown from './Dropdown'
import StarRating from './StarRating'
import Tags from './Tags'


function Logement () {
const { idLogement } = useParams();
const logement= logementsJSON.find(log=>log.id == idLogement) // log=>log
return <>
        <HeaderApp image={Logo}></HeaderApp>
    <main>
<div className='container-logement'>

  <Slideshow pictures={logement?.pictures}></Slideshow>
  <div className='info1'>
    <div className='container-texte'>
    <div className='title'>{logement?.title}</div> 
    <div className='location'>{logement?.location}</div>
    </div>
      <div className='host'>
    <p className='nom-pro'>{logement?.host.name}</p>
    <img src={logement?.host.picture} className='img-pro' />
  </div>
  </div>


  <div className='info2'>
    <div className='container-tags'>
      <Tags tags={logement?.tags}></Tags>
    </div>
        <div id='rating'>
      <StarRating rating={logement?.rating}></StarRating>
      </div>
  </div>


  <div className='info3'>
    <Dropdown texte='Description' description={logement?.description}></Dropdown>
    <Dropdown texte='Equipements' description={logement?.equipments}></Dropdown>
  </div>

</div>
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
    </>
}

export default Logement