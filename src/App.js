import React from "react";
import "./App.css";

import LineGraph from "./components/LineGraph";
import Accordion from "./components/Accordion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

function App() {
  return (
    <div className="App">
      <Accordion>
        <LineGraph />
      </Accordion>
    </div>
  );
}

export default App;
