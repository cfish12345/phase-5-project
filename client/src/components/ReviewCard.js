import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'

function ReviewCard({ review, user, reviews, reRender }) {

    const {id, rating, description, movie_id} = review;
    const[toggleEdit, setToggleEdit] = useState(true);
    

    function deleteReview (e) {
      e.preventDefault();
        fetch(`/reviews/${id}`, {
        method: "DELETE",
      }).then(reRender)

    }

  return (
    <div className="review-container" >
    <h2>{review.movie.title}</h2>
    <h3 className="rating">Rating: {review.rating}/10</h3>
    <img className="movie-img"src={review.movie.image_url}></img>
    <div>
    <h5 className="description">Review: {review.description}</h5>
    <h5 className="username">{user.username}</h5>
    <button className="del-btn" onClick={e => deleteReview(e)}>🗑️</button>
    </div>
    </div>
  )
}

export default ReviewCard