import React from "react";
import AverageSessions from "./AverageSessions";
import Activity from "./Activity";
import Score from "./Score";
import Performance from "./Performance";
import Count from "./Count";
import formatNumberWithCommas from "../helper/formatNumberWithCommas";


function Dashboard() {

    // recupéré de l'API
    const calorieCount = formatNumberWithCommas(2500);
    const proteinCount = 90;
    const carbohydrateCount = 150;
    const lipidCount = 120;


    // après transformation
    const counts = [
        {
            name: "Calories",
            value: calorieCount,
            unit: "kCal",
            icon: "fire",
            color: "#FF0000"
        },
        {
            name: "Proteines",
            value: proteinCount,
            unit: "g",
            icon: "drumstick-bite",
            color: "#4AB8FF"
        },
        {
            name: "Glucides",
            value: carbohydrateCount,
            unit: "g",
            icon: "apple-whole",
            color: "#FDCC0C"
        },
        {
            name: "Lipides",
            value: lipidCount,
            unit: "g",
            icon: "burger",
            color: "#FD5181"            
        }
    ];

    
    return (
        <div className="dashboard">
            <div className="charts-wrapper">
                <Activity />
                <AverageSessions />
                <Performance />
                <Score />
            </div>
            <div className="counts-wrapper">
                {counts && counts.map((count, index) => {
                    return <Count key={index} name={count.name} value={count.value} unit={count.unit} icon={count.icon} color={count.color}/>
                })}
            </div>
            
        </div>     

    )
}

export default Dashboard;