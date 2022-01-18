import React from "react";
import "./Filter.css";

const Filter = (props) => {
  return (
    <>
      <select name={props.filterData[0][0]} className="filter" id={props.filterData[0][0]} onChange={props.change}>
        <option value="All">All</option>
        {props.filterData[1].map(data =>{
            return(
                <option value={data} key={data}>{data}</option>
            )
        })}
      </select>
    </>
  );
};

export default Filter;
