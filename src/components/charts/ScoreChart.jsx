import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



function ScoreChart({ score }) {

	const data = [
		{
			name: 'score',
			value: score ,
			color: '#E60000'
		},
		{
			name: 'Group B',
			value: (100 - score),
			color: '#FBFBFB'
		}
	];


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
						<Cell
							className="pie-cell"
							key={`cell-${index}`}
							fill={entry.color}
							cornerRadius={6}
						/>
					))}
				</Pie>				
			</PieChart>
		</ResponsiveContainer>

	);
};

export default ScoreChart;
