import React from "react";

var TextField = ({ text, setText, onKeyPress }) => {
  return (
    <div>
      {" "}
      <input
        type="text"
        value={text}
        onChange={setText}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default TextField;
