import React, { FC } from "react";
import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css"
import { Articles } from "../../App";

interface ImageGalleryProps {
    articles: Articles[]; 
    modalOpen: (imageUrl: string) => void;
  }


const ImageGallery: FC<ImageGalleryProps> = ({ articles, modalOpen }) =>
(<ul className={s.galleryList}>
  {articles.map( ({ id, alt_description: alt, urls:{ small, regular } }) => 
  <ImageCard key={id} modalOpen={modalOpen} alt={alt} small={small} regular={regular}/>)}
</ul>);


export default ImageGallery;