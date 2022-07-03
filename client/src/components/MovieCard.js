import React, { useState } from 'react'

function MovieCard({ movie }) {
  return (
    <div className="review-container">
    <h1>{movie.title}</h1>
    <img className="movie-img" src={movie.image_url}></img>
    <h5>{movie.actors}</h5>
    <h5>{movie.director}</h5>
    <h5>{movie.genre}</h5>
    </div>
  )
}

export default MovieCard