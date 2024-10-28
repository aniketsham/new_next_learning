 "use client";

// import { AreaChart, CompositeChart } from '@mantine/charts';
// import { Paper, Text } from '@mantine/core';
// import chartData from "@/lib/graph.json";

// interface ChartTooltipProps {
//   label: string;
//   payload: Record<string, any>[] | undefined;
// }


// function ChartTooltip({ label, payload }: ChartTooltipProps) {
//   if (!payload) return null;
  
//   const data=payload[0]?.payload
//   console.log(data)
//   return (
//     <Paper px="md" py="sm" withBorder shadow="md" radius="md">
//       <Text fw={500} mb={5}>
//         {label}
//       </Text>
//       {payload.map((item) => (
//         <Text key={item.name} style={{ color: item.color }} fz="sm">
//           {item.name}: {item.value}
//         </Text>
//       ))}
//     </Paper>
//   );
// }

// export default function Demo() {
//   const newData = chartData.response.data.slice(-100);
 
//   const scaledData = newData.map((data) => ({
//     ...data,
//    scaledOpen: data.open ,  // Scale down `open` values for bar chart only
//   }));
//   console.log(scaledData)

//   return (
//     <div className='pt-20'>
//       <CompositeChart
//         h={300}
//         data={scaledData}
//         dataKey="date"
        
        
//          yAxisProps={{ tickMargin: 15, orientation: 'right' }}
//          yAxes={[
//           { yAxisId: 'left', orientation: 'left', domain: [0, Math.max(...scaledData.map(d => d.openScaled)) * 1.2] }, 
//           { yAxisId: 'right', orientation: 'right',scale:"pow", }, // Scale for area chart
//          ]}
        
//         series={[
//           { name:'open' , color: 'red', type: 'bar' , yAxisId:'left'   },
//           { name: "close", color: 'green', type: 'area' ,yAxisId: 'right'  },
//         ]}
        
//         curveType="natural"
//         tickLine="xy"
//         xAxisLabel="Date"
//         tooltipProps={{
//           content: (props) => (<ChartTooltip {...props} />),
//         }}
//       />
//     </div>
//   );
// }

// import React from 'react';
// import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// import chartData from "@/lib/graph.json"
// const data = [
//   {
//     name: 'Page A',
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490,
//   },
//   {
//     name: 'Page B',
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590,
//   },
//   {
//     name: 'Page C',
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350,
//   },
//   {
//     name: 'Page D',
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480,
//   },
//   {
//     name: 'Page E',
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460,
//   },
//   {
//     name: 'Page F',
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380,
//   },
// ];


// const CustomTooltip = ({ active, payload, label }) => {
  
//   if (active && payload && payload.length) {
//     const data=payload[0].payload
 
//     return (
//       <div className="custom-tooltip bg-white">
//         <p className="label">open:<strong>{data.open}</strong></p>
//         <p className="label">close:<strong>{data.close}</strong></p>
//         <p className="label">volume:<strong>{data.volume}</strong></p>
//       </div>
//     );
//   }

//   return null;
// };

// const areaData = [
//   { date1: '2023-01-01', open: 26000, close: 26500 },
//   { date1: '2023-01-02', open: 26200, close: 26300 },
//   { date1: '2023-01-03', open: 26100, close: 26450 },
// ];

// // Sample data for BarChart (Bottom Chart)
// const barData = [
//   { date2: '2023-01-01', volume: 15000 },
//   { date2: '2023-01-02', volume: 15500 },
//   { date2: '2023-01-03', volume: 14500 },
// ];

// export default function Example(){
//   const newData=chartData.response.data
//   const scaledData = newData.map((data) => ({
//         ...data,
//        scaledOpen: data.open*0.3 ,  // Scale down `open` values for bar chart only
//       }));

//   return (
//     <>
//     <ResponsiveContainer className="flex flex-col h-screen" width="100%" height={600}>
      
//         {/* Top Area Chart */}
//         <ComposedChart data={newData} height={300} margin={{ top: 20, right: 30, left: 20 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" label={{ value: "Date 1", position: "insideBottomRight", offset: 0 }} />
//           <YAxis yAxisId="shared" orientation="left" />
//           <Tooltip />
//           <Legend />
//           <Area dataKey="open" fill="#8884d8" stroke="#8884d8" yAxisId="shared" />
          
//         </ComposedChart>
         
//         {/* Bottom Bar Chart */}
//         <ComposedChart data={newData} height={300} margin={{  right: 30, left: 20, bottom: 20 }}>
//         <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" label={{ value: "Date 2", position: "insideBottomRight", offset: 0 }} />
//           <YAxis yAxisId="shared" orientation="left" />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="high" fill="#82ca9d" yAxisId="shared" barSize={20} />
//         </ComposedChart>
  
//     </ResponsiveContainer>

//     </>
//   )
// }


import React from 'react';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const barData = [
  { date: '2023-01-01', volume: 10000, close: 21000 },
  { date: '2023-01-02', volume: 12000, close: 20000 },
  { date: '2023-01-03', volume: 11000, close: 22000  },
];

const areaData = [
  { date: '2023-01-01', close: 20000 },
  { date: '2023-01-02', close: 22000 },
  { date: '2023-01-03', close: 21000 },
];

// Calculate the Y-axis domain to cover both charts' ranges
const barMax = Math.max(...barData.map(d => d.volume));
const areaMax = Math.max(...areaData.map(d => d.close));
const yDomain = [0, areaMax]; // Use max from Area data

export default function StackedCharts() {
  return (
    <ResponsiveContainer width="100%" height={600}>
     
        {/* Bottom Bar Chart */}
        <ComposedChart data={barData} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: "Date (Bar Chart)", position: "insideBottom", offset: 0 }} />
          <YAxis domain={yDomain} />
          <Tooltip />
          <Legend />
          <Bar dataKey="volume" fill="#82ca9d" barSize={20} />
        </ComposedChart>

        {/* Top Area Chart */}
        <ComposedChart data={areaData} height={300} margin={{ top: 0, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: "Date (Area Chart)", position: "insideBottom", offset: 0 }} />
          <YAxis domain={yDomain} hide /> {/* Hide Y-axis here to share with Bar chart */}
          <Tooltip />
          <Legend />
          <Area dataKey="close" fill="#8884d8" stroke="#8884d8" />
        </ComposedChart>
   
    </ResponsiveContainer>
  );
}
