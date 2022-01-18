import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>{props.postName}</h5>
            <p>{props.jobSector}</p>
          </div>
          <p>
            <i className="fas fa-building"></i>{props.recruitmentBoard}
          </p>
          <p>
            <i className="fas fa-book-reader"></i>{props.qualification}
          </p>
          <h6>
            <i className="fas fa-money-bill-alt"></i>{props.salary}
          </h6>
          <hr />
          <h5>other details</h5>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <i className="fas fa-search"></i>vacancy
            </h6>
            <p>{props.vacancy}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <i className="far fa-clock"></i>apply before
            </h6>
            <p>{props.applyBefore}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <i className="far fa-user"></i>age limit
            </h6>
            <p>{props.minageLimit} - {props.maxageLimit}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <i className="fas fa-map-marker-alt"></i>location
            </h6>
            <p>{props.jobLocation}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <i className="fas fa-tags"></i>job category
            </h6>
            <p>{props.jobCategory}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <i className="fas fa-user-tie"></i>post type
            </h6>
            <p>{props.jobType}</p>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <h6>want to know more?</h6>
            <button className="btn">click here</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
