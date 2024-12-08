import ChartComponent from 'chart component'

const LineChart = ({ data }) => {
    const LineChartData = {
      labels: financial_data.months,
      datasets: [
        {
          label: 'Monthly profits',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const LineChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
     };
     return <ChartComponent type = "line" data= {LineChartData} options= {LineChartOptions} />;
};
export default LineChart
