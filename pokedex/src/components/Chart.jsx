import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../pages/Pages.css";
const Chart = ({ data }) => {
  return (
    <div className="chart-div" style={{ width: 900 }}>
      <Bar data={data} />
    </div>
  );
};

export default Chart;
