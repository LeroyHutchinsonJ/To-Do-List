import React from "react";
import shortid from "shortid";

var crossedOut = "crossedOut";
var list = "list";
var check = false;

var List = ({ listArr }) => {
  return (
    <span className="flexContainer">
      {listArr.map(info => (
        <div key={shortid.generate()}>
          <div className={check ? list : crossedOut} onClick={CrossOutList}>
            {" "}
            {info}
          </div>
          <br />
        </div>
      ))}
    </span>
  );
};

var CrossOutList = () => {
  if (check === true) {
    check = false;
  } else {
    check = true;
  }
  console.log({ check });
};
export default List;
