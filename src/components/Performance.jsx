import React from 'react';
import PerformanceChart from './charts/PerfomanceChart';


function Performance() {

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
	
    const data = [
        {
            subject: 'Intensité',
            value: 110,
        },
        {
            subject: 'Vitesse',
            value: 220,
        },
        {
            subject: 'Force',
            value: 80,
        },
        {
            subject: 'Endurance',
            value: 80,
        },
        {
            subject: 'Energie',
            value: 240,
        },
        {
            subject: 'Cardio',
            value: 200,
        },        
    ];

	return (
		<div className="performance card">
			<PerformanceChart data={data} />
		</div>
	)
}

export default Performance;
