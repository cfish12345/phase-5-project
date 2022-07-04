import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'

function ReviewCard({ review, user }) {

    const {id, rating, description, movie_id} = review;
    const[toggleEdit, setToggleEdit] = useState(true);
    const[render, setRender] = useState(true);

    function reRender() {
      setRender(!render)
  }

    function deleteReview () {
      fetch(`/reviews/${id}`, {
        method: "DELETE"
      }).then(reRender)
    }

  return (
    <div className="review-container" >
    <h1>{review.movie.title}</h1>
    <h2>Rating: {review.rating}/10</h2>
    <img className="review-img"src={review.movie.image_url}></img>
    <h5>{review.movie.director}</h5>
    <h5>{review.description}</h5>
    <h5 className="username">{user.username}</h5>
    <button className="del-btn" onClick={e => deleteReview(e)}>🗑️</button>
    </div>
  )
}

export default ReviewCard