import React, { useState } from 'react'


function Movie({ movie, user, Favorites, hFC}) {

  

  return (
    <div className="review-container">
    <h1>{movie.title}</h1>
    <img className="movie-img" src={movie.image_url}></img>
    <div 
      className='overlay d-flex align-items-center justify-content-center'
      onClick={() => hFC(movie)}
    >
	<Favorites />
	</div>
    <div>
    <h5>Actors: {movie.actors}</h5>
    <h5>Director: {movie.director}</h5>
    <h5>Genre: {movie.genre}</h5>
    </div>
    </div>
  )
}

export default Movie