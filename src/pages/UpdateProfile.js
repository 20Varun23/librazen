import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../../supabase/L";
import { useEffect, useState } from "react";

function UpdateProfile() {
  const navigate = useNavigate();
  const { id, password } = useParams();
  const [fetchError, setFetchError] = useState();
  const [student, setStudent] = useState(null);
  const [nameS, setNameS] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const { data, error } = await supabase
        .from("Student")
        .select()
        .eq("id", id)
        .eq("password", password)
        .single();

      if (error) {
        setFetchError("Could not fetch the student");
        setStudent(null);
        alert("Password or/and id wrong");
      }
      if (data) {
        setStudent(data);
        setFetchError(null);
        setNameS(data.Name);
        setEmail(data.email_id);
        setPhone(data.phone_no);
      }
    };

    fetchStudent();
  }, []);

  const changeName = (event) => {
    setNameS(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (nameS == null || phone == null || email == null) {
      alert("All fields should be non-empty");
      return;
    }

    navigate(`/Profile/${id}/${password}`);

    const { data, error } = await supabase
      .from("Student")
      .update({
        Name: nameS,
        email_id: email,
        phone_no: phone,
      })
      .eq("id", id)
      .select();
  };

  const goBack = () => {
    navigate(`/Profile/${id}/${password}`);
  };

  return (
    <div id="LoginMainDiv">
      {fetchError && <p>{fetchError}</p>}
      {student && (
        <>
          <h1 id="Main_Heading">Update your details</h1>
          <div id="LoginDiv">
            <form type="submit" onSubmit={handleSubmit}>
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
                Name of the Book
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={nameS}
                onChange={changeName}
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
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={changeEmail}
              />
              <br />
              <label
                htmlFor="phone"
                className="form-label"
                style={{
                  color: "#8ecae6",
                  fontSize: "1.25em",
                  textAlign: "justify",
                  fontFamily: "Times New Roman",
                }}
              >
                Phone number
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={changePhone}
              />
              <br />
              <button
                className="btn btn-primary"
                style={{ margin: "1em auto", display: "block" }}
              >
                Update
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
        </>
      )}
    </div>
  );
}

export default UpdateProfile;
