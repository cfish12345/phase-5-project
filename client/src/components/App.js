import react, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from "./Login"
import Movies from "./Movies"
import Logout from "./Logout"
import Reviews from "./Reviews"
import UserReviews from "./UserReviews"
import Home from "./Home"

function App() {

  const [user, setUser] = useState(null);

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
  
  return (
    <div>
      <div>
      <h1 className="title">BlockBuster</h1>
      { user ?
      <nav className="nav">
        <Link className="link" to="Home">Home</Link>
        <Link className="link" to="/Reviews">My Reviews</Link>
        <Link className="link" to="/Movies">Movies</Link>
        <Link className="link" to="/Actors">All Reviews</Link>
        <Logout onLogout={onLogout} user={user}/>
      </nav> : null}
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={ user ? (<Navigate replace to="/Home" />) : (<Login onLogin={setUser} />) } />
          <Route path="Movies" element={ user ? <Movies user={user} /> : <Navigate replace to="/" />}/>
          <Route path="Reviews" element={ user ? <Reviews user={user} /> : <Navigate replace to="/" />}/>
          <Route path="Actors" element={ user ? <UserReviews user={user} /> : <Navigate replace to="/" />}/>
          <Route path="Home" element={ user ? <Home user={user} /> : <Navigate replace to="/" />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
