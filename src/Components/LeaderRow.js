import React from "react";

function LeaderRow(prompt) {
  return (
    <tr>
      {/* <td>{prompt.r}</td> */}
      <td>{prompt.name}</td>
      <td style={{ backgroundColor: "yellow" }}>{prompt.points}</td>
    </tr>
  );
}

export default LeaderRow;
