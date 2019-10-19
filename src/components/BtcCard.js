import React from "react";
import { Col } from "reactstrap";

const BtcCard = props => {
  return (
    <Col md="6" xl="2" className="card-wrapper custom-card-col">
      <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
        <i className="btc-orange icon-small cf cf-btc-alt"></i>
        <h5 className="coin-name btc-orange">Bitcoin</h5>
      </div>
      <h5 className="font-weight-bold font-styles mb-4">Median Price</h5>
      <p className="font-weight-bold font-styles">{props.median}</p>
    </Col>
  );
};

export default BtcCard;
