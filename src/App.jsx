
import React, { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null); //manages data fetched from api
  const [loading, setLoading] = useState(true); //manages loadind data

//will fetch the data from the public json and load into the charts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('financial_data.json'); 
        const data = await response.json();
        setChartData(data); 
        setLoading(false);  
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);  
      }
    };

    fetchData();
  }, []);  

  // Will display loading message 
  if (loading) {
    return <div>Loading...</div>;
  }

  // will render the charts
  return (
    <div className="App">
      <h1>Financial charts</h1>
      <div>
        <h2>Monthly Sales (Bar Chart)</h2>
        <BarChart data={chartData.monthlySales} />

        <h2>Monthly Profits (Line Chart)</h2>
        <LineChart data={chartData.monthlyProfits} />

        <h2>Expenses vs Profits (Scatter Chart)</h2>
        <ScatterChart data={chartData.expensesVsProfits} />

        <h2>Combined Metrics (Bubble Chart)</h2>
        <BubbleChart data={chartData.combinedMetrics} />
      </div>
    </div>
  );
};

export default App;
