import React, { useState } from 'react'
import UserReview from "./UserReview"

function UserReviewsCard({ movies, user }) {

  return (
    <div>
      {movies.map(movie => <UserReview movie={movie} key={movie.id} user={user}/>)}
    </div>
  )
}

export default UserReviewsCard