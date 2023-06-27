import React from 'react';
import ScoreChart from '../charts/ScoreChart';
import ChartTitle from '../charts/ChartTitle';

function Score({score}) {

	return (
		<div className="score card">
			<ChartTitle color="black" title="Score" />
			<ScoreChart score={score} />
			<div className="goal" ><span>{score}%</span> de votre objectif</div>
		</div>
	)
}

export default Score;
