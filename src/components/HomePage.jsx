import React from "react";
import Hello from "./Hello";
import Dashboard from "./Dashboard";

function HomePage() {

    const firstName = "Cecilia";

    return (
        <main className="homepage">
            <Hello firstName={firstName} />
            <Dashboard />
        </main>     

    )
}

export default HomePage;