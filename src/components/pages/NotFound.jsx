import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Oups! Les données que vous demandez n'existent pas.</h2>
            <Link to="/" className="back-home">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound;