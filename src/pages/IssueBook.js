import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "./L";
import { useEffect, useState } from "react";

function IssueBook() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [book, setBook] = useState(null);
  const { id, password, book_id } = useParams();
  const [fetchErrorB, setFetchErrorB] = useState(null);
  const [fetchErrorS, setFetchErrorS] = useState(null);
  const d = new Date();
  const r = new Date(d);
  r.setDate(d.getDate() + 14);

  useEffect(() => {
    const fetchBook = async () => {
      const { data, error } = await supabase
        .from("Books")
        .select()
        .eq("id", book_id)
        .single();

      if (error) {
        setFetchErrorB("Could not fetch the Book");
        setBook(null);
      }
      if (data) {
        setBook(data);
        setFetchErrorB(null);
      }
    };

    const fetchStudent = async () => {
      const { data, error } = await supabase
        .from("Student")
        .select()
        .eq("id", id)
        .eq("password", password)
        .single();

      if (error) {
        setFetchErrorS("Could not fetch the student");
        setStudent(null);
      }
      if (data) {
        setStudent(data);
        setFetchErrorS(null);
      }
    };

    fetchBook();
    fetchStudent();
  }, []);

  const IssueB = async () => {
    const { datab, errorb } = await supabase
      .from("Books")
      .update({ owener_id: id, return_date: r, can_reissue: true })
      .eq("id", book_id)
      .select();
  };

  const IssueS = async () => {
    if (student.borrowed.length >= 3) {
      alert(`you reached 3 borrowed book`);
      return;
    }

    let n = [];
    if (student.borrowed.length > 0) {
      n.push(student.borrowed[0]);
    }
    if (student.borrowed.length > 1) {
      n.push(student.borrowed[1]);
    }
    n.unshift(book_id);

    let m = [];
    if (student.return_date.length > 0) {
      m.push(student.return_date[0]);
    }
    if (student.return_date.length > 1) {
      m.push(student.return_date[1]);
    }
    m.unshift(r);

    const { errors } = await supabase
      .from("Student")
      .update({ borrowed: n, return_date: m })
      .eq("id", id)
      .select();

    alert(
      "Book issued ! collect it from the front desk in the library tommorow"
    );

    IssueB();

    navigate(`/Profile/${id}/${password}/BooksSearch`);
  };

  return (
    <div className="container">
      {fetchErrorB && <p>{fetchErrorB}</p>}
      {fetchErrorS && <p>{fetchErrorS}</p>}
      <h1 id="Main_Heading">Confirmation</h1>
      {student && book && (
        <div className="mainText" style={{ textAlign: "center" }}>
          <p>Name of the student : {student.Name}</p>
          <p>Id of the student : {student.id}</p>
          <p>
            Date of issue : {d.getDate()}/{d.getMonth()}/{d.getFullYear()}
          </p>
          <p>
            Date of return : {r.getDate()}/{r.getMonth()}/{r.getFullYear()}
          </p>
          <p>Name of the student : {book.author}</p>
          <p>Name of the student : {book.name}</p>
          <button
            id="issue"
            className="btn btn-primary"
            style={{ margin: "0 auto", display: "block" }}
            onClick={() => {
              IssueS();
            }}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}
export default IssueBook;
