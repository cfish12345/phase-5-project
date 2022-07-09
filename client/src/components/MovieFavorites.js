import React, { useState } from 'react'
import { Link } from "react-router-dom"

function MovieFavorites({ favorites }) {

    
  return (
    <>
      <div>
      <Link className="link2" to="/Movies">Back to Movies</Link>
      </div>
      {favorites.map((favorite, index) => (
        <div className="review-container">
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