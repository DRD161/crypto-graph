import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";

import axios from "axios";

class ChartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { chartData: [], chartLabels: [], singlePrice: [] };
    }

    componentDidMount() {
        axios
            // call multiple API endpoints
            .all([
                axios.get(
                    "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&aggregate=1&limit=6"
                ),
                axios.get(
                    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"
                ),
                axios.get(
                    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD"
                )
            ])
            .then(response => {
                console.log(response[2].data.RAW.BTC.USD.LOW24HOUR);
                // convert API price data to dollar amount
                const coinPrice =
                    "$" +
                    response[1].data.USD.toFixed(2).replace(
                        /\d(?=(\d{3})+\.)/g,
                        "$&,"
                    );
                // gather 7 day historical price data
                const bitcoinPrice = response[0].data.Data.map(coin => {
                    const weeksPrices = this.state.chartData.push(coin.close);
                    // take time data and multiply it by 1000 then convert to date
                    const convertToDate = new Date(
                        coin.time * 1000
                    ).toLocaleDateString();
                    // update chart labels using time data
                    const coinTimes = this.state.chartLabels.push(
                        convertToDate
                    );
                    /* Javascript does not allow you to return multiple values natively.
          you can simulate this behavior by returning an array of values*/
                    return [weeksPrices, coinTimes, coinPrice];
                });

                this.setState({
                    chartData: bitcoinPrice[0],
                    chartLabels: bitcoinPrice[1],
                    singlePrice: bitcoinPrice[2]
                });
            });
    }

    render() {
        const { chartData } = this.state;
        const { chartLabels } = this.state;
        const { singlePrice } = this.state;
        return (
            <section>
                <Container fluid className="bar-graph-wrapper text-center mt-3">
                    <Row className="px-5">
                        <Col md="6">
                            <div className="btc-wrapper d-flex align-items-center mb-2">
                                <i className="btc-orange icon-large cf cf-btc-alt mr-3"></i>
                                <h4 className="btc-orange coin-name">
                                    Bitcoin
                                </h4>
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
                            <BarGraph
                                chartData={chartData}
                                chartLabels={chartLabels}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="text-center mt-3">
                    <Row className="mt-3 justify-content-between card-row">
                        <Col className="card-wrapper custom-card-col col-xl-2 col-md-6">
                            <div className="btc-wrapper d-flex justify-content-between align-items-center mb-2">
                                <i className="btc-orange icon-small cf cf-btc-alt"></i>
                                <h5 className="coin-name btc-orange">
                                    Bitcoin
                                </h5>
                            </div>
                            <p className="font-weight-bold font-styles">
                                Current Price
                            </p>
                        </Col>
                        <Col className="card-wrapper custom-card-col col-xl-2 col-md-6">
                            <div className="btc-wrapper d-flex justify-content-between align-items-center mb-2">
                                <i className="btc-orange icon-small cf cf-btc-alt"></i>
                                <h5 className="coin-name btc-orange">
                                    Bitcoin
                                </h5>
                            </div>
                            <p className="font-weight-bold font-styles">
                                Current Price
                            </p>
                        </Col>
                        <Col className="card-wrapper custom-card-col col-xl-2 col-md-6">
                            <div className="btc-wrapper d-flex justify-content-between align-items-center mb-2">
                                <i className="btc-orange icon-small cf cf-btc-alt"></i>
                                <h5 className="coin-name btc-orange">
                                    Bitcoin
                                </h5>
                            </div>
                            <p className="font-weight-bold font-styles">
                                Current Price
                            </p>
                        </Col>
                        <Col className="card-wrapper custom-card-col col-xl-2 col-md-6">
                            <div className="btc-wrapper d-flex justify-content-between align-items-center mb-2">
                                <i className="btc-orange icon-small cf cf-btc-alt"></i>
                                <h5 className="coin-name btc-orange">
                                    Bitcoin
                                </h5>
                            </div>
                            <p className="font-weight-bold font-styles">
                                Current Price
                            </p>
                        </Col>
                        <Col className="card-wrapper custom-card-col col-xl-2 col-md-6">
                            <div className="btc-wrapper d-flex justify-content-between align-items-center mb-2">
                                <i className="btc-orange icon-small cf cf-btc-alt"></i>
                                <h5 className="coin-name btc-orange">
                                    Bitcoin
                                </h5>
                            </div>
                            <p className="font-weight-bold font-styles">
                                Current Price
                            </p>
                        </Col>
                        <Col className="card-wrapper custom-card-col col-xl-2 col-md-6">
                            <div className="btc-wrapper d-flex justify-content-between align-items-center mb-2">
                                <i className="btc-orange icon-small cf cf-btc-alt"></i>
                                <h5 className="coin-name btc-orange">
                                    Bitcoin
                                </h5>
                            </div>
                            <p className="font-weight-bold font-styles">
                                Current Price
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default ChartContainer;
