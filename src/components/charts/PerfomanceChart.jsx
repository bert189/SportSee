import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';



function PerformanceChart() {

    const dataAPI = {
		userId: 18,
        kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity"
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
	}
    
    const data = [
        {
			subject: 'Cardio',
			A: 200,
		},
		{
			subject: 'Intensité',
			A: 240,
		},
		{
			subject: 'Vitesse',
			A: 80,
		},
		{
			subject: 'Force',
			A: 80,
		},
		{
			subject: 'Endurance',
			A: 220,
		},
		{
			subject: 'Energie',
			A: 110,
		},

	];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data} startAngle={150} endAngle={-210} >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" fontSize="12" fontWeight="700" />
        <PolarRadiusAxis angle="180" axisLine={false} tick={false}/>        
        <Radar dataKey="A" fill="#FF0000" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  );
};


export default PerformanceChart;
