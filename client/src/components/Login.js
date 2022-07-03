import react, { useState } from 'react'
import Auth from './Auth'

function Login({ onLogin }) {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then((user) => onLogin(user))
    }

  return (
    <>
    <div className="form-container">Login
        <form className="form1" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)} 
            />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className="form-btn" type="submit">Login</button>
        </form>
    </div>
    <div className="form-container">
        <Auth setCurrentUser={onLogin} />
    </div>
    </>
  )
}

export default Login