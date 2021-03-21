import { useEffect, useState } from 'react';
import getList from '../../utils/Apis';
import { 
  movieContainer, 
  movieStyle, 
  movieRating, 
  movieTitle, 
  detailButton 
} from './MovieList.module.scss';

export default function MovieLists () {
  // console.log(useState());
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    const getFetch = async () => {
      const movie = await getList();
      setMovieList(movie)
      // console.log(movie)
    }
    getFetch()
  },[]);
  
  return ( 
    <ul className={movieContainer}>
      {movieList.map(({id, title, rating, url, medium_cover_image}) => 
        <li key={id} className={movieStyle}>
          <img src={medium_cover_image} alt="" />
          <p className={movieRating}>🏆 Rating <span>{rating}</span></p>
          <p className={movieTitle}>{title}</p>
          <button type="button" className={detailButton}>
            <a href={url} target="_blank" rel="noopener noreferrer">Movie Details</a>
          </button>
        </li>
      )}
    </ul>
  );
}
