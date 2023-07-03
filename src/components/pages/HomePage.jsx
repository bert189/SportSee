import React from "react";
import UserLink from "../home/UserLink";
import DataSourceSwitch from "../home/DataSourceSwitch";


function HomePage() {

    const userIdList = [12, 18]

    return (
        <main className="home-page page">
            <h1>Choisissez un utilisateur pour accéder au tableau de bord</h1>
            <DataSourceSwitch />
            <ul>
                {userIdList.map((userId, index) =>
                    <li key={index}>
                        <UserLink  userId={userId} />          
                    </li>
                )}
            </ul>
        </main>
    )
}

export default HomePage;