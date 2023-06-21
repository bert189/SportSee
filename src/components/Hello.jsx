import React from "react";


function Hello({firstName}) {
    return (
        <div className="title">
            <h1>Bonjour&nbsp;<span className="firstname">{firstName}</span></h1>
            {/* le h2 pourrait être dynamique en fonction du niveau de réalisation de l'objectif le jour précédent */}
            <h2>Félicitations ! Vous avez explosé vos objectifs hier <i class="fa-solid fa-hands-clapping"></i></h2>
        </div>     

    )
}

export default Hello;