
import ChartComponent from 'chart component'

const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: data.sales.map((sale, index) => ({
      label: `Data Point ${index + 1}`,  
      x: data.expenses[index],           
      y: data.profits[index],            
      r: Math.sqrt(sale) * 2,            
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
          text: 'Expenses',  
        },
      },
      y: {
        title: {
          display: true,
          text: 'Profits',   
        },
        beginAtZero: true,     
      },
    },
  };

  return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;
