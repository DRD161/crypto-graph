import React from "react";
import { Col } from "reactstrap";

const EthCard = props => {
  return (
    <Col md="6" xl="2" className="card-wrapper custom-card-col">
      <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
        <i className="etc-purple icon-small cf cf-etc"></i>
        <h5 className="coin-name etc-purple">Ethereum</h5>
      </div>
      <h5 className="font-weight-bold font-styles mb-4">Market Cap</h5>
      <p className="font-weight-bold font-styles">{props.cap}</p>
    </Col>
  );
};

export default EthCard;
