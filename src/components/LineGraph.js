import React, { Component } from "react";
import Chart from "chart.js";

class LineGraph extends Component {

  constructor(props){
    super(props)
    this.state = { chart :null }
  }
  chart = React.createRef();

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
    let thechart = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            backgroundColor: gradient,
            pointBackgroundColor: "#fff",
            pointBorderColor: gradient,
            pointRadius: "5",
            hoverBackgroundColor: "#75C6FF",
            hoverBorderColor: gradient,
            data: this.props.chartData
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
    this.setState({ chart: thechart })
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.chartData !== []) {
      this.state.chart.data.datasets.forEach((dataset) => {
        dataset.data.push(nextProps.chartData);
      });
      this.state.chart.update();
    }
  }


  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chart} />
      </div>
    );
  }
}

export default LineGraph;
