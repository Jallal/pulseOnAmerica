// =========================================================================
// File: frontend/src/components/charts/DoughnutChart.js
// Description: Renders a doughnut chart for vote proportions.
// =========================================================================
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = ({ data }) => {
  const chartData = {
    labels: ['Support', 'Oppose', 'Neutral'],
    datasets: [{ label: 'Vote Percentage', data: [data.support, data.oppose, data.neutral], backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(255, 206, 86, 0.8)'], borderColor: ['rgba(255, 255, 255, 1)'], borderWidth: 2 }],
  };
  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Vote Proportions', font: { size: 16 } } } };
  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;