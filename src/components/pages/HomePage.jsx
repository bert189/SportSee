import React from "react";
import UserLink from "../home/UserLink";


function HomePage() {

    const userIdList = [12, 18]

    return (
        <main className="home-page page">
            <h1>Choisissez un utilisateur pour accéder au tableau de bord</h1>
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