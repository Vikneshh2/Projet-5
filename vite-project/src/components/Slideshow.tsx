import { useState } from "react";
import ArrowLeft from "../assets/Arrow-Left.svg";
import ArrowRight from "../assets/Arrow-Right.svg";
import "../scss/Slideshow.scss";

interface SlideshowProps {
  pictures: string[] | undefined;
}

function Slideshow(props: SlideshowProps) {
  const [NumeroImage, setNumeroImage] = useState(0);
  if (props.pictures != undefined) {
    const pictures = props.pictures;
    if (pictures.length == 1) {
      return (
        <div className="imageContainer">
          <img src={pictures[0]} className="pictures" />
        </div>
      );
    } else {
      return (
        <div className="imageContainer">
          <img src={pictures[NumeroImage]} className="pictures" />
          <p>
            {NumeroImage + 1}/{pictures.length}
          </p>
          <img
            className="arrowLeft"
            src={ArrowLeft}
            onClick={() => {
              if (NumeroImage == 0) {
                setNumeroImage(pictures.length - 1);
              } else {
                setNumeroImage(NumeroImage - 1);
              }
            }}
          />
          <img
            className="arrowRight"
            src={ArrowRight}
            onClick={() => {
              if (NumeroImage == pictures.length - 1) {
                setNumeroImage(0);
              } else {
                setNumeroImage(NumeroImage + 1);
              }
            }}
          />
        </div>
      );
    }
  }
}

export default Slideshow;
