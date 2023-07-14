import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">

        <div className="loginLeft">
            <h3 className="loginLogo">Facebook</h3>
            <span className="loginDesc">Connect  with people all around the world!</span>
        </div>

        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgotPassword">Forgot Password?</span>
                <button className="loginRegisterButton">Create a new account</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Login
