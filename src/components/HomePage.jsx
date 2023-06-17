import React from "react";
import Title from "./Title";
import Dashboard from "./Dashboard";

function HomePage() {

    const firstName = "Cecilia";

    return (
        <main className="homepage">
            <Title firstName={firstName} />
            <Dashboard
            board />
        </main>     

    )
}

export default HomePage;