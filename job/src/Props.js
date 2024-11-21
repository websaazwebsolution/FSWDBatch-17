import React from "react";

function Props(props) {
  return (
    <div>
      <button
        style={{
          color: props.color,
          backgroundColor: "black",
          padding: "5px",
          margin: "10px",
        }}
      >
        {" "}
        {props.title}
      </button>
    </div>
  );
}

export default Props;
