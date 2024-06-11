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
    </div>
  );
};

export default HeroComponent;
