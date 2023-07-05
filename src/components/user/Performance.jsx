import React from 'react';
import PerformanceChart from '../charts/PerfomanceChart';


function Performance({data}) {


	return (
		<div className="performance card">
			<PerformanceChart data={data} />
		</div>
	)
}

export default Performance;
