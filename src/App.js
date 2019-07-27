import React from "react";
import "./App.css";

import LineGraph from "./components/LineGraph";
import Accordion from "./components/Accordion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown);

function App() {
  return (
    <div className="App">
      <LineGraph />
      <Accordion />
    </div>
  );
}

export default App;
