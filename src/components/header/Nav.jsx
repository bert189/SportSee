import React from "react";


function Nav({links}) {
    return (
        <nav>
            <ul>
                {links && links.map((link, index) => {
                    return <li key={index}>{link}</li>;
                })}
            </ul>
        </nav>
        

    )
}

export default Nav;