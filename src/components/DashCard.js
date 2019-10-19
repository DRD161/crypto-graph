import React from "react";
import { Col } from "reactstrap";

const DashCard = props => {
  return (
    <Col md="6" xl="2" className="card-wrapper custom-card-col">
      <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
        <i className="icon-small dash-blue icon-small cf cf-dash"></i>
        <h5 className="coin-name dash-blue">Dash</h5>
      </div>
      <h5 className="font-weight-bold font-styles mb-4">24 Hour High</h5>
      <p className="font-weight-bold font-styles">{props.high24Hr}</p>
    </Col>
  );
};

export default DashCard;
