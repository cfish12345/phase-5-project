import React, { useState, useEffect } from 'react'

function ReviewCreateForm({ user, hideForm, reRender }) {

    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [movie, setMovie] = useState('');
    const [errors, setErrors] = useState([]);
    const [movies, setMovies] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const review = {
            rating: rating,
            description: description,
            user_id: user.id,
            movie_id: parseInt(movie)
        }

        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then(r => {
                if(r.ok){
                    r.json().then(
                        setRating(0),
                        setDescription(''),
                    )
                    .then(hideForm)
                    .then(reRender)
                } else {
                    r.json().then( e => setErrors(e.error))
                }
            })
    }

    useEffect(() => {
        fetch(`/movies`)
        .then(r => r.json())
        .then(data => setMovies(data))
    }, [])

  return ( 
    <div className="form-container">
        {errors === 'Unprocessable Entity' ? <div>Rating must be 1-10</div> : null}
        {/* <div className="errors-msg">{errors}</div> */}
        <form className="form1" onSubmit={handleSubmit}>
            <label>
                Description:
                <textarea
                className="form2-input" 
                type="text"
                placeholder="review..."
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Rating(1-10):
            <input
            className="form1-input"
            type="number"
            placeholder="rating..."
            value={rating}
            onChange={(e) => setRating(e.target.value)} />
            </label>
            <label>
                Movie:
                <select className="form1-input" onChange={(e) => setMovie(e.target.value)}>
                    <option></option>
                    {movies.map((data) => <option key={data.id} value={data.id}>{data.title}</option>)}
                </select>
            </label>
            <button className="form-button1" type="submit">Save</button>
        </form>
    </div>
  )
}

export default ReviewCreateForm