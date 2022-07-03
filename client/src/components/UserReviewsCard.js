import React, { useState } from 'react'

function UserReviewsCard({ review }) {

  console.log(review)
  return (
    <div className="review-container">
      <h1>{review.movie.title}</h1>
      <h2>Rating: {review.rating}/10</h2>
      <img className="review-img" src={review.movie.image_url}></img>
      <h5>{review.movie.director}</h5>
      <h5>{review.description}</h5>
    </div>
  )
}

export default UserReviewsCard