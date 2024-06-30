import React from "react";
import { useNavigate } from "react-router-dom";

function BookCard(prop) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(prop.site);
  };

  return (
    <div
      className="card"
      style={{
        width: "20%",
        marginTop: "0.5em",
        marginBottom: "0.5em",
        marginLeft: "1.4em",
        marginRight: "1.4em",
        minWidth: "200px",
        display: "inline-block",
      }}
    >
      <div className="card-body">
        <h4 className="card-title">{prop.name}</h4>
        <h6>{prop.author}</h6>
        <p className="card-text">{prop.info}</p>
        <a onClick={handleSubmit} className="btn btn-primary">
          {prop.i}
        </a>
      </div>
    </div>
  );
}

export default BookCard;
