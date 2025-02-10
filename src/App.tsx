import { useState, useEffect } from 'react'

import SearchBar from './components/SearchBar/SearchBar';
import SearchByValue from './components/SearchBar/SearchApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import './App.css'

export interface Articles {
  id: string,
  alt_description: string,
  urls: { 
    small: string,
    regular: string} 
  }

function App() {
const [articles, setArticles] = useState<Articles[]>([]);
const [query, setQuery] = useState<string>("");
const [page, setPage] = useState<number>(0);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [isError, setIsError] = useState<boolean>(false);
const [selectedImage, setSelectedImage] = useState<string>("");
const [modalIsOpen, setIsOpen] = useState<boolean>(false);

useEffect(()=>{
  ( async () => {
if (!query.trim()) {return};
try {
      setIsLoading(true);
      setIsError(false);
      const data =  await SearchByValue(query, page); 
      setArticles(prev => [...prev, ...data.results]);  
    }
catch (error: unknown) {
      setIsError(true);
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Произошла неизвестная ошибка");
      }
    }
finally{
      setIsLoading(false);
    }
} )() },[query, page]);

const handleChangeQuery = (newQuery: string) => {
  if(query === newQuery){return};
  setQuery(newQuery);
  setPage(1); 
  setArticles([]);
};

const changePageOnClick = () =>{
  setPage(prev => prev + 1);
};

const modalOpen = (newImg: string) =>{
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
