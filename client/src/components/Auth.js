import React, { useState } from 'react'

function Auth({ setCurrentUser }) {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profile_img, setProfile_img] = useState('');
    const [showCreate, setShowCreate] = useState(false);
    const [errors, setErrors] = useState([]);

    function newUserForm() {
        setShowCreate(!showCreate)
    }

    function onSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password,
            name,
            profile_img
        }
        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setCurrentUser)
            } else {
                r.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

  return (
    <>
     {showCreate ? (
        <form className="form1" onSubmit={onSubmit}>
            <label>
                Username
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
            </label>
            <label>
                Password
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Profile Picture
                <input type="text" value={profile_img} onChange={(e) => setProfile_img(e.target.value)}/>
            </label>
            <button className="form-btn1" type="submit">Create Account</button>
        </form>
        ) : null}
        <div className="form-container">
            {!showCreate ? <button className="btn-2" onClick={newUserForm}>Create Account</button> : null }
        </div>
    </>
  )
}

export default Auth