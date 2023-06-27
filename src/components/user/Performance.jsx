import React from 'react';
import PerformanceChart from '../charts/PerfomanceChart';


function Performance({data}) {

	// {
	// 	"data": {
	// 		"userId": 18,
	// 		"kind": {
	// 			"1": "cardio",
	// 			"2": "energy",
	// 			"3": "endurance",
	// 			"4": "strength",
	// 			"5": "speed",
	// 			"6": "intensity"
	// 		},
	// 		"data": [
	// 			{
	// 				"value": 200,
	// 				"kind": 1
	// 			},
	// 			{
	// 				"value": 240,
	// 				"kind": 2
	// 			},
	// 			{
	// 				"value": 80,
	// 				"kind": 3
	// 			},
	// 			{
	// 				"value": 80,
	// 				"kind": 4
	// 			},
	// 			{
	// 				"value": 220,
	// 				"kind": 5
	// 			},
	// 			{
	// 				"value": 110,
	// 				"kind": 6
	// 			}
	// 		]
	// 	}
	// }
	
    // const mockData = [
	// 	{
    //         kind: 'Cardio',
    //         value: 200,
    //     },
	// 	{
    //         kind: 'Energie',
    //         value: 240,
    //     },
	// 	{
    //         kind: 'Endurance',
    //         value: 80,
    //     },
	// 	{
    //         kind: 'Force',
    //         value: 80,
    //     },
    //     {
	// 		kind: 'Vitesse',
    //         value: 220,
    //     },
	// 	{
	// 		kind: 'Intensité',
	// 		value: 110,
	// 	},
    // ];

	return (
		<div className="performance card">
			<PerformanceChart data={data} />
		</div>
	)
}

export default Performance;
