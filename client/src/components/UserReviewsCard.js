import React, { useState } from 'react'
import UserReview from "./UserReview"

function UserReviewsCard({ reviews, user }) {

  return (
    <div>
      {reviews.map(review => <UserReview review={review} key={review.id} user={user}/>)}
    </div>
  )
}

export default UserReviewsCard