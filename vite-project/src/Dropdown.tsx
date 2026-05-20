import './Accueil.css'
import './Propos.css'
import ArrowBack from './assets/arrow_back.svg'
import { useState } from 'react'

// Avec ! devant ouvert signifie que ça inverse la valeur de vérité (Boolean, true devient false et inversement)
// Mettre ()=> permet d'éviter un comportement imprévisible (bonnes pratiques) 
// useState permet de modifier une variable (qui se trouve à gauche) grace à une fonction (à droite) 
// et elle permet également de réactualiser la page lors d'un changement. 

interface DropdownProps {
texte:string | undefined
description:string | undefined
}

function Dropdown (props:DropdownProps) {
  const [ouvert, setOuvert] = useState(false)

return <article className='section'>
          <div className='carroussel' onClick={()=> setOuvert(!ouvert)}> {props.texte} 
          <div className='icon'>
            <img src={ArrowBack} className={`icons ${ouvert}`} />
          </div>
          </div>
           <div className={`text-content ${ouvert}`}>
            <p>{props.description}</p>
          </div>
        </article>
}

export default Dropdown


