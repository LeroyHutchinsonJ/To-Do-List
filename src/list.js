import React from "react";
import shortid from "shortid";

var list = "list";

var List = ({ listArr }) => {
  return (
    <span className="flexContainer">
      {listArr.map(info => (
        <div key={shortid.generate()}>
          <div className={list}> {info}</div>
          <br />
        </div>
      ))}
    </span>
  );
};

export default List;
