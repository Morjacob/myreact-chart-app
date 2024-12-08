
import ChartComponent from 'chart component';

const ScatterChart = ({ data }) => {

  const scatterChartData = {
    datasets: [
      {
        label: 'Expenses vs. Profits', 
        data: data.expenses.map((expense, index) => ({
          x: expense,              
          y: data.profits[index],  
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',  
        borderColor: 'rgba(75, 192, 192, 1)',       
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
          text: 'Expenses',  
        },
      },
      y: {
        title: {
          display: true,
          text: 'Profits',  
        },
        beginAtZero: false,  
      },
    },
  };

  
  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;