import React, { Component } from "react";
import { UncontrolledCollapse, CardBody, Card } from "reactstrap";
import Chevron from "./Chevron";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  render() {
    return (
      <div className="accordion-wrapper container text-center mt-5">
        <Chevron />
        {/* Using UncontrolledCollapse since this
        component doesn't need to handle state */}
        <UncontrolledCollapse toggler="#toggler">
          <Card className="card">
            {/* Allows LineGraph component to be nested inside of the Card component */}
            {this.props.children}
            <CardBody className="card-body text-left">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default Accordion;
