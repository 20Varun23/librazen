import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "./L";

function Register() {
  const navigate = useNavigate();
  const [nameS, setNameS] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [idS, setIdS] = useState(null);
  const [phone, setPhone] = useState(null);
  const [passwordC, setPasswordC] = useState(null);

  const changeName = (event) => {
    setNameS(event.target.value);
  };

  const changeIdS = (event) => {
    setIdS(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changePassC = (event) => {
    setPasswordC(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  const createStudent = async (event) => {
    event.preventDefault();
    if (
      nameS == null ||
      email == null ||
      password == null ||
      passwordC == null ||
      idS == null ||
      phone == null
    ) {
      alert("Fill all fields");
      return;
    }

    if (password != passwordC) {
      alert("passowrd is not correctly verfied");
      return;
    }

    const { data, error } = await supabase
      .from("Student")
      .insert([
        {
          Name: nameS,
          id: idS,
          password: password,
          email_id: email,
          phone_no: phone,
          borrowed: [],
          given: [],
          return_date: [],
        },
      ])
      .select();

    navigate(`/Profile/${idS}/${password}`);
  };

  return (
    <div id="LoginMainDiv">
      <h1 id="Main_heading">Register !!</h1>
      <div id="LoginDiv">
        <form type="submit">
          <label
            htmlFor="name"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={nameS}
            onChange={changeName}
          />
          <br />

          <label
            htmlFor="id"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            ID
          </label>
          <input
            type="text"
            class="form-control"
            name="id"
            value={idS}
            onChange={changeIdS}
          />
          <br />

          <label
            htmlFor="password"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={password}
            onChange={changePassword}
          />
          <br />
          <label
            htmlFor="passC"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            name="passC"
            value={passwordC}
            onChange={changePassC}
          />
          <br />
          <label
            htmlFor="email"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={email}
            onChange={changeEmail}
          />
          <br />
          <label
            htmlFor="id"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Phone no.
          </label>
          <input
            type="text"
            class="form-control"
            name="id"
            value={phone}
            onChange={changePhone}
          />
          <br />
          <button type="button" class="btn btn-primary" onClick={createStudent}>
            Create Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
