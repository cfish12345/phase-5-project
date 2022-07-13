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
      <h1 className="title2">
        My Movie Favorites
      </h1>
      {favorites.map((favorite, index) => (
        <div className="review-container" key={favorite.id}>
          <div 
          className='overlay d-flex align-items-center justify-content-center'
          onClick={() => removeFavorite(favorite, index)}
          >
          <RemoveFavorites />
          </div>
            <h2>❤️{favorite.title}</h2>
            <img className="movie-img" src={favorite.image_url}></img>
            <div className="description">
            <h5>Actors: {favorite.actors}</h5>
            <h5>Director: {favorite.director}</h5>
            <h5>Genre: {favorite.genre}</h5>
            </div> 
        </div>
      ))}
    </>
    
  )
}

export default MovieFavorites