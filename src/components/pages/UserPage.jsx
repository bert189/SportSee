import React, { useState, useEffect, useContext } from "react";
import Hello from "../user/Hello";
import Dashboard from "../user/Dashboard";
import { useNavigate, useParams } from "react-router-dom";
import { getUserFirstName } from "../../api/getUserFirstName";
import { DataSourceContext } from "../../contexts/DataSourceContext";


function UserPage() {

    const currentLocation = useParams();
    const userId = currentLocation.id;
    const navigate = useNavigate();

    const {dataSourceIsAPI} = useContext(DataSourceContext);
    const [sourceAPI, setSourceAPI] = useState(dataSourceIsAPI);

    const [firstName, setFirstName] = useState();

    
    useEffect(() => {
        async function load() {
            try {
                setFirstName(await getUserFirstName(userId, sourceAPI));
                
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
    }, [userId, sourceAPI])

    useEffect(() => {
        setSourceAPI(dataSourceIsAPI);
    }, [sourceAPI, dataSourceIsAPI]);



    return (
        <main className="page user-page">
            <Hello firstName={firstName} />
            <Dashboard />
        </main>     

    )
}

export default UserPage;