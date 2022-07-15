import React, { useState, useEffect } from 'react'
import ReviewCreateForm from './ReviewCreateForm'
import ReviewCard from './ReviewCard'

function Reviews({ user, id }) {

    const [reviews, setReviews] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(true);
    const [render, setRender] = useState(true);


    useEffect(() => {
        fetch(`/users/${user.id}/reviews`).then((r) => {
            if (r.ok) {
                r.json().then((data) => setReviews(data));
            }
        });
    }, [user.id, render]);

    let reviewArr =  reviews.map(review => <ReviewCard key={review.id} review={review} reviews={reviews} reRender={reRender} user={user}/>)

    function hideForm() {
        setToggleCreate(!toggleCreate)
    }

    function reRender() {
        setRender(!render)
    }

  return (
    <>
    <h2 className="profile-info">{user.username}<img className="profile-img" src={user.profile_img}></img></h2>
    <button className="btn3" onClick={e => setToggleCreate(!toggleCreate)}>New Review</button>
    {toggleCreate ? null : <ReviewCreateForm user={user} hideForm={hideForm} reRender={reRender} review={reviewArr}/>}
    <h1 className="title2">⭐ Reviews ⭐</h1>
    <div>
    {reviewArr}
    </div>
    </>
  )
}

export default Reviews