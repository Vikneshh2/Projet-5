import './Accueil.css'
import './Propos.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"
import ArrowBack from './assets/arrow_back.svg'
import Banner2 from './assets/Banner2.svg'
import Banner from './Banner'
import HeaderApp from './HeaderApp'


function Propos () {
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
    <Banner image={Banner2} texte=''></Banner>
      <div className='content'>
      <article className='section'>
        <div className='carroussel'> Fia
        <div className='icon'>
          <img src={ArrowBack} className='icons'/>
        </div>
        </div>
      </article>
            <article className='section'>
        <div className='carroussel'> Fiabilité
        <div className='icon'>
          <img src={ArrowBack} className='icons'/>
        </div>
        </div>
      </article>
            <article className='section'>
        <div className='carroussel'> Fiabilité
        <div className='icon'>
          <img src={ArrowBack} className='icons'/>
        </div>
        </div>
      </article>
                <article className='section'>
        <div className='carroussel'> Fiabilité
        <div className='icon'>
          <img src={ArrowBack} className='icons'/>
        </div>
        </div>
      </article>
      </div>
      
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
    </>
}
export default Propos