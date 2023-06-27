import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



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


function ActivityChart({data, legends}) {

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
					domain={['dataMin - 2', 'dataMax + 1']}
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
					radius={[4, 4, 0, 0]}
				/>
				<Bar
					yAxisId="right"
					dataKey="calories"
					fill={legends[1].color}
					barSize={7}
					radius={[4, 4, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ActivityChart;
