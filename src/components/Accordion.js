import React, { Component } from "react";
import { UncontrolledCollapse, Card } from "reactstrap";
import Chevron from "./Chevron";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  render() {
    return (
      <div className="accordion-wrapper container text-center mt-5">
        {/* Hard coded placeholder. Use API to get name and abbreviation of coin */}
        <p className="text-left bitcoin-symbol">Bitcoin</p>
        <p className="text-left bitcoin-symbol">(BTC)</p>
        <Chevron />
        {/* Using UncontrolledCollapse since this
        component doesn't need to handle state */}
        <UncontrolledCollapse toggler="#toggler">
          <Card className="card">
            {/* Allows LineGraph component to be nested inside of the Card component */}
            {this.props.children}
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default Accordion;
