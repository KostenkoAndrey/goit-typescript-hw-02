import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ changePage }) => {

  return (
    <button onClick={changePage} type='button' className={s.loadMoreBtn}>Load more</button>
  )
}

export default LoadMoreBtn;
