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

  handleKeyPress = a => {
    if (a.key === "Enter") {
      this.setState({ listArr: [...this.state.listArr, this.state.text] });
      this.setState({ text: "" });
    }
  };

  //This function is to handle removing items from an array
  removeFromArray = arr => {
    //Copy the state array into a new array that I will mess with
    var array = [...this.state.listArr];

    //Set the index variable
    var index = array.indexOf(arr);
    console.log(arr);

    //Splice cuts things up at the first value which is the index, the second parameter is probably how many things to cut up
    array.splice(index, 1);
    this.setState({ listArr: array });
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
        <List listArr={this.state.listArr} killItem={this.removeFromArray} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
