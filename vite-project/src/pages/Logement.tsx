import "../scss/Logement.scss";
import Logo from "../assets/LOGO.svg";
import HeaderApp from "../components/HeaderApp";
import Slideshow from "../components/Slideshow";
import logementsJSON from "../../logements.json";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import StarRating from "../components/StarRating";
import Tags from "../components/Tags";
import FooterApp from "../components/FooterApp";
import ErrorPage from "./ErrorPage";

function Logement() {
  const { idLogement } = useParams();
  const logement = logementsJSON.find((log) => log.id == idLogement);
  if (logement == undefined) {
    return <ErrorPage />;
  } else {
    return (
      <>
        <HeaderApp image={Logo}></HeaderApp>
        <main>
          <div className="container-logement">
            <Slideshow pictures={logement?.pictures}></Slideshow>
            <div className="info1">
              <div className="container-texte">
                <div className="title">{logement?.title}</div>
                <div className="location">{logement?.location}</div>
              </div>
              <div className="host">
                <p className="nom-pro">{logement?.host.name}</p>
                <img src={logement?.host.picture} className="img-pro" />
              </div>
            </div>

            <div className="info2">
              <div className="container-tags">
                <Tags tags={logement?.tags}></Tags>
              </div>
              <div id="rating">
                <StarRating rating={logement?.rating}></StarRating>
              </div>
            </div>

            <div className="info3">
              <Dropdown
                texte="Description"
                description={logement?.description}
                equipements={undefined}
              ></Dropdown>
              <Dropdown
                texte="Equipements"
                description={undefined}
                equipements={logement?.equipments}
              ></Dropdown>
            </div>
          </div>
        </main>
        <FooterApp></FooterApp>
      </>
    );
  }
}
export default Logement;
