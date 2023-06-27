import React from "react";
import { Link } from "react-router-dom";


function Logo({src}) {
    return (
        <>
            <Link to="/">
                <img className="logo" src={src} alt="logo" />
            </Link>
            
        </>  

    )
}

export default Logo;