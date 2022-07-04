import React, { useState, useEffect  } from 'react'
import UserReviewsCard from './UserReviewsCard'

function UserReviews({ user }) {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/reviews`)
    .then((r) => r.json())
    .then(data => setReviews(data))
  }, [])


  const reviewArr = reviews.map(review => <UserReviewsCard review={review} user={user}/>)


  return (
    <>
       <h2 className="profile-info">{user.username} <img className="profile-img" src={user.profile_img}></img></h2>
       <div>{reviewArr}</div>
    </>
  )
}



export default UserReviews