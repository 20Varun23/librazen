import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "./L";
import { useEffect, useState } from "react";
import { Chart as CharJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import "./About.css";

function About() {
  const navigate = useNavigate();
  const { id, password } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [student, setStudent] = useState(null);
  const [books, setBooks] = useState(null);
  const [fetchErrorB, setFetchErrorB] = useState(null);
  const [types, setTypes] = useState(null); //[Fiction , Non fiction , Self Help]

  useEffect(() => {
    const fetchBook = async () => {
      const { data, error } = await supabase.from("Books").select();

      if (data) {
        setBooks(data);
        setFetchErrorB(null);
        return new Promise((resolve, reject) => {
          if (data != null) {
            fetchTypes(data);
            resolve(`success!`);
          }
        });
      }

      if (error) {
        setFetchErrorB("Error in fetching");
        setBooks(null);
      }
    };

    const fetchTypes = (data) => {
      let fiction = 0;
      let nonFiction = 0;
      let selfHelp = 0;

      data.map((book) => {
        if (book.genre == "Fiction") {
          fiction++;
        }
        if (book.genre == "Non fiction") {
          nonFiction++;
        }
        if (book.genre == "Self Help") {
          selfHelp++;
        }
      });

      const arr = [fiction, nonFiction, selfHelp];

      setTypes(arr);
    };

    fetchBook();
  }, []);

  return (
    <div className="container text-center">
      <h1 id="Main_heading">About</h1>
      <p className="mainText">
        Librazen, nestled in the heart of an ancient city, is a sanctuary for
        bibliophiles and seekers of knowledge. This enchanting library boasts
        towering shelves filled with rare manuscripts, forgotten tomes, and
        modern bestsellers, all meticulously curated. The air is tinged with the
        faint aroma of aged paper and polished wood, creating an ambiance that
        beckons visitors to lose themselves in its literary treasures. With cozy
        reading nooks and innovative digital archives, Librazen harmoniously
        blends tradition with technology, making it a haven for both scholars
        and casual readers alike.
      </p>
      <div
        className="container text-center"
        style={{ width: "50%", height: "50%" }}
      >
        <h2 className="sub_heading">Books we have</h2>
        <br />
        <Doughnut
          id="Doughnut"
          data={{
            labels: ["Fiction", "Non Fiction", "Self Help"],
            datasets: [
              {
                label: "No. of books",
                color: "#8ecae6",
                data: types,
                backgroundColor: ["#fb8500", "#ffb703", "#8ecae6"],
                hoverOffset: 4,
              },
            ],
          }}
          options={{}}
        />
      </div>
      <br />
      <div className="container" style={{ width: "75%", height: "75%" }}>
        <Bar
          id="Bar"
          data={{
            labels: ["Fiction", "Non Fiction", "Self Help"],
            datasets: [
              {
                label: "Number of Books",
                data: types,
                backgroundColor: ["#fb8500", "#ffb703", "#8ecae6"],
                hoverOffset: 4,
              },
            ],
          }}
          options={{
            scales: {
              y: {
                ticks: {
                  stepSize: 1,
                  color: "white",
                },
              },

              x: {
                ticks: {
                  color: "white",
                },
              },
            },
          }}
        />
      </div>
      <br />
    </div>
  );
}

export default About;
