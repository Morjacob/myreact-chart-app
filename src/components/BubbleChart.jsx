
import React from 'react';
import ChartComponent from 'chart component'

const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: data.sales.map((sale, index) => ({
      label: `Data Point ${index + 1}`,  //label for each bubble data point
      x: data.expenses[index],           
      y: data.profits[index],            
      r: Math.sqrt(sale) * 2,  //determines size of the bubble          
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    })),
  };

  
  const bubbleChartOptions = {
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
          text: 'Profits',   // y axis label
        },
        beginAtZero: true,     
      },
    },
  };

  return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;
