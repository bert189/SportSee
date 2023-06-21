import React from 'react';
import ScoreChart from './charts/ScoreChart';
import ChartTitle from './charts/ChartTitle';

function Score() {

	// {
	// 	"data": {
	// 		"id": 18,
	// 		"userInfos": {
	// 			"firstName": "Cecilia",
	// 			"lastName": "Ratorez",
	// 			"age": 34
	// 		},
	// 		"score": 0.3,
	// 		"keyData": {
	// 			"calorieCount": 2500,
	// 			"proteinCount": 90,
	// 			"carbohydrateCount": 150,
	// 			"lipidCount": 120
	// 		}
	// 	}
	// }

	const score = 30; // x100 = %age

	return (
		<div className="score card">
			<ChartTitle color="black" title="Score" />
			<ScoreChart score={score} />
			<div class="goal" ><span>{score}%</span> de votre objectif</div>
		</div>
	)
}

export default Score;
