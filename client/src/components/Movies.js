import React, { useState, useEffect  } from 'react'
import MovieCard from "./MovieCard"
import MovieCreateForm from "./MovieCreateForm"

function Movies({ user }) {

    const [movies, setMovies] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(true);
    const [render, setRender] = useState(true);


    useEffect(() => {
        fetch(`/movies`).then((r) => {
            if (r.ok) {
                r.json().then((data) => setMovies(data));
            }
        });
    }, [user.id, render]);

    

    let movieArr = movies.map(movie => <MovieCard key={movie.id} movie={movie} reRender={reRender}/>)

    function hideForm() {
        setToggleCreate(!toggleCreate)
    }

    function reRender() {
        setRender(!render)
    }
  return (
    <>
    <h2 className="profile-info">{user.username} <img className="profile-img" src={user.profile_img}></img></h2>
    {/* <img className="profile-pic"src={user.profile_img}></img> */}
    <button className="btn2" onClick={e => setToggleCreate(!toggleCreate)}>New Movie</button>
    {toggleCreate ? null : <MovieCreateForm user={user} hideForm={hideForm} reRender={reRender} />}
    <h1>Movies:</h1>
    <div>
        {movieArr}
    </div>
    </>
  )
}

export default Movies