import React from 'react';
import SessionsChart from './charts/SessionsChart';
import ChartTitle from './charts/ChartTitle';


function AverageSessions() {

	
// {
//     "data": {
//         "userId": 18,
//         "sessions": [
//             {
//                 "day": 1,
//                 "sessionLength": 30
//             },
//             {
//                 "day": 2,
//                 "sessionLength": 40
//             },
//             {
//                 "day": 3,
//                 "sessionLength": 50
//             },
//             {
//                 "day": 4,
//                 "sessionLength": 30
//             },
//             {
//                 "day": 5,
//                 "sessionLength": 30
//             },
//             {
//                 "day": 6,
//                 "sessionLength": 50
//             },
//             {
//                 "day": 7,
//                 "sessionLength": 50
//             }
//         ]
//     }
// }

	const data = [
		{
			day: 'L',
			minutes: 30,
		},
		{
			day: 'M',
			minutes: 40,
		},
		{
			day: 'M',
			minutes: 50,
		},
		{
			day: 'J',
			minutes: 30,
		},
		{
			day: 'V',
			minutes: 30,
		},
		{
			day: 'S',
			minutes: 50,
		},
		{
			day: 'D',
			minutes: 50,
		},
	];

	return (
		<div className="sessions card">
			<ChartTitle color="#ff6060" title="Durée moyenne des sessions" />
			<SessionsChart data={data} />
		</div>
	)
}

export default AverageSessions;
