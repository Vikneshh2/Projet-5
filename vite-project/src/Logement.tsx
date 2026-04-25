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

function Logement () {
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
<div className='container-logement'>

{/* {logementsJSON.map((logement) => (
            <ContainerLocation image={logement.pictures} id={logement.id} ></ContainerLocation>
      ))} */}

  <ContainerLocation image={Logo}></ContainerLocation>
  <div className='info1'>
    <div className='container-texte'>
    <div className='title'>Cozy loft on the Canal Saint-Martin</div> 
    {/* <br /> */}
    <div className='location'>Paris, Île-de-France</div>
    </div>
      <div className='host'>
    <p className='nom-pro'>Alexandre <br />
      Dumas</p>
    <img src={Logo} className='img-pro' />
  </div>
  </div>


  <div className='info2'>
    <div className='container-tags'>
      <div className='tag'>Cozy</div>
      <div className='tag'>Canal</div>
      <div className='tag'>Paris 10</div>
    </div>
      <div className='rating'>
        <img src={ActiveStar}  className='star'/>
        <img src={ActiveStar}  className='star'/>
        <img src={InactiveStar}  className='star'/>
        <img src={InactiveStar}  className='star'/>
        <img src={InactiveStar}  className='star'/>

      </div>
  </div>


  <div className='info3'>
    <div className='section'>
      <div className='carroussel'>
        Description
        <div className='icon'>
          <img src={ArrowBack} className='icons'/>
        </div>
      </div>
      <div className='liste'>
        Lorem dqsfmqlfùmdgdgkùdù
      </div>
    </div>

    <div className='section'>
      <div className='carroussel'>
        Équipements
        <div className='icon'>
          <img src={ArrowBack} className='icons'/>
        </div>
      </div>
      <div className='liste'>
        Lorem 
   
      </div>
    </div>
  </div>

</div>
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
    </>
}

export default Logement