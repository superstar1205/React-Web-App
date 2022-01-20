import React from "react";
import "./Card.css";
import { FaBuilding, FaBookReader, FaMoneyBillAlt, FaSearch, FaClock, FaUserAlt, FaMapMarkerAlt, FaTags, FaUserTie } from "react-icons/fa"

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
            <FaBuilding style={style.mainDetails}/>{props.recruitmentBoard}
          </p>
          <p>
            <FaBookReader style={style.mainDetails}/>{props.qualification}
          </p>
          <h6>
            <FaMoneyBillAlt style={style.mainDetails}/>{props.salary}
          </h6>
          <hr />
          <h5>other details</h5>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <FaSearch style={style.otherDetails}/>vacancy
            </h6>
            <p>{props.vacancy}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <FaClock style={style.otherDetails}/>apply before
            </h6>
            <p>{props.applyBefore}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <FaUserAlt style={style.otherDetails}/>age limit
            </h6>
            <p>{props.minageLimit} - {props.maxageLimit}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <FaMapMarkerAlt style={style.otherDetails}/>location
            </h6>
            <p>{props.jobLocation}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <FaTags style={style.otherDetails}/>job category
            </h6>
            <p>{props.jobCategory}</p>
          </div>
          <div className="otherDetails d-flex align-items-center justify-content-between">
            <h6>
              <FaUserTie style={style.otherDetails}/>post type
            </h6>
            <p>{props.jobType}</p>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <h6>want to know more?</h6>
            <button className="btn" onClick={() => {window.open(`${props.externalLink}`,'_blank')}}>click here</button>
          </div>
        </div>
      </div>
    </>
  );
};

const style ={
  mainDetails:{
    marginRight: 10,
    opacity: 0.8
  },
  otherDetails:{
    color: "#8018FA",
    opacity: 1,
    marginRight: 10,
  }
}

export default Card;
