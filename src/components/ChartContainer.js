import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";

import BarGraph from "./BarGraph";
import BtcCard from "./BtcCard";
import EthCard from "./EthCard";
import LtcCard from "./LtcCard";
import DashCard from "./DashCard";
import UsdtCard from "./UsdtCard";
import XrpCard from "./XrpCard";
import BtcHeader from "./chartHeader";
import BuyButton from "./Button";

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
          "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&aggregate=1&limit=6&api_key=ENTER KEY HERE"
        ),
        axios.get(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,DASH,XRP,USDT&tsyms=USD&api_key=ENTER KEY HERE"
        )
      ])
      .then(response => {
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
        <BtcHeader single={singlePrice[2]} />
        <BarGraph chartData={chartData} chartLabels={chartLabels} />
        <Container fluid className="text-center">
          <Row className="justify-content-between card-row">
            <BtcCard median={medianPrice[3]} />
            <EthCard cap={marketCap[4]} />
            <LtcCard current={currentPrice[5]} />
            <DashCard high24Hr={dayHigh[6]} />
            <XrpCard low24Hr={dayHigh[7]} />
            <UsdtCard todaysHigh={dayHigh[8]} />
          </Row>
        </Container>
        <BuyButton />
      </section>
    );
  }
}

export default ChartContainer;
