

import React from 'react';
import ChartComponent from 'chart component'

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly profits',
          data: data.profits,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const lineChartOptions = {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Months',  // X axis labelled with "Months"
          },
        },
        y: {
          title: {
            display: true,
            text: 'Profits', // Y axis labelled with profits
          },
          beginAtZero: false,  
        },
      },
    }

     return <ChartComponent type = "line" data= {lineChartData} options= {lineChartOptions} />;
};
export default LineChart
