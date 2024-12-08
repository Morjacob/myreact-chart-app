
import React from 'react';
import ChartComponent from 'chart component';

const ScatterChart = ({ data }) => {

  const scatterChartData = {
    datasets: [
      {
        label: 'Expenses vs. Profits', 
        data: data.expenses.map((expense, index) => ({ //used to find array of data points
          x: expense,              
          y: data.profits[index],  
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',  
        borderColor: 'rgba(54, 162, 235, 0.6)',       
        borderWidth: 1,                             
        radius: 5,                               
      },
    ],
  };

  const scatterChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Expenses',  // x axis label
        },
      },
      y: {
        title: {
          display: true,
          text: 'Profits',  // y axis label
        },
        beginAtZero: false,  
      },
    },
  };

  
  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;
