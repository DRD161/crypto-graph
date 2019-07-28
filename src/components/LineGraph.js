import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // API data goes here
      data: [65, 59, 80, 81, 56, 55, 40],
    }
  ]
};

class LineGraph extends Component {
  render() {
    return (
      <div className="graphWrapper">
        <h2>Crypto Monitor</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default LineGraph;
