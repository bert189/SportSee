import { fetchUser } from "./sportsee.api";

export async function getUserFirstName(userId) {

    const user = await fetchUser(userId);

    const firstName = await user.data.userInfos.firstName;
    
    return firstName;

}