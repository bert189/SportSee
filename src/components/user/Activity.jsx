import React from 'react';
import ActivityChart from '../charts/ActivityChart';
import ChartTitle from '../charts/ChartTitle';

function Activity({data}) {

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
