import React from "react";

var TextField = ({ text, setText }) => {
  return <input type="text" value={text} onChange={setText} />;
};

export default TextField;
