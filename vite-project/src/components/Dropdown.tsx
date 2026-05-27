import "../scss/Dropdown.scss";
import ArrowBack from "../assets/arrow_back.svg";
import { useState } from "react";

// Avec ! devant Open signifie que ça inverse la valeur de vérité (Boolean, true devient false et inversement)
// Mettre ()=> permet d'éviter un comportement imprévisible (bonnes pratiques)
// useState permet de modifier une variable (qui se trouve à gauche) grace à une fonction (à droite)
// et elle permet également de réactualiser la page lors d'un changement.

interface DropdownProps {
  texte: string | undefined;
  description?: string | undefined;
  equipements?: string[] | undefined;
}

function Dropdown(props: DropdownProps) {
  const [Open, setOpen] = useState(false);

  return (
    <article className="section">
      <div className="carroussel" onClick={() => setOpen(!Open)}>
        {" "}
        {props.texte}
        <div className="icon">
          <img
            src={ArrowBack}
            className={`icons ${Open ? "open" : "closed"}`}
          />
        </div>
      </div>

      <div className={`text-content ${Open ? "open" : "closed"}`}>
        {props.description && (
          <p className="description">{props.description}</p>
        )}
        {props.equipements && (
          <ul className="equipements">
            {props.equipements.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default Dropdown;
