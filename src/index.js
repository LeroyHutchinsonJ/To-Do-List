import React from "react";
import ReactDOM from "react-dom";
import TextField from "./text-field";
import List from "./list";
import "./styles.css";

class App extends React.Component {
  state = {
    text: "",
    listArr: []
  };
  counter = 0;
  setText = event => {
    this.setState({ text: event.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.setState({ listArr: [...this.state.listArr, this.state.text] });
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <TextField
          text={this.state.text}
          setText={this.setText}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <List listArr={this.state.listArr} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
