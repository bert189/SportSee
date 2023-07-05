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
                startAngle={30}
                endAngle={-330}
            >
                <PolarGrid
                    radialLines={false}
                />
                <PolarAngleAxis
                    dataKey="kind"
                    fontSize={12}
                    fontWeight={400}
                    tickLine={false}
                    stroke="#ffffff"
                    dy={3}
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
