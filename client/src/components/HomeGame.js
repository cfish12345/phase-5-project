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
        {/* <button className="form-button1" type="submit">Guess</button> */}
        <div>
            {guess === movies[randomMovie].title.toLowerCase() 
            ? <div>🥳 Correct! 🥳</div>
            : <div>👀 Title and Date 👀</div>
        }
        </div>
    </>
  )
}

export default HomeGame