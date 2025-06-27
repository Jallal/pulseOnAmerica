// =========================================================================
// File: frontend/src/components/charts/BarChart.js
// Description: Renders a bar chart for vote distribution.
// =========================================================================
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: ['Support', 'Oppose', 'Neutral'],
    datasets: [{ label: '# of Votes', data: [data.support, data.oppose, data.neutral], backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)'], borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'], borderWidth: 1 }],
  };
  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, title: { display: true, text: 'Vote Distribution', font: { size: 16 } } }, scales: { y: { beginAtZero: true } } };
  return <Bar data={chartData} options={options} />;
};

export default BarChart;