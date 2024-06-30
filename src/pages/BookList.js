import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "./L";
import { useEffect, useState } from "react";
import BookCard from "../Components/BookCard";

function BookList() {
  // const navigate = useNavigate();
  const [ent, setEnt] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const { data, error } = await supabase.from("Books").select();

      if (error) {
        setFetchError("Could not fetch the student");
        setBook(null);
      }
      if (data) {
        setBook(data);
        setFetchError(null);
      }
    };

    fetchBook();
  }, []);

  const title = async () => {
    const { data, error } = await supabase
      .from("Books")
      .select()
      .ilike("name", ent);

    if (error) {
      setFetchError(null);
      setBook(null);
    }
    if (data) {
      setFetchError(null);
      setBook(data);
    }
  };
  const author = async () => {
    const { data, error } = await supabase
      .from("Books")
      .select()
      .ilike("author", ent);

    if (error) {
      setFetchError(null);
      setBook(null);
    }
    if (data) {
      setFetchError(null);
      setBook(data);
    }
  };

  const cancel = async () => {
    setEnt("");
    const { data, error } = await supabase.from("Books").select();

    if (error) {
      setFetchError("Could not fetch the student");
      setBook(null);
    }
    if (data) {
      setBook(data);
      setFetchError(null);
    }
  };

  const changeEnt = (event) => {
    setEnt(event.target.value);
  };

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      <h6 id="Main_Heading">View the Books we have got</h6>
      {book && (
        <div className="container">
          <div className="input-group mb-3 dropup">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Search for
            </button>
            <ul className="dropdown-menu btn btn-primary">
              <li>
                <a className="dropdown-item" onClick={cancel}>
                  Cancel
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={author}>
                  Author
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={title}>
                  Book Title
                </a>
              </li>
            </ul>
            <input
              type="text"
              class="form-control"
              value={ent}
              placeholder="Enter the author or title of the book"
              aria-label="Text input with dropdown button"
              onChange={changeEnt}
            />
          </div>
          <div style={{ display: "flex" }}>
            {book.map((book) => (
              <BookCard
                name={book.name}
                author={book.author}
                info={book.info}
                site="/Login"
                i="Issue"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookList;
