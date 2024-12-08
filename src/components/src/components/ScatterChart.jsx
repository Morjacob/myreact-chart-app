import ChartComponent from 'chart component'

const ScatterChart = ({ data }) => {
    const ScatterChartData = {
      labels: financial_data.months,
      datasets: [
        {
          label: 'Expenses vs. Profits',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const ScatterChartOptions = {
        scales: {
            x: {
              title: {
                display: true,
                text: 'Expenses ($)',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Profits ($)',
              },
              beginAtZero: true,
            },
          },
        };
    
     return <ChartComponent type = "Scatter" data= {ScatterChartData} options= {ScatterChartOptions} />;
};
export default ScatterChart
