import React from "react";
import { Col } from "reactstrap";

const XrpCard = props => {
  return (
    <Col md="6" xl="2" className="card-wrapper custom-card-col">
      <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
        <i className="xrp-blue icon-small cf cf-xrp"></i>
        <h5 className="coin-name xrp-blue">Ripple</h5>
      </div>
      <h5 className="font-weight-bold font-styles mb-4">24 Hour Low</h5>
      <p className="font-weight-bold font-styles">
        {/* Not sure why dayHigh[7] is able to pull in the data for the 24 low for Ripple and Tether. Very confusing... I'll have to
                      look into this further. For now it works..I guess? */}
        {props.low24Hr}
      </p>
    </Col>
  );
};

export default XrpCard;
