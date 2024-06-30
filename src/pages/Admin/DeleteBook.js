import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "../L";
import { useEffect, useState } from "react";

function DeleteBook() {
  const navigate = useNavigate();
  const { id, password, book_id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const { data, error } = await supabase
        .from("Books")
        .select()
        .eq("id", book_id)
        .single();

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

  const handleSubmit = async () => {
    navigate(`/Admin/${id}/${password}/Delete`);
    const { error } = await supabase.from("Books").delete().eq("id", book_id);
  };
  const handleCancel = () => {
    navigate(`/Admin/${id}/${password}/Delete`);
  };

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {book && (
        <>
          <h1 id="Main_Heading">Confirm Delete</h1>
          <div id="ProfileDiv">
            <p className="mainText" style={{ textAlign: "center" }}>
              Book name : {book.name}
            </p>
            <p className="mainText" style={{ textAlign: "center" }}>
              Book ID : {book.id}
            </p>
            <p className="mainText" style={{ textAlign: "center" }}>
              author : {book.author}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <button
              className="btn btn-danger"
              style={{ margin: "0 auto", display: "block" }}
            >
              Delete
            </button>
          </form>
          <br />
          <form onSubmit={handleCancel}>
            <button
              className="btn btn-secondary"
              style={{ margin: "0 auto", display: "block" }}
            >
              Cancel
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default DeleteBook;
