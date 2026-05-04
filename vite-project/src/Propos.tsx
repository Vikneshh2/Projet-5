import './Accueil.css'
import './Propos.css'
import Logo from "./assets/LOGO.svg"
import Footer from "./assets/Footer.svg"
// import ArrowBack from './assets/arrow_back.svg'
import Banner2 from './assets/Banner2.svg'
import Banner from './Banner'
import HeaderApp from './HeaderApp'
import Dropdown from './Dropdown'


function Propos () {
return <>

        <HeaderApp image={Logo}></HeaderApp>
    <main>
      <Banner image={Banner2} texte=''></Banner>
      <div className='content'>
      <Dropdown texte='Fiabilité' description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'></Dropdown>

      <Dropdown texte='Respect' description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'></Dropdown>
      <Dropdown texte='Service' description='La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'></Dropdown>
      <Dropdown texte='Sécurité' description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.">  </Dropdown>
      </div>
    </main>
    <footer>
      <img src={Footer} id='footer' />
    </footer>
    </>
}
export default Propos