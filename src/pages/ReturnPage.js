import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "./L";
import { useEffect, useState } from "react";

function ReturnPage() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [book, setBook] = useState(null);
  const { id, password, book_id } = useParams();
  const [fetchErrorB, setFetchErrorB] = useState(null);
  const [fetchErrorS, setFetchErrorS] = useState(null);

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
  });

  const handleReissue = async (event) => {
    event.preventDefault();
    if (book.can_reissue == false) {
      alert("You have already reissued the book ounce");
      return;
    }

    if (book.is_overdue) {
      alert("This book is overdue");
      return;
    }

    navigate(`/Profile/${id}/${password}`);
    let r = new Date(book.return_date);
    let s = new Date(r);
    r.setDate(r.getDate() + 14);

    const { errora } = await supabase
      .from("Books")
      .update({
        return_date: r,
        can_reissue: false,
      })
      .eq("id", book_id)
      .select();

    let n = [];
    for (let i = 0; i < student.return_date.length; i++) {
      if (s == student.return_date[i]) {
        n.push(r);
      } else {
        n.push(student.return_date[i]);
      }
    }

    const { errorb } = await supabase
      .from("Student")
      .update({
        return_date: n,
      })
      .eq("id", book_id)
      .select();
  };

  const handleReturn = async () => {
    let n = [];
    let l = [];
    for (let i = 0; i < student.borrowed.length; i++) {
      if (book.id !== student.borrowed[i]) {
        l.push(student.return_date[i]);
        n.push(student.borrowed[i]);
      }
    }

    let points = student.reading_points;
    if (!book.is_overdue) {
      if (!book.can_reissue) {
        points += 5;
      } else {
        points += 10;
      }
    }

    const { errorb } = await supabase
      .from("Student")
      .update({
        borrowed: n,
        return_date: l,
        reading_points: points,
      })
      .eq("id", id)
      .select();

    console.log(errorb);

    const { errora } = await supabase
      .from("Books")
      .update({
        owener_id: null,
        return_date: null,
        can_reissue: null,
        is_overdue: null,
      })
      .eq("id", book_id)
      .select();

    alert("Return the book tommorow at the front desk");
    navigate(`/Profile/${id}/${password}`);
    console.log(errora);
  };

  return (
    <div className="container">
      {fetchErrorB && <p>{fetchErrorB}</p>}
      {fetchErrorS && <p>{fetchErrorS}</p>}
      <h1 id="Main_heading">Confirmation</h1>
      {student && book && (
        <div className="mainText" style={{ textAlign: "center" }}>
          <p>Name of the student : {student.Name}</p>
          <p>Id of the student : {student.id}</p>
          <p>Name of the student : {book.name}</p>
          <p>Name of the author : {book.author}</p>
          <button
            id="issue"
            className="btn btn-primary"
            style={{ margin: "0 auto", display: "block" }}
            onClick={handleReturn}
          >
            Return
          </button>
          <br />
          <button
            class="btn btn-primary"
            href="/home"
            id="dis"
            onClick={handleReissue}
          >
            Reissued
          </button>
        </div>
      )}
    </div>
  );
}
export default ReturnPage;
