import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchByValue from './components/SearchBar/SearchApi';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
const [articles, setArticles] = useState([]);
const [query, setQuery] = useState("");
const [page, setPage] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);
const [modalIsOpen, setIsOpen] = useState(false);

useEffect(()=>{
  ( async () => {

if (!query.trim()) {return};

try {
      setIsLoading(true);
      setIsError(false);
      const data =  await SearchByValue(query, page); 
      setArticles(prev => [...prev, ...data.results]);   
    }
catch (error) {
      setIsError(true);
      console.log(error.message);
    }
finally{
      setIsLoading(false);
    }
} )() },[query, page]);

const handleChangeQuery = (newQuery) => {
  if(query === newQuery){return};
  setQuery(newQuery);
  setPage(1); 
  setArticles([]);
};

const changePageOnClick = () =>{
  setPage(prev => prev + 1);
};

const modalOpen = (newImg) =>{
  setSelectedImage(newImg);
  setIsOpen(true);
};

const modalClose = () =>{
  setIsOpen(false);
};

return (
<>
<SearchBar onSearchChange={handleChangeQuery}/> 
{ articles.length > 0 && <ImageGallery articles={articles} modalOpen={modalOpen} /> }
{ isLoading && <Loader /> } 
{ isError && <ErrorMessage/> }
{ articles.length > 0 && <LoadMoreBtn  changePage={changePageOnClick}/> }
<ImageModal selectedImage={selectedImage}  onClose={modalClose} isOpen={modalIsOpen}/>
</>
)};

export default App;
