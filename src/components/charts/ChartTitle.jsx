import React from 'react'

function ChartTitle({ title, color }) {
    return (
        <>
            <h1 className='chart-title' style={{ color: color}}>{title}</h1>
        </>
    )
}

export default ChartTitle
