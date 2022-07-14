import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserReview ({ movie, user }) {

  // const [userId, setUserId] = useState('');

  // const handleClick = (e) => {
  //   const username = movie.reviews.map(review => review.user_id)
  //   username.map(user => user)
  //   fetch(`/users`).then((r) => {
  //       if (r.ok) {
  //         r.json().then((data) => console.log(data[username - 1]))
  //       }
  //     })
  // }


  if (movie.reviews.length > 0) {
    return (
      <div className="review-container">
          <h2>{movie.title}</h2>
          <img className='review-img' src={movie.image_url}></img>
          {/* <button onClick={handleClick}>Display User</button> */}
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