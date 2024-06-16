import React from "react";

export default function Project(props) {
  return (
    <div className="p-5 m-5 bg-green-500 border border-black rounded-md">
      Title: {props.title}
      <br></br>
      Description: {props.description}
      <br></br>
      Link: {props.link}
    </div>
  );
}
