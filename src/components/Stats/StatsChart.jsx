import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '01', value: 30 },
  { name: '05', value: 45 },
  { name: '10', value: 25 },
  { name: '15', value: 60 },
  { name: '20', value: 35 },
  { name: '25', value: 70 },
  { name: '30', value: 45 },
];

const StatsChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg h-64">
      <h3 className="text-lg font-semibold mb-4">Monthly Statistics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#8B5CF6" 
            fillOpacity={1} 
            fill="url(#colorValue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default StatsChart;