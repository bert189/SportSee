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
		day: 'L',
		minutes: 30,
	},
	{
		day: 'M',
		minutes: 40,
	},
	{
		day: 'M',
		minutes: 50,
	},
	{
		day: 'J',
		minutes: 30,
	},
	{
		day: 'V',
		minutes: 30,
	},
	{
		day: 'S',
		minutes: 50,
	},
	{
		day: 'D',
		minutes: 50,
	},
];


function SessionsTooltip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className="sessions-tooltip">
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
					dataKey="day"
					axisLine={false}
					tickLine={false}
					stroke="#ff6060"
				/>
				<Tooltip
					content={<SessionsTooltip />}
					formatter={(value) => `${value} min`}
					itemStyle={{ color: '#000000' }}
					cursor={{stroke: "white", strokeWidth: 1, strokeOpacity: 0.5 }} // stroke: "#E60000"
				/>
				<Line
					type="monotone"
					dataKey="minutes"
					stroke="#ffffff"
					strokeWidth={2}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}



export default SessionsChart;
