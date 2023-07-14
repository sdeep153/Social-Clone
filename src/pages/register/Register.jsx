import React from 'react'
import "./register.css"

function Register() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">

        <div className="loginLeft">
            <h3 className="loginLogo">Facebook</h3>
            <span className="loginDesc">Connect  with people all around the world!</span>
        </div>

        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Login to account</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Register
