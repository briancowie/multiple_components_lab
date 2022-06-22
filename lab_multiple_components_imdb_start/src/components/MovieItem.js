import React from 'react';
import './MovieItem.css';

const MovieItem = ({movie}) => {

  return (
    <>
    <li className='movie-item'>
      <a href={movie.url}>
     <h4>{movie.name}</h4></a>
    </li>
    </>
  );
}

export default MovieItem;
