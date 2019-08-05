import React, { Component } from "react";
import Chart from "chart.js";

export default class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  chart = React.createRef();

  // Use this function to add new data to chart? Not sure how to implement
  /* addData(chart, data) {
    chart.data.datasets.forEach(dataset => {
      dataset.data.push(data);
    });
    chart.update();
  } */

  componentDidMount() {
    const myChartRef = this.chart.current.getContext("2d");
    const gradient = myChartRef.createLinearGradient(20, 500, 10, 20);
    gradient.addColorStop(0, "#75C6FF");
    gradient.addColorStop(1, "#3E0B80");
    // Custom plugin to change chart area background color
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        if (
          chart.config.options.chartArea &&
          chart.config.options.chartArea.backgroundColor
        ) {
          const ctx = chart.chart.ctx;
          const chartArea = chart.chartArea;

          ctx.save();
          ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
          ctx.fillRect(
            chartArea.left,
            chartArea.top,
            chartArea.right - chartArea.left,
            chartArea.bottom - chartArea.top
          );
          ctx.restore();
        }
      }
    });
    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            data: this.state.chartData,
            backgroundColor: gradient,
            pointBackgroundColor: "#fff",
            pointBorderColor: gradient,
            pointRadius: "5",
            hoverBackgroundColor: "#75C6FF",
            hoverBorderColor: gradient
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "#535356"
              },
              ticks: {
                fontColor: "#87889C"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: "#535356"
              },
              ticks: {
                fontColor: "#87889C"
              }
            }
          ]
        }
      }
    });
    const getChartData = () => {
      fetch(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD"
      )
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          const bitcoinPrice = myJson.BTC.USD;
          this.setState({ chartData: bitcoinPrice });
          console.log(JSON.stringify(myJson));
        });
    };
    getChartData();
  }
  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chart} />
      </div>
    );
  }
}
