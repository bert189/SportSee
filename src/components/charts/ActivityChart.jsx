import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// {
//   "data": {
//       "userId": 18,
//       "sessions": [
//           {
//               "day": "2020-07-01",
//               "kilogram": 70,
//               "calories": 240
//           },
//           {
//               "day": "2020-07-02",
//               "kilogram": 69,
//               "calories": 220
//           },
//           {
//               "day": "2020-07-03",
//               "kilogram": 70,
//               "calories": 280
//           },
//           {
//               "day": "2020-07-04",
//               "kilogram": 70,
//               "calories": 500
//           },
//           {
//               "day": "2020-07-05",
//               "kilogram": 69,
//               "calories": 160
//           },
//           {
//               "day": "2020-07-06",
//               "kilogram": 69,
//               "calories": 162
//           },
//           {
//               "day": "2020-07-07",
//               "kilogram": 69,
//               "calories": 390
//           }
//       ]
//   }
// }

const data = [
	{
		day: '01/07',
		kilogram: 70,
		calories: 240,
	},
	{
		day: '02/07',
		kilogram: 69,
		calories: 220,
	},
	{
		day: '03/07',
		kilogram: 70,
		calories: 280,
	},
	{
		day: '04/07',
		kilogram: 70,
		calories: 500,
	},
	{
		day: '05/07',
		kilogram: 69,
		calories: 160,
	},
	{
		day: '06/07',
		kilogram: 69,
		calories: 162,
	},
	{
		day: '07/07',
		kilogram: 69,
		calories: 390,
	},
];

function ActivityChart() {

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				data={data}
				margin={{
					top: 20,
					right: 0,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="day"
					stroke='#9B9EAC'
					fontSize={14}
					fontWeight={700}
					tickLine={false}
				/>
				<YAxis
					yAxisId="left"
					orientation="right"
					stroke="#9B9EAC"
					fontSize={14}
					fontWeight={700}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					yAxisId="right"
					orientation="left"
					hide
				/>
				<Tooltip />
				<Legend
					align="right"
					verticalAlign="top"
					height={50}
					iconType='circle'
					iconSize={8}
					fontSize={14}
					fontWeight={500}
				/>
				<Bar
					yAxisId="left"
					dataKey="kilogram"
					fill="#000000"
					barSize={7}
				/>
				<Bar
					yAxisId="right"
					dataKey="calories"
					fill="#FF0000"
					barSize={7}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ActivityChart;
