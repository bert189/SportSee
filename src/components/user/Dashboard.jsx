import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserCounts } from "../../api/getUserCounts";
import { getUserActivity } from "../../api/getUserAcivity";
import { getUserSessions } from "../../api/getUserSessions";
import { getUserPerformance } from "../../api/getUserPerformance";
import { getUserScore } from "../../api/getUserScore";
import AverageSessions from "./AverageSessions";
import Activity from "./Activity";
import Score from "./Score";
import Performance from "./Performance";
import Count from "./Count";
import { DataSourceContext } from "../../contexts/DataSourceContext";


function Dashboard() {

    const currentLocation = useParams();
    const userId = currentLocation.id;
    const navigate = useNavigate();

    const [userCounts, setUserCounts] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userSessions, setUserSessions] = useState();
    const [userPerformance, setUserPerformance] = useState();
    const [userScore, setUserScore] = useState();

    const {dataSourceIsAPI} = useContext(DataSourceContext);
    const [sourceAPI, setSourceAPI] = useState(dataSourceIsAPI);

    // const sourceAPI = false;
    
    useEffect(() => {
        async function load() {
            try {
                setUserCounts(await getUserCounts(userId, sourceAPI));
                setUserActivity(await getUserActivity(userId, sourceAPI));
                setUserSessions(await getUserSessions(userId, sourceAPI));
                setUserPerformance(await getUserPerformance(userId, sourceAPI));
                setUserScore(await getUserScore(userId, sourceAPI));             
            }
            catch(error) {
                console.error('Erreur lors de la récupération des données :', error);
                navigate("/utilisateur-introuvable");
                return null;
            }
        }
        load();        
    }, [userId, sourceAPI])

    useEffect(() => {
        setSourceAPI(dataSourceIsAPI);
    }, [sourceAPI, dataSourceIsAPI]);

    
    return (
        <div className="dashboard">
            <div className="charts-wrapper">
                <Activity data={userActivity} />
                <AverageSessions data={userSessions} />
                <Performance data={userPerformance} />
                <Score score={userScore} />
            </div>
            <div className="counts-wrapper">
                {userCounts && userCounts.map((count, index) => {
                    return <Count
                        key={index}
                        name={count.name}
                        value={count.value}
                        unit={count.unit}
                        icon={count.icon}
                        color={count.color}
                    />
                })}
            </div>
            
        </div>     

    )
}

export default Dashboard;