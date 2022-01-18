import React from "react";
import parse from "html-react-parser";
import "./Company.css";

function Company(props) {
  return (
    <div className="company">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>{props.title}</h1>
            <div className="content">
              {parse(props.content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
