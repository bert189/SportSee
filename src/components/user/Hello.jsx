import React from "react";
import DataSourceSwitch from "../home/DataSourceSwitch";


function Hello({firstName}) {
    return (
        <div className="hello-title">
            <h1>Bonjour&nbsp;<span className="firstname">{firstName}</span></h1>
            {/* le h2 pourrait être dynamique en fonction du niveau de réalisation de l'objectif le jour précédent */}
            <h2>Félicitations ! Vous avez explosé vos objectifs hier <i className="fa-solid fa-hands-clapping"></i></h2>
            <DataSourceSwitch />
        </div>     

    )
}

export default Hello;