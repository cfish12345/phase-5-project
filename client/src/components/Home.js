import React, { useEffect, useState } from 'react'
import HomeGame from "./HomeGame"

function Home({ user }) {

  const [movies, setMovies] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch(`/movies`).then((r) => {
        if (r.ok) {
            r.json().then((data) => setMovies(data));
        }
    });
  }, [user.id]);

  return (
    <div className="home-page" >
        <h2 className="profile-info">Welcome back, {user.username} <img className="profile-img" src={user.profile_img}></img></h2>
        <p className="welcome">This is the home page</p>
        <button className="btn2" onClick={(e) => setToggle(!toggle)}>Guess That Movie!</button>
        {toggle ? null : <HomeGame user={user} movies={movies}/>}
    </div>
  )
}

export default Home