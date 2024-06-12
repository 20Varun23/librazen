import React from "react";
import "./Login.css";

function Login() {
  return (
    <div id="loginMainDiv">
      <h1 id="Main_heading">Login</h1>
      <div id="LoginDiv">
        <form action="Error">
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
            id="IDInput"
            name="ID"
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
            id="Password"
            name="ID"
            placeholder='Like "password"'
          />
          <br />
          <div className="center">
            <button type="submit" class="btn btn-primary" href="/Error">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
