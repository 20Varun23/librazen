import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "./L";
import { useEffect, useState } from "react";
// import "./Profile.css";
import BookCard from "../Components/BookCard";

function Profile() {
  const navigate = useNavigate();
  const { id, password } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [student, setStudent] = useState(null);
  const [book, setBook] = useState(null);
  const [fetchErrorB, setFetchErrorB] = useState(null);

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
        fetchBook(data);
      }
    };

    const fetchBook = async (dataB) => {
      let n = [];
      if (dataB.borrowed.length > 0) {
        n.push(dataB.borrowed[0]);
      }
      if (dataB.borrowed.length > 1) {
        n.push(dataB.borrowed[1]);
      }
      if (dataB.borrowed.length > 2) {
        n.push(dataB.borrowed[2]);
      }

      const { data, error } = await supabase.from("Books").select().in("id", n);

      if (error) {
        setFetchErrorB("Could not fetch the book");
        setBook(null);
      }
      if (data) {
        setBook(data);
        setFetchErrorB(null);
        console.log(n);
      }
    };

    fetchStudent().catch(() => {
      console.log("Error fetching student data");
    });
  }, []);

  const h = (bi) => {
    return `/Profile/${id}/${password}/${bi}/Return`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (student.borrowed.length < 3) {
      navigate(`/Profile/${id}/${password}/BooksSearch`);
    } else {
      alert("You already have taken 3 books");
      navigate(`/Profile/${id}/${password}`);
    }
  };

  const goBack = () => {
    navigate(`/Login`);
  };

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {fetchErrorB && <p>{fetchErrorB}</p>}
      {student && book && (
        <>
          <h1 id="Main_heading">Hello {student.Name}!</h1>
          <div id="ProfileDiv">
            <p className="mainText" style={{ textAlign: "center" }}>
              email : {student.email_id}
            </p>
            <p className="mainText" style={{ textAlign: "center" }}>
              phone number : {student.phone_no}
            </p>
            <div className="mainText" style={{ textAlign: "center" }}>
              borrowed books id : <br />
              {book.map((b) => (
                <BookCard
                  name={b.name}
                  author={b.author}
                  info={b.return_date}
                  site={h(b.id)}
                  i="Return or reissue"
                />
              ))}
            </div>
            {/* <p className="mainText" style={{ textAlign: "center" }}>
              last three books given : {student.given[0]} ,{student.given[1]} ,{" "}
              {student.given[2]}
            </p> */}

            <p className="mainText" style={{ textAlign: "center" }}>
              amount left to be paid : Rs. {student.late_fine}
            </p>
            <p className="mainText" style={{ textAlign: "center" }}>
              Reading score : {student.reading_points}
            </p>
            <form onSubmit={handleSubmit}>
              <button
                id="books"
                className="btn btn-primary"
                style={{ margin: "0 auto", display: "block" }}
              >
                Issue Books
              </button>
            </form>
            <form onSubmit={goBack}>
              <button
                className="btn btn-secondary"
                style={{ margin: "1em auto", display: "block" }}
              >
                Cancel
              </button>
            </form>
            <br />
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
