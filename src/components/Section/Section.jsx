import React from "react";
import "./Section.css";
import { NavLink } from "react-router-dom";

const Section = (props) => {
  return (
    <div className="section">
      <h1>{props.title}</h1>
      <h4>{props.sTitle}</h4>
      <p>{props.desc}</p>
      {props.link ? (
        <NavLink to={props.link}>
          <button className="btn" type="submit">
            {props.btnTxt}
          </button>
        </NavLink>
      ) : (
        <button className="btn" type="submit">
          {props.btnTxt}
        </button>
      )}
    </div>
  );
};

export default Section;
