import React, { useState } from 'react'
import Movie from "./Movie"

function MovieCard({ user, Favorites, filteredMovies, handleFavoriteClick }) {

  // const FavoriteComponent = Favorites

  return (
    <div>
      {filteredMovies.map(movie => <Movie movie={movie} user={user} key={movie.id} Favorites={Favorites} hFC={handleFavoriteClick}/>)}
    </div>
  )
}

export default MovieCard