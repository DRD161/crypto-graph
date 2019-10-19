import React from "react";
import { Col, Row } from "reactstrap";

const BtcHeader = props => {
  return (
    <Row className="px-5">
      <Col md="6">
        <div className="btc-wrapper d-flex align-items-center mb-2">
          <i className="btc-orange icon-large cf cf-btc-alt mr-3"></i>
          <h4 className="btc-orange coin-name">Bitcoin</h4>
        </div>
        <h2 className="font-weight-bold text-left font-styles">
          {props.single}
        </h2>
      </Col>
      <Col md="6" className="align-self-end">
        <p className="align-left-mobile text-md-right font-styles">
          Last 7 days:
        </p>
      </Col>
    </Row>
  );
};

export default BtcHeader;
