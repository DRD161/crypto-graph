import React, { Component } from "react";
import Chart from "chart.js";
import axios from "axios";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: []
    };
  }

  chartRef = React.createRef();

  componentDidMount() {
    // Make api request using axios
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key{13deafbe04054f2950faff5dc43678eda26c37c84c156e8e559af203456d3b5a}"
      )
      .then(response => {
        console.log(response);
        this.setState({
          price: response
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    // Create gradient background
    const myChartRef = this.chartRef.current.getContext("2d");
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
        labels: ["Jan", "Feb", "March", "April", "May"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: gradient,
            pointBackgroundColor: "#fff",
            pointBorderColor: gradient,
            pointRadius: "5",
            hoverBackgroundColor: "#75C6FF",
            hoverBorderColor: gradient,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      options: {
        chartArea: {
          backgroundColor: ""
        },
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
  }
  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default LineGraph;
