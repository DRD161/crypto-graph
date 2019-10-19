import React from "react";
import { Col } from "reactstrap";

const LtcCard = props => {
  return (
    <Col md="6" xl="2" className="card-wrapper custom-card-col">
      <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
        <i className="icon-small ltc-gray cf cf-ltc"></i>
        <h5 className="coin-name ltc-gray">Litecoin</h5>
      </div>
      <h5 className="font-weight-bold font-styles mb-4">Current Price</h5>
      <p className="font-weight-bold font-styles">{props.current}</p>
    </Col>
  );
};

export default LtcCard;
