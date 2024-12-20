
import React from 'react';
import ChartComponent from 'ChartComponent.js'


const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const barChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months', // x axis
            },
          },
          y: {
            title: {
              display: true,
              text: 'Sales', // y axis
            },
            beginAtZero: true,
          },
        },
      }
    
     return <ChartComponent type = "bar" data= {barChartData} options= {barChartOptions} />;
};
export default BarChart
