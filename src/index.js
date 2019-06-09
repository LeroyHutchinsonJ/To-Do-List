import React from "react";
import ReactDOM from "react-dom";
import TextField from "./text-field";

import "./styles.css";

class App extends React.Component {
  state = {
    text: ""
  };
  setText = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <TextField text={this.state.text} setText={this.setText} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
