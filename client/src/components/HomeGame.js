import React, { useState } from 'react'

function HomeGame({ user, movies }) {

    const [randomMovie, setRandomMovie] = useState(0);
    const [guess, setGuess] = useState('');

    const randomMovies = e => {
        const len = movies.length;
        setRandomMovie(Math.floor(Math.random() * len));
      };

    const handleSearch = (e) => {
        e.preventDefault();
        setGuess(e.target.value.toLowerCase())
    }

    var str = movies[randomMovie].title
    str = str.slice(0, -6)

  return (
    <>
        <button onClick={randomMovies}>New Random Movie</button>
        <div>
        <img src={movies[randomMovie].image_url}></img>
        </div>
        <input 
        className="form1-input"
        type="text"
        placeholder="Guess the title..."
        onChange={handleSearch}
        />
        <div>
            {guess === str.toLowerCase() 
            ? <div className="t2">🥳 Correct! 🥳</div>
            : <div className="t1">👀 example: "joker" 👀</div>
        }
        </div>
    </>
  )
}

export default HomeGame