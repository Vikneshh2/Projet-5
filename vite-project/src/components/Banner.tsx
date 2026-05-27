import "../scss/Banner.scss";

interface BannerProps {
  texte: string;
  image: string;
}

function Banner(props: BannerProps) {
  return (
    <div className="banner">
      <img src={props.image} />
      <p className="banner-text">{props.texte}</p>
    </div>
  );
}

export default Banner;
