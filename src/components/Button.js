import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const BuyButton = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center mt-xs-3 mb-3 mt-md-5"
    >
      <Col sm="12" md="8" className="d-flex justify-content-center px-0">
        <Row className="w-100">
          <Button
            href="https://www.coinbase.com/"
            color="primary"
            className="purchase-btn font-weight-bold"
          >
            purchase coins
          </Button>
        </Row>
      </Col>
    </Container>
  );
};

export default BuyButton;
