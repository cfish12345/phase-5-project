import React, { useState } from 'react'

function Logout({ onLogout, user }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

  return (
    <div>
    {user ? <button className="btn1" onClick={handleLogout}>Logout</button> : null}
    </div>
  )
}

export default Logout