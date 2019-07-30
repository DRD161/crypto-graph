import React from "react";
import { Container, Row, Col } from "reactstrap";

const ChartContainer = props => {
  return (
    <div>
      <Container className="graph-wrapper text-center mt-5" fluid>
        <Row>
          <Col className="mt-3" md="12">
            {/* Hard coded placeholder. Use API to get name and abbreviation of coin */}
            <p className="text-left mt-3 bitcoin-symbol">Bitcoin(BTC)</p>
          </Col>
          <Col md="12">
            {/* Hard coded placeholder. Use API to get price of coin */}
            <p className="text-left mt-3 bitcoin-symbol">Price Here</p>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            {/* Allows LineGraph component to be nested inside of the ChartContainer component */}
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChartContainer;
