import react, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from "./Login"
import Movies from "./Movies"
import Logout from "./Logout"
import Reviews from "./Reviews"
import UserReviews from "./UserReviews"
import Home from "./Home"
import MovieFavorites from "./MovieFavorites"
import useLocalStorage from "react-use-localstorage";


function App() {

  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
      }
    });
  }, []);

  

  if(!user) return <Login onLogin={setUser}/>

  function onLogout () {
    setUser(null)
  }

  const saveToLocalStorage = (items) => {
    localStorage.setItem('my-movie-favorites', JSON.stringify(items));
  };
  
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  
  return (
    <div>
      <div>
      <h1 className="title">BlockBuster</h1>
      { user ?
      <nav className="nav">
        <Link className="link" to="Home">Home</Link>
        <Link className="link" to="/Movies">Movies</Link>
        <Link className="link" to="/Reviews">My Reviews</Link>
        <Link className="link" to="/Actors">All Reviews</Link>
        {/* <Link className="link" to="/MovieFavorites">Favorites</Link> */}
        <Logout onLogout={onLogout} user={user}/>
      </nav> : null}
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={ user ? (<Navigate replace to="/Home" />) : (<Login onLogin={setUser} />) } />
          <Route path="Movies" element={ user ? <Movies user={user} addFavoriteMovie={addFavoriteMovie}/> : <Navigate replace to="/" />}/>
          <Route path="Reviews" element={ user ? <Reviews user={user} /> : <Navigate replace to="/" />}/>
          <Route path="Actors" element={ user ? <UserReviews user={user} /> : <Navigate replace to="/" />}/>
          <Route path="Home" element={ user ? <Home user={user} /> : <Navigate replace to="/" />}/>
          <Route path="MovieFavorites" element={ user ? <MovieFavorites user={user} favorites={favorites} setFavorites={setFavorites}/> : <Navigate replace to="/" />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
