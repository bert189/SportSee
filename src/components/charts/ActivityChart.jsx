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


function ActivityTooltip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className="activity-tooltip">
				<p>{`${payload[0].value} kg`}</p>
				<p>{`${payload[1].value} Kcal`}</p>
			</div>
		);
	}

	return null;
};


const legends = [
	{
		name: 'Poids (kg)',
		color: '#000000'
	},
	{
		name: 'Calories brûlées (Kcal)',
		color: '#E60000'
	}
]

function ActivityLegend({legends}) {

	if (legends) {

		return (			
			<div className="activity-legends">
				{legends.map((legend) => (
					<div key={legend.name} className="activity-legend">
						<div className="legend-dot" style={{background: legend.color}}></div>
						<div className="legend-name">{legend.name}</div>
					</div>
				))}
			</div>			
		);
	}

	return null
}


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
					type='number'
					domain={[67, 71]}
				/>
				<YAxis
					yAxisId="right"
					orientation="left"
					hide
				/>
				<Tooltip
					content={<ActivityTooltip />}
				/>
				<Legend
					content={<ActivityLegend legends={legends} />}
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
					fill={legends[0].color}
					barSize={7}
				/>
				<Bar
					yAxisId="right"
					dataKey="calories"
					fill={legends[1].color}
					barSize={7}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ActivityChart;
