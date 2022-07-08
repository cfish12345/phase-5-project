import React, { useState, useEffect  } from 'react'
import MovieCard from "./MovieCard"
import MovieCreateForm from "./MovieCreateForm"
import MovieCardFavorites from './MovieCardFavorites';
import SearchBox2 from "./SearchBox2"
import { Link } from "react-router-dom"

function Movies({ user, favorite, addFavoriteMovie  }) {

    const [movies, setMovies] = useState([]);
    const [toggleCreate, setToggleCreate] = useState(true);
    const [render, setRender] = useState(true);
    const [search, setSearch] = useState('');
    // const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        fetch(`/movies`).then((r) => {
            if (r.ok) {
                r.json().then((data) => setMovies(data));
            }
        });
    }, [user.id, render]);

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    function hideForm() {
        setToggleCreate(!toggleCreate)
    }

    function reRender() {
        setRender(!render)
    }

    // const addFavoriteMovie = (movie) => {
    //     const newFavoriteList = [...favorites, movie];
    //     setFavorites(newFavoriteList);
    // }

    const filteredMovies = movies.filter((movie) => movie.genre.toLowerCase().includes(search))

  return (
    <>
    <h2 className="profile-info">{user.username} <img className="profile-img" src={user.profile_img}></img></h2>
    {/* <img className="profile-pic"src={user.profile_img}></img> */}
    <button className="btn2" onClick={e => setToggleCreate(!toggleCreate)}>New Movie</button>
    {toggleCreate ? null : <MovieCreateForm user={user} hideForm={hideForm} reRender={reRender} />}
    <h1>Movies:</h1>
    <SearchBox2 search={search} handleSearch={handleSearch}/>
    <Link className="link" to="/MovieFavorites">Favorites</Link>
    <MovieCard user={user} filteredMovies={filteredMovies} Favorites={MovieCardFavorites} handleFavoriteClick={addFavoriteMovie}/>
    </>
  )
}

export default Movies