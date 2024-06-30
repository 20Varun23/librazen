import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeId = (event) => {
    setId(event.target.value);
  };

  const changePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/Profile/${id}/${password}`);
  };

  return (
    <div id="loginMainDiv">
      <h1 id="Main_heading">Login</h1>
      <div id="LoginDiv">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="IDInput"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Enter your ID number
          </label>
          <input
            type="text"
            class="form-control"
            name="id"
            value={id}
            onChange={changeId}
            placeholder="Like 000IT000"
          />
          <br />
          <label
            htmlFor="Password"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Enter your Password
          </label>
          <input
            type="password"
            class="form-control"
            name="value"
            value={password}
            onChange={changePass}
            placeholder='Like "password"'
          />
          <br />
          <div className="center">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
