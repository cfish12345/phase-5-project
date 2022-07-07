import React, { useState } from 'react'

function SearchBox({ movies, search, handleSearch  }) {

  return (
    <div className="col col-sm-4">
        <label htmlFor="search" className="form1">Search By Genre:</label>
        <input
        className="form1-input"
        value={search}
        onChange={(e) => handleSearch(e)}
        placeholder="Type to search..."
        ></input>
    </div>
  )
}

export default SearchBox