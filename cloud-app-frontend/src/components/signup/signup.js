import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { baseUrl } from "../../links";
import { Link, useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState({
    value: "",
    borderColor: "",
    boxShadow: "",
  });

  const [password, setPassword] = useState({
    value: "",
    borderColor: "",
    boxShadow: "",
  });

  const [reenterPassword, setReenterPassword] = useState({
    value: "",
    borderColor: "",
    boxShadow: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [reenterPasswordError, setReenterPasswordError] = useState("");

  const handleLogin = async () => {
    if (password.value.length <= 7 && password.value.length !== 0) {
      setPasswordError("Password should be at least 8 characters long.");
      return;
    } else {
      setPasswordError("");
    }
    if (password.value !== reenterPassword.value) {
      setReenterPasswordError("Passwords do not match.");
      return;
    } else {
      setReenterPasswordError("");
    }
    if (email.value === "") {
      setEmail((prev) => ({
        ...prev,
        borderColor: "red",
        boxShadow: "0 0 10px red",
      }));
    }
    if (password.value === "") {
      setPassword((prev) => ({
        ...prev,
        borderColor: "red",
        boxShadow: "0 0 10px red",
      }));
    }
    if (reenterPassword.value === "") {
      setReenterPassword((prev) => ({
        ...prev,
        borderColor: "red",
        boxShadow: "0 0 10px red",
      }));
    } else {
      console.log(password.value);
      try {
        console.log("ehheh");
        const details = {
          email: email.value,
          password: password.value,
        };
        const response = await axios.post(`${baseUrl}/createuser`, details);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleChange = (event, setState) => {
    const value = event.target.value;
    setState((prev) => ({
      ...prev,
      value: value,
    }));
  };

  return (
    <div className="auth-forms d-flex signin-container justify-content-center align-items-center mt-5 p-5">
      <div className="rounded inner-signup shadow d-flex flex-column justify-content-center align-items-center px-5 py-4">
        <h5>Sign Up</h5>
        <p>to get your own cloud storage.</p>
        <div>
          <label className="form-label m-0 label-styling py-2" htmlFor="email">
            Email
          </label>
          <input
            style={{
              borderColor: email.borderColor,
              boxShadow: email.boxShadow,
            }}
            type="text"
            className="form-control upload-button-style custom-file-input"
            id="email"
            value={email.value}
            onChange={(event) => handleChange(event, setEmail)}
          />
        </div>
        <div>
          <label
            className="form-label m-0 label-styling py-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            style={{
              borderColor: password.borderColor,
              boxShadow: password.boxShadow,
            }}
            type="password"
            className="form-control upload-button-style custom-file-input "
            id="password"
            value={password.value}
            onChange={(event) => handleChange(event, setPassword)}
          />
          {passwordError && (
            <small style={{ color: "red" }}>{passwordError}</small>
          )}
        </div>
        <div>
          <label
            className="form-label m-0 label-styling py-2"
            htmlFor="password"
          >
            Re-enter password
          </label>
          <input
            style={{
              borderColor: reenterPassword.borderColor,
              boxShadow: reenterPassword.boxShadow,
            }}
            type="password"
            className="form-control upload-button-style custom-file-input"
            id="reenterPassword"
            value={reenterPassword.value}
            onChange={(event) => handleChange(event, setReenterPassword)}
          />
          {reenterPasswordError && (
            <small style={{ color: "red" }}>{reenterPasswordError}</small>
          )}
        </div>
        <button
          className="btn btn-dark  text-light mt-3 mb-2"
          onClick={() => handleLogin()}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Signup;
