import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// {
//     "data": {
//         "userId": 18,
//         "sessions": [
//             {
//                 "day": 1,
//                 "sessionLength": 30
//             },
//             {
//                 "day": 2,
//                 "sessionLength": 40
//             },
//             {
//                 "day": 3,
//                 "sessionLength": 50
//             },
//             {
//                 "day": 4,
//                 "sessionLength": 30
//             },
//             {
//                 "day": 5,
//                 "sessionLength": 30
//             },
//             {
//                 "day": 6,
//                 "sessionLength": 50
//             },
//             {
//                 "day": 7,
//                 "sessionLength": 50
//             }
//         ]
//     }
// }




const data = [
	{
		name: 'L',
		pv: 30,
	},
	{
		name: 'M',
		pv: 40,
	},
	{
		name: 'M',
		pv: 50,
	},
	{
		name: 'J',
		pv: 30,
	},
	{
		name: 'V',
		pv: 30,
	},
	{
		name: 'S',
		pv: 50,
	},
	{
		name: 'D',
		pv: 50,
	},
];


const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip">
		  <p>{`${payload[0].value} min`}</p>
		</div>
	  );
	}
  
	return null;
  };

function SessionsChart() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={data}
				margin={{ top: 65, right: 25, bottom: 15, left: 25 }}
			>
				<XAxis
					dataKey="name"
					axisLine={false}
					tickLine={false}
					stroke='#ffffff'
				/>
				<Tooltip
					// separator=""
					content={CustomTooltip}
					// label=""
					// labelFormatter={(pv) => ""}
					formatter={(value) => `${value} min`}
					itemStyle={{ color: '#000000' }}
				/>
				<Line
					type="monotone"
					dataKey="pv"
					stroke="#ffffff"
					strokeWidth={2}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}



export default SessionsChart;
