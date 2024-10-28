import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ApexCharts (because Next.js is server-rendered)
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CandlestickChart = ({ data }) => {
    const chartOptions = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'Candlestick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            tooltip: {
                enabled: true,
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (seriesName) => seriesName,
                    },}
            },
            opposite: true,
            
           
        }
    };

    const series = [
        {
            data: data.map((item) => ({
                x: new Date(`${item.date} ${item.time}`).getTime(),
                y: [item.open, item.high, item.low, item.close]
            }))
        }
    ];

    return (
        <div>
            <Chart
                options={chartOptions}
                series={series}
                type="candlestick"
                height={350}
            />
        </div>
    );
};

export default CandlestickChart;
