import React, { Component } from "react";
import "./App.css";

import LineGraph from "./components/LineGraph";
import Accordion from "./components/Accordion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion>
          <LineGraph />
        </Accordion>
      </div>
    );
  }
}

export default App;
