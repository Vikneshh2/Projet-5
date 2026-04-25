import './Accueil.css'


interface ContainerLocationProps {
image:string
}

function ContainerLocation (props:ContainerLocationProps) {
  return  <img src={props.image} className='pictures'/>
}


export default ContainerLocation