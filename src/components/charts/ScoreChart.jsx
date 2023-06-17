import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



function ScoreChart({ score }) {

	const data = [
		{ name: 'Group A', value: score },
		{ name: 'Group B', value: (100 - score) },
	];

	const COLORS = ['#E60000', '#FBFBFB'];

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie
					data={data}
					cx={'50%'}
					cy={'50%'}
					startAngle={90}
					endAngle={450}
					innerRadius={74}
					outerRadius={86}
					paddingAngle={0}
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell className="pie-cell" key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>				
			</PieChart>
		</ResponsiveContainer>

	);
};

export default ScoreChart;
