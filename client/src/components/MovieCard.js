import React, { useState } from 'react'

function MovieCard({ movie }) {
  return (
    <div className="review-container">
    <h1>{movie.title}</h1>
    <img className="movie-img" src={movie.image_url}></img>
    <div>
    <h5>Actors: {movie.actors}</h5>
    <h5>Director: {movie.director}</h5>
    <h5>Genre: {movie.genre}</h5>
    </div>
    </div>
  )
}

export default MovieCard