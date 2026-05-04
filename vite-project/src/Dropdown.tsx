import './Accueil.css'
import './Propos.css'
import ArrowBack from './assets/arrow_back.svg'




interface DropdownProps {
texte:string
description:string
}

function Dropdown (props:DropdownProps) {
return <article className='section'>
          <div className='carroussel'> {props.texte} 
          <div className='icon'>
            <img src={ArrowBack} className='icons'/>
          </div>
          </div>
           <div className='text-content'>
            <p>{props.description}</p>
          </div>
        </article>
}

export default Dropdown


