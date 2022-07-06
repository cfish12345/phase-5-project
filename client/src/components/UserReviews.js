import React, { useState, useEffect  } from 'react'
import UserReviewsCard from './UserReviewsCard'
import SearchBox from "./SearchBox"

function UserReviews({ user }) {

  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`/reviews`)
    .then((r) => r.json())
    .then(data => setReviews(data))
  }, [])


  // const reviewArr = reviews.map(review => <UserReviewsCard review={review} user={user}/>)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredReviews = reviews.filter(review => review.movie.title.toLowerCase().includes(search))


  return (
    <>
       <h2 className="profile-info">{user.username} <img className="profile-img" src={user.profile_img}></img></h2>
       <SearchBox handleSearch={handleSearch} search={search}/>
       <UserReviewsCard reviews={filteredReviews} user={user}/>
    </>
  )
}



export default UserReviews