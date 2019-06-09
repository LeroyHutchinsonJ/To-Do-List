import React from "react";
import ReactDOM from "react-dom";
import TextField from "./text-field";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <TextField />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
