import React, { Component } from "react";
import "./App.css";

import LineGraph from "./components/LineGraph";
import ChartContainer from "./components/ChartContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChartContainer>
          <LineGraph />
        </ChartContainer>
      </div>
    );
  }
}

export default App;
