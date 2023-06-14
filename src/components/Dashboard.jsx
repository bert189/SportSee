import React from "react";
import Title from "./Title";
import Datas from "./Datas";

function Dashboard() {

    const firstName = "Cecilia";

    return (
        <div className="dashboard">
            <Title firstName={firstName} />
            <Datas />
        </div>     

    )
}

export default Dashboard;