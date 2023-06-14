import React from "react";


function Title({firstName}) {
    return (
        <div className="title">
            <h1>Bonjour&nbsp;<span className="firstname">{firstName}</span></h1>
            <h2>Félicitations ! Vous avez explosé vos objectifs hier <i class="fa-solid fa-hands-clapping"></i></h2>
        </div>     

    )
}

export default Title;