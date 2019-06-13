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
  removeFromArray = ({ a }) => {
    //Copy the state array into a new array that i will mess with
    var array = [...this.state.listArr];

    //Set the index variable equal to the current array index
    var index = array.indexOf(a);

    //If array size is greater than -1 that means it has something in it
    if (a !== -1) {
      //Splice cuts things up at the first value which is the index, the second parameter is probably how many things to cut up
      array.splice(index, 1);
      this.setState({ listArr: array });
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
        <List listArr={this.state.listArr} killItem={this.removeFromArray} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
