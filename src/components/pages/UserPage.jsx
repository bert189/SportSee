import React, { useState, useEffect } from "react";
import Hello from "../user/Hello";
import Dashboard from "../user/Dashboard";
import { useNavigate, useParams } from "react-router-dom";
import { getUserFirstName } from "../../api/getUserFirstName";


function UserPage() {

    const currentLocation = useParams();
    const userId = currentLocation.id;
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState();
    
    useEffect(() => {
        async function load() {
            try {
                setFirstName(await getUserFirstName(userId));
                
                if (Number.isInteger(userId) && !firstName) {
                     navigate("/utilisateur-introuvable");
                }
            }
            catch(error) {
                console.error('Erreur lors de la récupération des données :', error);
                return null;
            }
        }
        load();
    }, [])



    return (
        <main className="page">
            <Hello firstName={firstName} />
            <Dashboard />
        </main>     

    )
}

export default UserPage;