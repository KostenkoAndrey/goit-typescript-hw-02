import React, { FC } from "react";
import s from './LoadMoreBtn.module.css'

interface PropsType {
changePage: ()=> void;
} 

const LoadMoreBtn: FC<PropsType> = ({ changePage }) => {
  return (
  <button onClick={changePage} type='button' className={s.loadMoreBtn}>Load more</button>
  )
}

export default LoadMoreBtn;
