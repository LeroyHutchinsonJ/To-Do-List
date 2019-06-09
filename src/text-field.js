import React from "react";

var TextField = ({ text, setText, onKeyPress }) => {
  return (
    <input
      type="text"
      value={text}
      onChange={setText}
      onKeyPress={onKeyPress}
    />
  );
};

export default TextField;
