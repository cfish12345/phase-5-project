import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ReviewCard({ review, user }) {

    const {id, rating, description, movie_id} = review;
    const[toggleEdit, setToggleEdit] = useState(true);

  return (
    <div className="review-container" >
    <h1>{review.movie.title}</h1>
    <h2>Rating: {review.rating}/10</h2>
    <img className="review-img"src={review.movie.image_url}></img>
    <h5>{review.movie.director}</h5>
    <h5>{review.description}</h5>
    </div>
  )
}

export default ReviewCard