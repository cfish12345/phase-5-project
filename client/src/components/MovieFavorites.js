import React, { useState } from 'react'
import { Link } from "react-router-dom"

function MovieFavorites({ favorites }) {

    console.log('favorites', favorites)
  return (
    <div>
        <Link className="link" to="/Movies">Back to Movies</Link>
      {favorites.map((favorite, index) => (
        <div className="review-container">
            <h1>{favorite.title}</h1>
            <img className="movie-img" src={favorite.image_url}></img>
            <h5>Actors: {favorite.actors}</h5>
            <h5>Director: {favorite.director}</h5>
            <h5>Genre: {favorite.genre}</h5> 
        </div>
      ))}
    </div>
    
  )
}

export default MovieFavorites