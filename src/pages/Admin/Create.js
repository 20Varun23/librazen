import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "../L";
import { useEffect, useState } from "react";

function Create() {
  const { id, password } = useParams();
  const navigate = useNavigate();
  const [nameB, setNameB] = useState(null);
  const [authorB, setAuthorB] = useState(null);
  const [infoB, setInfoB] = useState(null);
  const [editionB, setEditionB] = useState(null);
  const [genre, setGenre] = useState(null);

  const changeName = (event) => {
    setNameB(event.target.value);
  };

  const changeAuthor = (event) => {
    setAuthorB(event.target.value);
  };

  const changeEdition = (event) => {
    setEditionB(event.target.value);
  };

  const changeInfo = (event) => {
    setInfoB(event.target.value);
  };

  const changeGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = async () => {
    if (
      editionB == null ||
      infoB == null ||
      authorB == null ||
      editionB == null ||
      genre == null
    ) {
      alert("Input all fields");
      return;
    }

    const d = new Date();
    navigate(`/Admin/${id}/${password}`);

    const { data, error } = await supabase
      .from("Books")
      .insert([
        {
          name: nameB,
          author: authorB,
          info: infoB,
          edition: editionB,
          check_in: d,
          genre: genre,
        },
      ])
      .select();
  };

  const goBack = () => {
    navigate(`/Admin/${id}/${password}`);
  };

  return (
    <div id="LoginMainDiv">
      <h1 id="Main_Heading">Enter the new entry</h1>
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
            Name of the book
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={nameB}
            onChange={changeName}
          />
          <br />
          <label
            htmlFor="author"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Author
          </label>
          <input
            type="text"
            class="form-control"
            name="author"
            value={authorB}
            onChange={changeAuthor}
          />
          <br />

          <label
            htmlFor="edition"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Edition
          </label>
          <input
            type="text"
            class="form-control"
            name="edition"
            value={editionB}
            onChange={changeEdition}
          />
          <br />
          <label
            htmlFor="info"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Info
          </label>
          <input
            type="text"
            class="form-control"
            name="info"
            value={infoB}
            onChange={changeInfo}
          />
          <br />
          <label
            htmlFor="genre"
            className="form-label"
            style={{
              color: "#8ecae6",
              fontSize: "1.25em",
              textAlign: "justify",
              fontFamily: "Times New Roman",
            }}
          >
            Info
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            name="genre"
            onChange={changeGenre}
            value={genre}
          >
            <option selected>Open this select menu</option>
            <option value="Fiction">Fiction</option>
            <option value="Self Help">Self Help</option>
            <option value="Non fiction">Non Fiction</option>
          </select>
          <br />
          <button className="btn btn-primary">Add book</button>
          <form onSubmit={goBack}>
            <button
              className="btn btn-secondary"
              style={{ margin: "1em auto", display: "block" }}
            >
              Cancel
            </button>
          </form>
        </form>
      </div>
    </div>
  );
}

export default Create;
