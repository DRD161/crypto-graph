import React, { Component } from "react";
import { UncontrolledCollapse, Card, CardHeader } from "reactstrap";
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
        <div className="row">
          <div className="col-6">
            <p className="text-left mt-3 bitcoin-symbol">Bitcoin(BTC)</p>
          </div>
          <div className="col-6">
            <p className="text-right mt-3 bitcoin-symbol">Price Here</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Chevron />
          </div>
          {/* Using UncontrolledCollapse since this
        component doesn't need to handle state */}
          <div className="col-12">
            <UncontrolledCollapse toggler="#toggler">
              <CardHeader className="mt-3"><h3>Bitcoin: Week in review</h3></CardHeader>
              <Card className="card">
                {/* Allows LineGraph component to be nested inside of the Card component */}
                {this.props.children}
              </Card>
            </UncontrolledCollapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
