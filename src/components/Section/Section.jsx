import React from "react";
import "./Section.css";

const Section = (props) => {
  return (
    <div className="section">
      <h1>{props.title}</h1>
      <h4>{props.sTitle}</h4>
      <p>
        {props.desc}
      </p>
      <button className="btn">{props.btnTxt}</button>
    </div>
  );
};

export default Section;
