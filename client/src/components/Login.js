import react, { useState } from 'react'
import Auth from './Auth'

function Login({ onLogin }) {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then(r => {
                if(r.ok){
                    r.json().then(onLogin)
                } else {
                    r.json().then( e => setErrors(Object.entries(e.error).flat()))
                }
            })
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
        <div className="errors-msg">{errors}</div>
        <Auth setCurrentUser={onLogin} />
    </div>
    </>
  )
}

export default Login