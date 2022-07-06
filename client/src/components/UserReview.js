import React from 'react'

function UserReview ({ review, user }) {
  return (
    <div className="review-container">
        <h1>{review.movie.title}</h1>
        <h2>Rating: {review.rating}/10</h2>
        <img className="review-img"src={review.movie.image_url}></img>
        <div>
        <h5>Director: {review.movie.director}</h5>
        <h5>Review: {review.description}</h5>
    </div>

    </div>
  )
}

export default UserReview