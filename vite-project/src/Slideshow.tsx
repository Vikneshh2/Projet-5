import { useState } from 'react'
import ArrowLeft from './assets/Arrow-Left.svg'
import ArrowRight from './assets/Arrow-Right.svg'
import './Logement.css'



interface SlideshowProps {
  pictures:string[]
}



function Slideshow (props:SlideshowProps) {
  const [numeroImage, setNumeroImage] = useState(0)

  return <div className='imageContainer'>
      <img src={props.pictures[numeroImage]} className='pictures'/>
      <p>{numeroImage+1}/{props.pictures.length}</p>
      <img className='arrowLeft' src={ArrowLeft} onClick={()=> {
        if (numeroImage==0) {
          setNumeroImage(props.pictures.length-1)
        }
        else {
          setNumeroImage(numeroImage-1)
        }
      }}/>
      <img className='arrowRight' src={ArrowRight} onClick={()=>{
        if (numeroImage==props.pictures.length-1) {
          setNumeroImage(0)
        }
        else {
          setNumeroImage(numeroImage+1)
        }
      }}/>
      </div>



}




// function Slideshow (props:SlideshowProps){
//   let result= []
//   for(let i=0; i<props.pictures.length; i++) {
//     result.push (<div className='imageContainer'>
//       <img src={props.pictures[i]} className='pictures'/>
//       <p>{i+1}/{props.pictures.length}</p>
//       <img className='arrowLeft' src={ArrowLeft}/>
//       <img className='arrowRight' src={ArrowRight}/>
//       </div>)
//   }
//   return result
// }

export default Slideshow



