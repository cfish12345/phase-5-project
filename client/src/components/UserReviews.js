import React, { useState, useEffect  } from 'react'
import UserReviewsCard from './UserReviewsCard'
import SearchBox from "./SearchBox"

function UserReviews({ user }) {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`/movies`)
    .then((r) => r.json())
    .then(data => setMovies(data))
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search))


  return (
    <>
       <h2 className="profile-info">{user.username} <img className="profile-img" src={user.profile_img}></img></h2>
       <h1 className="title2">⭐ All Reviews ⭐</h1>
       <SearchBox handleSearch={handleSearch} search={search}/>
       <UserReviewsCard movies={filteredMovies} user={user}/>
    </>
  )
}



export default UserReviews