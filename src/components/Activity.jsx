import React from 'react';
import ActivityChart from './charts/ActivityChart';
import ChartTitle from './charts/ChartTitle';

function Activity() {

// {
//   "data": {
//       "userId": 18,
//       "sessions": [
//           {
//               "day": "2020-07-01",
//               "kilogram": 70,
//               "calories": 240
//           },
//           {
//               "day": "2020-07-02",
//               "kilogram": 69,
//               "calories": 220
//           },
//           {
//               "day": "2020-07-03",
//               "kilogram": 70,
//               "calories": 280
//           },
//           {
//               "day": "2020-07-04",
//               "kilogram": 70,
//               "calories": 500
//           },
//           {
//               "day": "2020-07-05",
//               "kilogram": 69,
//               "calories": 160
//           },
//           {
//               "day": "2020-07-06",
//               "kilogram": 69,
//               "calories": 162
//           },
//           {
//               "day": "2020-07-07",
//               "kilogram": 69,
//               "calories": 390
//           }
//       ]
//   }
// }

    const data = [
        {
            day: '01/07',
            kilogram: 70,
            calories: 240,
        },
        {
            day: '02/07',
            kilogram: 69,
            calories: 220,
        },
        {
            day: '03/07',
            kilogram: 70,
            calories: 280,
        },
        {
            day: '04/07',
            kilogram: 70,
            calories: 500,
        },
        {
            day: '05/07',
            kilogram: 69,
            calories: 160,
        },
        {
            day: '06/07',
            kilogram: 69,
            calories: 162,
        },
        {
            day: '07/07',
            kilogram: 69,
            calories: 390,
        },
    ];

    const legends = [
        {
            name: 'Poids (kg)',
            color: '#000000'
        },
        {
            name: 'Calories brûlées (Kcal)',
            color: '#E60000'
        }
    ]

    return (
        <div className="activity card">
            <ChartTitle title="Activité quotidienne" />
            <ActivityChart data={data} legends={legends} />
        </div>
    )
}

export default Activity;
