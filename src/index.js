import React from "react";
import ReactDOM from "react-dom";
import Index from "./App";

class App extends React.Component {
  render() {
    return (
      <div>
        <Index />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
