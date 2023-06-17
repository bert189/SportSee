import React from 'react';
import SessionsChart from './charts/SessionsChart';


function AverageSessions() {

	return (
		<div className="sessions">
			<h1><span>Durée moyenne des&nbsp;</span>sessions</h1>
			<SessionsChart />
		</div>
	)
}

export default AverageSessions;
