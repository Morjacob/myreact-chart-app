import ChartComponent from 'chart component'

const BubbleChart = ({ data }) => {
    const bubbleChartData = {
      labels: financial_data.months,
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

    const bubbleChartOptions = {
        scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Sales ($)',
              },
              beginAtZero: true,
            },
          },
        };
     return <ChartComponent type = "bubble" data= {bubbleChartData} options= {bubbleChartOptions} />;
};
export default BubbleChart
