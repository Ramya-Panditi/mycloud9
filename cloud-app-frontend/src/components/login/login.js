import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../links";
function Login() {
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

  const [passwordError, setPasswordError] = useState("");
  const [passwordres, setPasswordres] = useState("");

  const handleLogin = async () => {
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
    } else {
      try {
        console.log("ehheh");
        const details = {
          email: email.value,
          password: password.value,
        };
        const response = await axios.post(`${baseUrl}/login`, details);
        console.log(response);
        const uid = response.data.data[0].user_id;
        if (response.data.message === "Email already exists") {
          setPasswordres("Email already exists");
        }

        localStorage.setItem("id", uid);
        console.log(uid);
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
      <div className="rounded inner-signup shadow d-flex flex-column justify-content-center align-items-center  py-4">
        <h5>Login</h5>
        <p>to continue using cloud.</p>
        {passwordres && <small style={{ color: "red" }}>{passwordres}</small>}
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
            className="form-control upload-button-style w-100"
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
            className="form-control upload-button-style w-100"
            id="password"
            value={password.value}
            onChange={(event) => handleChange(event, setPassword)}
          />
          {passwordError && (
            <small style={{ color: "red" }}>{passwordError}</small>
          )}
        </div>
        <button
          className="btn btn-dark  text-light mt-3 mb-2"
          onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
