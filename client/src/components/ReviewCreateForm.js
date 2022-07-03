import React, { useState } from 'react'

function ReviewCreateForm({ user, hideForm, reRender, review }) {

    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [movie, setMovie] = useState('');

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
            .then((r) => r.json())
            .then(
                setRating(0),
                setDescription(''),
            )
            .then(hideForm)
            .then(reRender)
    }

  return ( 
    <div className="form-container">
        <form className="form1" onSubmit={handleSubmit}>
            <label>
                Rating
            <input
            type="number"
            placeholder="rating..."
            value={rating}
            onChange={(e) => setRating(e.target.value)} />
            </label>
            <label>
                Description
                <input 
                type="text"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Movie
                <select onChange={(e) => setMovie(e.target.value)}>
                    <option value="1">Joker</option>
                    <option value="2">Parasite</option>
                    <option value="3">Once Upon A Time In Hollywood</option>
                    <option value="4">Black Panther</option>
                    <option value="5">Roma</option>
                    <option value="6">Get Out</option>
                    <option value="7">The Shape of Water</option>
                    <option value="8">Mad Max: Fury Road</option>
                    <option value="9">The Revenant</option>
                    <option value="10">The Social Network</option>
                    <option value="11">Avatar</option>
                    <option value="12">Slumdog Millionaire</option>
                    <option value="13">The Hurt Locker</option>
                    <option value="14">Iron Man</option>
                    <option value="15">Borat</option>
                    <option value="16">There Will Be Blood</option>
                    <option value="17">No Country for Old Men</option>
                    <option value="18">The Departed</option>
                    <option value="19">Casino Royale</option>
                    <option value="20">Million Dollar Baby</option>
                </select>
            </label>
            <button className="form-button1" type="submit">Save</button>
        </form>
    </div>
  )
}

export default ReviewCreateForm