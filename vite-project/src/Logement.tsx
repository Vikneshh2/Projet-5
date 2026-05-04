import './Accueil.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"
import './Logement.css'
import ArrowBack from './assets/arrow_back.svg'
import HeaderApp from './HeaderApp'
import ContainerLocation from './ContainerLocation'
import logementsJSON from '../logements.json'
import InactiveStar from './assets/star-inactive 1.svg'
import ActiveStar from './assets/star-active 2.svg'
import { useParams } from "react-router-dom"
import Dropdown from './Dropdown'
import StarRating from './StarRating'


function Logement () {
const { idLogement } = useParams();
const logement= logementsJSON.find(log=>log.id == idLogement) // log=>log
return <>
        <HeaderApp image={Logo}></HeaderApp>
    <main>
<div className='container-logement'>

  <ContainerLocation image={Logo}></ContainerLocation>
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
      <div className='tag'>Cozy</div>
      <div className='tag'>Canal</div>
      <div className='tag'>Paris 10</div>
    </div>

      <StarRating rating={logement?.rating}></StarRating>
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