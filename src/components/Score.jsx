import React from 'react';
import ScoreChart from './charts/ScoreChart';

function Score() {

	const score = 30;

	return (
		<div className="score">
			<h1>Score</h1>
			<ScoreChart score={score} />
			<div class="goal" ><span>{score}%</span> de votre objectif</div>
		</div>
	)
}

export default Score;
