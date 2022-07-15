import React, { useState } from 'react'

function MovieCreateForm({ user, hideForm, reRender }) {
  
  const [title, setTitle] = useState('');
  const [actors, setActors] = useState('');
  const [genre, setGenre] = useState('');
  const [image_url, setImage_url] = useState('');
  const [director, setDirector] = useState('');
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const movies = {
      title: title,
      actors: actors,
      genre: genre,
      image_url: image_url,
      director: director
    }

    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movies),
    })
      .then(r => {
        if(r.ok){
          r.json().then(
          setTitle(''),
          setActors(''),
          setGenre(''),
          setImage_url(''),
          setDirector(''),
          )
          .then(hideForm)
          .then(reRender)
        } else {
          r.json().then( e => setErrors((e.error)))
        }
      })
  }

//   const handleErrors = () => {
//     if (errors.length <= 2) {
//         return <div className="errors-msg">{errors[1]}</div>
//     } else {
//         return <div>Profile Not Found</div>
//     }
// }

  

  return (
    <div className="form-container">
      {errors === "Unprocessable Entity" ? <div className="errors-msg">Missing Entries</div> : null}
      <form className="form2" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
          className="form1-input" 
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Actors:
          <input
          className="form1-input" 
          type="text"
          placeholder="actors"
          value={actors}
          onChange={(e) => setActors(e.target.value)} />
        </label>
        <label>
          Genre:
          <input
          className="form1-input" 
          type="text"
          placeholder="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)} />
        </label>
        <label>
          Image_url:
          <input
          className="form1-input" 
          type="text"
          placeholder="image_url"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)} />
        </label>
        <label>
          Director:
          <input
          className="form1-input" 
          type="text"
          placeholder="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)} />
        </label>
        <button className="form-button1" type="submit">Save</button>
      </form>
    </div>
  )
}

export default MovieCreateForm