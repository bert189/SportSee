import { fetchUser } from "./sportsee.api";

export async function getUserScore(userId, sourceAPI) {

    const user = await fetchUser(userId, sourceAPI);
    let userScore = await user.score;
    if (!userScore) {
        userScore = await user.todayScore;
    }
    const score = await userScore * 100;

    return score;
    
}