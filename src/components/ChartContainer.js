import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import LineGraph from "./LineGraph";
import axios from "axios";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: [], chartLabels: [] };
  }

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&aggregate=1&limit=6"
      )
      .then(response => {
        const bitcoinPrice = response.data.Data.map(coin => {
          // log for debugging purposes
          console.log(coin.close);
          console.log(coin.time);
          const coinPrices = this.state.chartData.push(coin.close);
          // take time data and multiply it by 1000 then convert to date
          const convertToDate = new Date(coin.time * 1000).toLocaleDateString();
          // update chart labels using time data
          const coinTimes = this.state.chartLabels.push(convertToDate);
          /* Javascript does not allow you to return multiple values natively.
          you can simulate this behavior by returning an array of values*/
          return [coinPrices, coinTimes];
        });
        this.setState({
          chartData: bitcoinPrice[0],
          chartLabels: bitcoinPrice[1]
        });
      });
  }

  render() {
    const { chartData } = this.state;
    const { chartLabels } = this.state;
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
              <LineGraph chartData={chartData} chartLabels={chartLabels} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChartContainer;
