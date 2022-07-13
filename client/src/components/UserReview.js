import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserReview ({ movie, user }) {

  if (movie.reviews.length > 0) {
    return (
      <div className="review-container">
          <h2>{movie.title}</h2>
          <img className='review-img' src={movie.image_url}></img>
          <div>
      </div>
      <div>
        {movie.reviews.map((review, index) => (
            <div key={index}>
              <h3 className="rating">{review.rating}/10</h3>
              <h5 className="description">{review.description}</h5>
            </div>
          ))}
      </div>
          <Link to="/Reviews">
            <button>New Review</button>
          </Link>
      </div>
    )
  }
}

export default UserReview