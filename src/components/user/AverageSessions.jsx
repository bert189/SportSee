import React from 'react';
import SessionsChart from '../charts/SessionsChart';
import ChartTitle from '../charts/ChartTitle';


function AverageSessions({data}) {

	return (
		<div className="sessions card">
			<ChartTitle color="#ff6060" title="Durée moyenne des sessions" />
			<SessionsChart data={data} />
		</div>
	)
}

export default AverageSessions;
