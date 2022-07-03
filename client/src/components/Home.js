import React, { useState } from 'react'

function Home({ user }) {
  return (
    <div className="home-page" >
        <h2 className="profile-info">Welcome back, {user.username} <img className="profile-img" src={user.profile_img}></img></h2>
        <p>This is the home page</p>
    </div>
  )
}

export default Home