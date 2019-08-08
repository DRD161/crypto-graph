import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import LineGraph from "./LineGraph";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: [] };
  }

  componentDidMount() {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        const bitcoinPrice = myJson.BTC.USD;
        this.setState({ chartData: bitcoinPrice });
        console.log(JSON.stringify(myJson));
      });
  }

  render() {
    const { chartData } = this.state;
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
              <LineGraph chartData={chartData} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChartContainer;
