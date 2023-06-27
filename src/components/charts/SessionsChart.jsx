import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



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


function SessionsChart({data}) {
	
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
					opacity={0.75}
					strokeWidth={2}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}



export default SessionsChart;
