import React, { useState } from 'react'
import Movie from "./Movie"

function MovieCard({ user, Favorites, filteredMovies }) {

  return (
    <div>
      {filteredMovies.map(movie => <Movie movie={movie} user={user} key={movie.id} Favorites={Favorites}/>)}
    </div>
  )
}

export default MovieCard