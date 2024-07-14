import React from "react";
import supabase from "./L";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import "./LeaderBoard.css";

function LeaderBoard() {
  const [student, setStudent] = useState(null);
  const [books, setBooks] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const { data, error } = await supabase.from("Student").select();

      if (data) {
        setStudent(data);
        setFetchError(null);
        return new Promise((resolve, reject) => {
          if (data != null) {
            resolve(`success!`);
          }
        });
      }

      if (error) {
        setStudent(null);
        setFetchError("error");
      }
    };

    const fetchBook = async () => {
      const { data, error } = await supabase.from("Books").select();

      if (data) {
        setBooks(data);
        setFetchError(null);
        return new Promise((resolve, reject) => {
          if (data != null) {
            resolve(`success!`);
          }
        });
      }

      if (error) {
        setBooks(null);
        setFetchError("error");
      }
    };

    fetchStudent().then(() => {
      if (student != null) {
        let s = [];
        student.map((st) => {
          s.push(st);
          return st;
        });

        s = d3.sort(s, (a, b) =>
          d3.descending(a.reading_points, b.reading_points)
        );
        setStudent(s);
      }
    });

    fetchBook().then(() => {
      if (books != null) {
        let s = [];
        books.map((st) => {
          s.push(st);
          return st;
        });

        s = d3.sort(s, (a, b) =>
          d3.descending(a.popular_points, b.popular_points)
        );
        setBooks(s);
      }
    });
  });

  return (
    <div>
      {student && books && (
        <div>
          <h1 id="Main_heading">Leaderboard</h1>
          <br />
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <table className="table table-info table-striped table-bordered caption-top">
                  <caption className="captions">Readers</caption>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {student.map((student, index) => (
                      <tr key={index} id={index}>
                        <th>{index + 1}</th>
                        <td>{student.Name}</td>
                        <td>{student.reading_points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col">
                <table className="table table-info table-striped table-bordered caption-top">
                  <caption className="captions">Books</caption>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {books.map((books, index) => (
                      <tr key={index} id={index}>
                        <th>{index + 1}</th>
                        <td>{books.name}</td>
                        <td>{books.popular_points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
