import React, { useState } from 'react'

function SearchBox({ movies, inputText, handleSearch  }) {

    // const filteredMovies = movies.filter((movie) => {
    //     if (movie.title === '') {

    //     }
    // })

  return (
    <div className="col col-sm-4">
        <label htmlFor="search" className="form1">Search By Movie:</label>
        <input
        className="form1-input"
        value={inputText}
        onChange={(e) => handleSearch(e)}
        placeholder="Type to search..."
        ></input>
    </div>
  )
}

export default SearchBox