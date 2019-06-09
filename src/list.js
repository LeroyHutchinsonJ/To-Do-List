import React from "react";

var List = ({ listArr }) => {
  return (
    <ul>
      {listArr.map(info => (
        <li>
          {info} {info.counter}
        </li>
      ))}
    </ul>
  );
};
export default List;
