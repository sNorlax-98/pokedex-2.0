import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
const Chart = ({data}) => {

    return <div style={{width:700}}>
    <Bar data={data} />
        </div>
    
}

export default Chart;