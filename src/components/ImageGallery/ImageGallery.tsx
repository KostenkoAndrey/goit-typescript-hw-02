import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css"

const ImageGallery = ({ articles, modalOpen }) =>(
<ul className={s.galleryList}>
  {articles.map( ({ id, alt_description: alt, urls:{ small, regular } }) => <ImageCard key={id} modalOpen={modalOpen} alt={alt} small={small} regular={regular}/>)}
</ul>);


export default ImageGallery;