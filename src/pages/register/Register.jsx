import React from "react";
import "./register.css";
const Register = () => {
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
            <input type="text" placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />

            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              {" "}
              Create a New Account{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
