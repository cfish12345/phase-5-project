import React, { useState } from 'react'

function UserReview ({ movie, user }) {

  return (
    <div className="review-container">
        <h1>{movie.title}</h1>
        <img className="review-img"src={movie.image_url}></img>
        <div>
        {movie.reviews.map((review, index) => (
          <div key={index}>
            <h2>Rating: {review.rating}/10</h2>
            <h5>Review: {review.description}</h5>
          </div>
        ))}
    </div>

    </div>
  )
}

export default UserReview