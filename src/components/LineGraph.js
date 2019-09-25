import React, { Component } from "react";
import Chart from "chart.js";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { chart: null };
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
    let theChart = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: this.props.chartLabels,
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
        maintainAspectRatio: false,
        tooltips: {
          // callback function to add $ sign to tooltips
          callbacks: {
            label: function(tooltipItems) {
              return "$" + tooltipItems.yLabel.toLocaleString();
            }
          }
        },
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                padding: 10,
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
                // callback function to add $ to y-axis
                userCallback: function(tick) {
                  return " $" + tick.toLocaleString();
                },
                fontColor: "#87889C"
              }
            }
          ]
        }
      }
    });
    this.setState({ chart: theChart });
  }
  componentWillReceiveProps(nextProps) {
    // update chart according to prop change
    this.state.chart.data.datasets.forEach(dataset => {
      dataset.data.push(nextProps.chartData);
      dataset.data.push(nextProps.chartLabels);
      this.state.chart.update();
    });
  }

  render() {
    return (
      <div className="canvas-wrapper">
        <canvas id="myLineChart" ref={this.chart} />
      </div>
    );
  }
}

export default LineGraph;
