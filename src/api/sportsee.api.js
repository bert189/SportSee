
const BASE_URL = "http://localhost:3000";


export async function fetchUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        const userProfile = await response.json();
        return userProfile;
    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}


export async function fetchUserActivity(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        const userActivity = await response.json();
        return userActivity;
    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}


export async function fetchUserSessions(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        const userSessions = await response.json();
        return userSessions;
    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}


export async function fetchUserPerformance(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        const userPerformance = await response.json();
        return userPerformance;
    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}
