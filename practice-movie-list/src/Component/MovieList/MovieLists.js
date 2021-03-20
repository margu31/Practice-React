import { useEffect, useState } from 'react';
import getList from '../../utils/Apis';

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
    <ul>
      {/* {movieList.map((movie) => <li key={movie.id}>{movie.title}</li>)} */}
      {movieList.map(({id, title, rating, url, medium_cover_image}) => 
        <li key={id}>
          <img src={medium_cover_image} alt="" />
          <span>평점: {rating}</span><p>{title}</p>
          <button type="button"><a href={url}>Movie Details</a></button>
        </li>
      )}
    </ul>
  );
}
