import { useState } from "react";
import s from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearchChange }) => {
const [ value, setValue ] = useState("");

const handleSubmit = (evt) => {
  evt.preventDefault();
  onSearchChange(value);
  if(!value.trim()){
    toast.success("Please fill it out!",{
      duration: 1000,
      position: 'top-center',
      icon: '🤖',
    })};
  };
  return (
    <header >
    <Toaster/>
    <form onSubmit={handleSubmit} className={s.searchHeader}>
    <input className={s.searchInput} value={value} onChange={(evt) => setValue(evt.target.value)} name="topic" type="text" autoComplete="off" autoFocus placeholder="Search images and photos" />
    <button className={s.searchBtn} type="submit">Search</button>
    </form>
  </header>
  )
}

export default SearchBar;
