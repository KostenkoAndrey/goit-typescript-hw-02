import React, { FC } from "react";
import s from "./ImageGallery.module.css"
import { Articles } from "../../App";

interface ImageCardType {
  small: string;
  regular: string;
  alt: string;
}

interface PropsType extends ImageCardType {
  modalOpen: (imageUrl: string) => void; 
}

const ImageCard: FC<PropsType> = ({small, regular, alt, modalOpen }) => {
  return (
    <li className={s.galleryItem} onClick={()=>modalOpen(regular)}>
    <div className={s.innerCont}>
      <img  width="300" height="200" src={small} alt={alt} />
    </div>
    </li>
  )};
export default ImageCard;
