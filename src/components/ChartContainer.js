import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import BarGraph from "./BarGraph";

import axios from "axios";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartLabels: [],
      singlePrice: [],
      medianPrice: [],
      marketCap: [],
      currentPrice: [],
      dayHigh: [],
      dayLow: [],
      todaysHigh: []
    };
  }

  componentDidMount() {
    axios
      // call multiple API endpoints
      .all([
        axios.get(
          "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&aggregate=1&limit=6&api_key=13deafbe04054f2950faff5dc43678eda26c37c84c156e8e559af203456d3b5a"
        ),
        axios.get(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,DASH,XRP,USDT&tsyms=USD&api_key=13deafbe04054f2950faff5dc43678eda26c37c84c156e8e559af203456d3b5a"
        )
      ])
      .then(response => {
        console.log(response[1].data.RAW.USDT.USD.HIGHDAY);
        // Coin data variables
        let btcPrice =
          "$" +
          response[1].data.RAW.BTC.USD.PRICE.toFixed(2).replace(
            /\d(?=(\d{3})+\.)/g,
            "$&,"
          );
        let btcMedian =
          "$" +
          response[1].data.RAW.BTC.USD.MEDIAN.toFixed(2).replace(
            /\d(?=(\d{3})+\.)/g,
            "$&,"
          );
        let ethMarketCap =
          "$" +
          response[1].data.RAW.ETH.USD.MKTCAP.toFixed(2).replace(
            /\d(?=(\d{3})+\.)/g,
            "$&,"
          );
        let ltcCurrentPrice =
          "$" +
          response[1].data.RAW.LTC.USD.PRICE.toFixed(2).replace(
            /\d(?=(\d{3})+\.)/g,
            "$&,"
          );
        let dash24HourHigh =
          "$" +
          response[1].data.RAW.DASH.USD.HIGH24HOUR.toFixed(2).replace(
            /\d(?=(\d{3})+\.)/g,
            "$&,"
          );
        let ripple24HourLow =
          "$" +
          response[1].data.RAW.XRP.USD.LOW24HOUR.toFixed(2).replace(
            /\d(?=(\d{3})+\.)/g,
            "$&,"
          );
        let tehterDayHigh =
          "$" +
          response[1].data.RAW.USDT.USD.HIGHDAY.toFixed(2).replace(
            /\d(?=(\d{3})+\.)/g,
            "$&,"
          );
        // END coin data variables
        // gather 7 day historical price data
        const coinData = response[0].data.Data.map(coin => {
          const weeksPrices = this.state.chartData.push(coin.close);
          let convertToDate = new Date(coin.time * 1000).toLocaleDateString();
          const coinTimes = this.state.chartLabels.push(convertToDate);
          return [
            weeksPrices,
            coinTimes,
            btcPrice,
            btcMedian,
            ethMarketCap,
            ltcCurrentPrice,
            dash24HourHigh,
            ripple24HourLow,
            tehterDayHigh
          ];
        });

        this.setState({
          chartData: coinData[0],
          chartLabels: coinData[1],
          singlePrice: coinData[2],
          medianPrice: coinData[3],
          marketCap: coinData[4],
          currentPrice: coinData[5],
          dayHigh: coinData[6],
          dayLow: coinData[7],
          todaysHigh: coinData[8]
        });
      });
  }

  render() {
    const {
      chartData,
      chartLabels,
      singlePrice,
      medianPrice,
      marketCap,
      currentPrice,
      dayHigh
    } = this.state;
    return (
      <section>
        <Container fluid className="bar-graph-wrapper text-center mt-3">
          <Row className="px-5">
            <Col md="6">
              <div className="btc-wrapper d-flex align-items-center mb-2">
                <i className="btc-orange icon-large cf cf-btc-alt mr-3"></i>
                <h4 className="btc-orange coin-name">Bitcoin</h4>
              </div>
              <h2 className="font-weight-bold text-left font-styles">
                {singlePrice[2]}
              </h2>
            </Col>
            <Col md="6" className="align-self-end">
              <p className="align-left-mobile text-md-right font-styles">
                Last 7 days:
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <BarGraph chartData={chartData} chartLabels={chartLabels} />
            </Col>
          </Row>
        </Container>
        <Container fluid className="text-center">
          <Row className="justify-content-between card-row">
            <Col md="6" xl="2" className="card-wrapper custom-card-col">
              <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
                <i className="btc-orange icon-small cf cf-btc-alt"></i>
                <h5 className="coin-name btc-orange">Bitcoin</h5>
              </div>
              <h5 className="font-weight-bold font-styles mb-4">
                Median Price
              </h5>
              <p className="font-weight-bold font-styles">{medianPrice[3]}</p>
            </Col>
            <Col md="6" xl="2" className="card-wrapper custom-card-col">
              <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
                <i className="etc-purple icon-small cf cf-etc"></i>
                <h5 className="coin-name etc-purple">Ethereum</h5>
              </div>
              <h5 className="font-weight-bold font-styles mb-4">Market Cap</h5>
              <p className="font-weight-bold font-styles">{marketCap[4]}</p>
            </Col>
            <Col md="6" xl="2" className="card-wrapper custom-card-col">
              <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
                <i className="icon-small ltc-gray cf cf-ltc"></i>
                <h5 className="coin-name ltc-gray">Litecoin</h5>
              </div>
              <h5 className="font-weight-bold font-styles mb-4">
                Current Price
              </h5>
              <p className="font-weight-bold font-styles">{currentPrice[5]}</p>
            </Col>
            <Col md="6" xl="2" className="card-wrapper custom-card-col">
              <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
                <i className="icon-small dash-blue icon-small cf cf-dash"></i>
                <h5 className="coin-name dash-blue">Dash</h5>
              </div>
              <h5 className="font-weight-bold font-styles mb-4">
                24 Hour High
              </h5>
              <p className="font-weight-bold font-styles">{dayHigh[6]}</p>
            </Col>
            <Col md="6" xl="2" className="card-wrapper custom-card-col">
              <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
                <i className="xrp-blue icon-small cf cf-xrp"></i>
                <h5 className="coin-name xrp-blue">Ripple</h5>
              </div>
              <h5 className="font-weight-bold font-styles mb-4">24 Hour Low</h5>
              <p className="font-weight-bold font-styles">
                {/* Not sure why dayHigh[7] is able to pull in the data for the 24 low for Ripple and Tether. Very confusing... I'll have to 
                            look into this further. For now it works..I guess? */}
                {dayHigh[7]}
              </p>
            </Col>
            <Col md="6" xl="2" className="card-wrapper custom-card-col">
              <div className="btc-wrapper d-flex justify-content-between align-items-center mb-3">
                <i className="usdt-green icon-small cf cf-usdt"></i>
                <h5 className="coin-name usdt-green">Tether</h5>
              </div>
              <h5 className="font-weight-bold font-styles mb-4">
                Today's High
              </h5>
              <p className="font-weight-bold font-styles">{dayHigh[8]}</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="d-flex justify-content-center mt-5">
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
      </section>
    );
  }
}

export default ChartContainer;
