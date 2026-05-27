import "../scss/Accueil.scss";
import Logo from "../assets/Logo.svg";
import FooterApp from "../components/FooterApp";
import Banner from "../components/Banner";
import HeaderApp from "../components/HeaderApp";
import BannerImage from "../assets/Banniere.svg";
import logementsJSON from "../../logements.json";
import CardLocation from "../components/CardLocation";

function Accueil() {
  return (
    <>
      <HeaderApp image={Logo}></HeaderApp>
      <main>
        <Banner
          image={BannerImage}
          texte="Chez vous, partout et ailleurs"
        ></Banner>
        <div className="container">
          {logementsJSON.map((logement) => (
            <CardLocation
              key={logement.id}
              image={logement.cover}
              texte={logement.title}
              id={logement.id}
            ></CardLocation>
          ))}
        </div>
      </main>
      <FooterApp></FooterApp>
    </>
  );
}
export default Accueil;
