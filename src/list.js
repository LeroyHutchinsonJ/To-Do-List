import React from "react";
import shortid from "shortid";
var List = ({ listArr }) => {
  return (
    <ul>
      {listArr.map(info => (
        <li key={shortid.generate()}>
          {info} {info.counter}
        </li>
      ))}
    </ul>
  );
};
export default List;
