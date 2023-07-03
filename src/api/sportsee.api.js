
const BASE_URL = "http://localhost:3000";


export async function fetchUser(userId, sourceAPI) {
    try {
        if (sourceAPI) {
            const response = await fetch(`${BASE_URL}/user/${userId}`);
            const userProfile = await response.json();
            return userProfile.data;

        }
        else {
            const response = await fetch(`/mock-data/user-${userId}.json`);
            const userProfile = await response.json();
            return userProfile.data;
        }
    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}


export async function fetchUserActivity(userId, sourceAPI) {
    try {
        if (sourceAPI) {
            const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
            const userActivity = await response.json();
            return userActivity.data;

        }
        else {
            const response = await fetch(`/mock-data/user-${userId}-activity.json`);
            const userActivity = await response.json();
            return userActivity.data;
        }

    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}


export async function fetchUserSessions(userId, sourceAPI) {
    try {
        if (sourceAPI) {
            const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
            const userSessions = await response.json();
            return userSessions.data;
        }
        else {
            const response = await fetch(`/mock-data/user-${userId}-average-sessions.json`);
            const userSessions = await response.json();
            return userSessions.data;
        }

    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}


export async function fetchUserPerformance(userId, sourceAPI) {
    try {
        if (sourceAPI) {
            const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
            const userPerformance = await response.json();
            return userPerformance.data;
        }
        else {
            const response = await fetch(`/mock-data/user-${userId}-performance.json`);
            const userPerformance = await response.json();
            return userPerformance.data;
        }

    }
    catch(error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}
