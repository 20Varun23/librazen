import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "./L";
import { useEffect, useState } from "react";

function PasswordChange() {
  const navigate = useNavigate();
  const { id, password } = useParams();
  const [student, setStudent] = useState(null);
  const [oPassword, setOPassword] = useState(null);
  const [nPassword, setNPassword] = useState(null);
  const [cPassword, setCPassword] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const { data, error } = await supabase
        .from("Student")
        .select()
        .eq("id", id)
        .eq("password", password)
        .single();

      if (error) {
        setFetchError("Could not fetch Student");
        setStudent(null);
      }

      if (data) {
        setStudent(data);
        setFetchError(null);
      }
    };

    fetchStudent();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (oPassword == null) {
      alert("Put old Password");
      return;
    }

    if (oPassword != password) {
      alert("Old password is incorrect");
      return;
    }

    if (nPassword == null || cPassword == null) {
      alert(`Add new password`);
      return;
    }

    if (nPassword !== cPassword) {
      alert("Verification failed");
      return;
    }

    navigate(`/Profile/${id}/${cPassword}`);

    const { data, error } = await supabase
      .from("Student")
      .update({
        password: nPassword,
      })
      .eq("id", id)
      .select();
  };

  const goBack = () => {
    navigate(`/Profile/${id}/${password}`);
  };

  const changeOPassword = (event) => {
    setOPassword(event.target.value);
  };

  const changeNPassword = (event) => {
    setNPassword(event.target.value);
  };

  const changeCPassword = (event) => {
    setCPassword(event.target.value);
  };

  return (
    <>
      {fetchError && <p>{fetchError}</p>}
      {student && (
        <div id="LoginMainDiv">
          <h1 id="Main_Heading">Update Password</h1>
          <div id="LoginDiv">
            <form type="submit" onSubmit={handleSubmit}>
              <label
                labelFor="oldPassword"
                className="form-label"
                style={{
                  color: "#8ecae6",
                  fontSize: "1.25em",
                  textAlign: "justify",
                  fontFamily: "Times New Roman",
                }}
              >
                Enter the old password
              </label>

              <input
                type="password"
                className="form-control"
                name="phone"
                value={oPassword}
                onChange={changeOPassword}
              />
              <br />
              <label
                labelFor="nPassword"
                className="form-label"
                style={{
                  color: "#8ecae6",
                  fontSize: "1.25em",
                  textAlign: "justify",
                  fontFamily: "Times New Roman",
                }}
              >
                Enter new Password
              </label>

              <input
                type="password"
                className="form-control"
                name="nPassword"
                value={nPassword}
                onChange={changeNPassword}
              />
              <br />
              <label
                labelFor="confirmPassword"
                className="form-label"
                style={{
                  color: "#8ecae6",
                  fontSize: "1.25em",
                  textAlign: "justify",
                  fontFamily: "Times New Roman",
                }}
              >
                Confirm new Password
              </label>

              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={cPassword}
                onChange={changeCPassword}
              />
              <br />
              <button
                className="btn btn-primary"
                style={{ margin: "1em auto", display: "block" }}
              >
                Update Password
              </button>
            </form>
            <form>
              <button
                className="btn btn-secondary"
                style={{ margin: "1em auto", display: "block" }}
                onClick={goBack}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PasswordChange;
