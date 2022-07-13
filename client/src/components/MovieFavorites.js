import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import RemoveFavorites from './RemoveFavorites';

function MovieFavorites({ favorites, setFavorites, removeFavorite }) {

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('my-movie-favorites'));
    setFavorites(movieFavorites)
  }, []);

  
  return (
    <>
      <div>
      <Link className="link2" to="/Movies">Back to Movies</Link>
      </div>
      {favorites.map((favorite, index) => (
        <div className="review-container" key={favorite.id}>
          <div 
          className='overlay d-flex align-items-center justify-content-center'
          onClick={() => removeFavorite(favorite, index)}
          >
          <RemoveFavorites />
          </div>
            <h1>{favorite.title}</h1>
            <img className="movie-img" src={favorite.image_url}></img>
            <h5>Actors: {favorite.actors}</h5>
            <h5>Director: {favorite.director}</h5>
            <h5>Genre: {favorite.genre}</h5> 
        </div>
      ))}
    </>
    
  )
}

export default MovieFavorites