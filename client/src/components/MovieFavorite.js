import React, { useState, useEffect } from 'react'
import RemoveFavorites from './RemoveFavorites';

function MovieFavorite({ favorite, setFavorites, removeFavoriteMovie, handleDelete, movie}) {

    

  return (
    <div>
        <div className="review-container">
          <div 
          className='overlay d-flex align-items-center justify-content-center'
          onClick={removeFavoriteMovie(movie)}
          name={favorite.name}
          key={favorite.id}
          >
          <RemoveFavorites />
          </div>
            <h1>{favorite.title}</h1>
            <img className="movie-img" src={favorite.image_url}></img>
            <h5>Actors: {favorite.actors}</h5>
            <h5>Director: {favorite.director}</h5>
            <h5>Genre: {favorite.genre}</h5> 
        </div>
    </div>
  )
}

export default MovieFavorite