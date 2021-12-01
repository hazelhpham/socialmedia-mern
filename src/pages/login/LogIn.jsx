import React from "react";
import "./login.css";
const LogIn = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Viee Social </h3>
          <span className="loginDesc">
            Stay connected with people from all around the world!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton"> Log In</button>
            <div className="loginForgotpw">Forgot Password?</div>
            <span>
              {" "}
              <button className="loginRegisterButton">
                {" "}
                Create a New Account{" "}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
