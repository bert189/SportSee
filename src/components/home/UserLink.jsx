import React from 'react';
import { Link } from "react-router-dom";


function UserLink({userId}) {
    return (
        <>
            <Link to={`utilisateur/${userId}`} className='user-link' >Utilisateur {userId}</Link>
        </>
    )
}

export default UserLink
