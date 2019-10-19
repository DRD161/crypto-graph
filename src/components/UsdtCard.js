import React from "react";
import { Col } from "reactstrap";

const UsdtCard = props => {
  return (
    <Col md="6" xl="2" className="card-wrapper custom-card-col">
      <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
        <i className="usdt-green icon-small cf cf-usdt"></i>
        <h5 className="coin-name usdt-green">Tether</h5>
      </div>
      <h5 className="font-weight-bold font-styles mb-4">Today's High</h5>
      <p className="font-weight-bold font-styles">{props.todaysHigh}</p>
    </Col>
  );
};

export default UsdtCard;
