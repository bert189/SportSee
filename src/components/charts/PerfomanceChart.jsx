import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';



function PerformanceChart({data}) {
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="75%"
                data={data}
                startAngle={90}
                endAngle={-270}
            >
                <PolarGrid
                    radialLines={false}
                />
                <PolarAngleAxis
                    dataKey="subject"
                    fontSize={12}
                    fontWeight={500}
                    tickLine={false}
                    stroke="#ffffff"
                />
                <PolarRadiusAxis
                    angle="180"
                    axisLine={false}
                    tick={false}
                />
                <Radar
                    dataKey="value"
                    fill="#FF0000"
                    fillOpacity={0.78}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};


export default PerformanceChart;
