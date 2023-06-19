import React from "react";
import Title from "./Title";
import Dashboard from "./Dashboard";

function HomePage() {

    const firstName = "Cecilia";

    return (
        <main className="homepage">
            <Title firstName={firstName} />
            <Dashboard />
        </main>     

    )
}

export default HomePage;