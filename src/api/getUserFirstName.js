import { fetchUser } from "./sportsee.api";

export async function getUserFirstName(userId, sourceAPI) {

    const user = await fetchUser(userId, sourceAPI);

    const firstName = await user.userInfos.firstName;
    
    return firstName;

}