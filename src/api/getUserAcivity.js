import { fetchUserActivity } from "./sportsee.api";

export async function getUserActivity(userId, sourceAPI) {

    const rawUserActivity = await fetchUserActivity(userId, sourceAPI);
    const activity = await rawUserActivity.sessions;

    const formatedActivity = activity.map((dayActivity) => (
        {...dayActivity,
            day: dayActivity.day.slice(5)
        }
    ));
    
    return formatedActivity ;

}