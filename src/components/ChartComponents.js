import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null); //canvas element reference point
    const chartInstanceRef = useRef(null);// reference for future updates to the charts

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

    // destroys existing chart so new data can be added
        if (chartInstanceRef.current) { 
            chartInstanceRef.current.destroy();
          }
    // creates new chart instances with type, data, and options
          chartInstanceRef.current = new Chart(ctx, {
            type,
            data,
            options,
          });

          return () => {
            if (chartInstanceRef.current) {
              chartInstanceRef.current.destroy();
              chartInstanceRef.current = null;
            }
        }; 
     }, [type, data, options]);
     
    // allows the chart to be drawn
     return <canvas ref={chartRef}></canvas>;}
     export default ChartComponent; 