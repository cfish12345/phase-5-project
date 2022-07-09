import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserReview ({ movie, user }) {


  return (
    <div className="review-container">
        <h1>{movie.title}</h1>
        <img className='movie-img' src={movie.image_url}></img>
        <div>
    </div>
    <div>
      {movie.reviews.map((review, index) => (
          <div key={index}>
            <h2>{review.rating}/10</h2>
            <h5>{review.description}</h5>
          </div>
        ))}
    </div>
        <Link to="/Reviews">
          <button>New Review</button>
        </Link>
    </div>
  )
}

export default UserReview