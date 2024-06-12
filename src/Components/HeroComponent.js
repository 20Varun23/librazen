import React from "react";
import "./HeroComponent.css";

const HeroComponent = () => {
  return (
    <div id="hero">
      <h1 id="Main_heading">Welcome to Librazen</h1>
      <div className="container">
        <p className="mainText">
          We are delighted to have you here and excited to introduce you to our
          state-of-the-art Library Management System (LMS) , Librazen. This
          platform is meticulously designed to cater to all your library needs,
          ensuring a seamless and efficient experience for both library staff
          and patrons. Whether you're a dedicated librarian managing an
          extensive collection, a student in search of academic resources, or an
          avid reader exploring new literary worlds, our LMS provides the tools
          and features to support your journey. With a user-friendly interface
          and robust functionality, our system aims to enhance the way you
          interact with our library, making it easier than ever to find, borrow,
          and manage books and other resources. Dive in to discover a world of
          information and adventure, right at your fingertips.
        </p>
      </div>
      <div className="container text-center" id="GenereList">
        <div className="row align-items-center">
          <div className="col" style={{ margin: "0.5em" }}>
            The genre of books we have
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col" style={{ margin: "0.25em" }}>
            <ul class="list-group">
              <li className="list-group-item list-group-item-info">
                <u>Fiction</u>
              </li>
              <li className={"list-group-item list-group-item-info"}>
                Contemporary Fiction
              </li>
              <li className="list-group-item list-group-item-info">
                Historical Fiction
              </li>
              <li className="list-group-item list-group-item-info">
                Literary Fiction
              </li>
              <li className="list-group-item list-group-item-info">Mystery</li>
            </ul>
          </div>
          <div className="col" style={{ margin: "0.25em" }}>
            <ul class="list-group">
              <li className="list-group-item list-group-item-info">
                <u>Non-Fiction</u>
              </li>
              <li className="list-group-item list-group-item-info">
                Biography
              </li>
              <li className="list-group-item list-group-item-info">Memoir</li>
              <li className="list-group-item list-group-item-info">
                Self-Help
              </li>
              <li className="list-group-item list-group-item-info">
                Health & Wellness
              </li>
            </ul>
          </div>
          <div className="row align-items-center">
            <div className="col" style={{ margin: "0.5em" }}>
              And much more...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
