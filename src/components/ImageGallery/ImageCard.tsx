import s from "./ImageGallery.module.css"

const ImageCard = ({small, regular, alt, modalOpen }) => {

  return (
    <li className={s.galleryItem} onClick={()=>modalOpen(regular)}>
    <div className={s.innerCont}>
      <img  width="300" height="200" src={small} alt={alt} />
    </div>
    </li>
  )};
export default ImageCard;
