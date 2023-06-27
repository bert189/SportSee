import { fetchUserActivity } from "./sportsee.api";

export async function getUserActivity(userId) {

    const rawUserActivity = await fetchUserActivity(userId);
    const activity = await rawUserActivity.data.sessions;

    const formatedActivity = activity.map((dayActivity) => (
        {...dayActivity,
            day: dayActivity.day.slice(5)
        }
    ));
    
    return formatedActivity ;

}