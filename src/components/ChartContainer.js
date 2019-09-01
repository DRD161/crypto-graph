import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import LineGraph from "./LineGraph";
import axios from "axios";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: [] };
  }

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&aggregate=1&limit=6"
      )
      .then(response => {
        const bitcoinPrice = response.data.Data.map(price => {
          console.log(price.close);
          return this.state.chartData.push(price.close);
        });
        this.setState({ chartData: bitcoinPrice });
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
