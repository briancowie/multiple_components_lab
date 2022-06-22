import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

const MovieList = ({movies}) => {

  const movieComponents = movies.map((movie) => {
    return <MovieItem movie={movie} key={movie.id}></MovieItem>
  })
  
  return (
    <div className='movie-list'>
      <ul>
        {movieComponents}
      </ul>
    </div>
  );

}

export default MovieList;
