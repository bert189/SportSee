import { fetchUser } from "./sportsee.api";

export async function getUserScore(userId) {

    const user = await fetchUser(userId);
    let userScore = await user.data.score;
    if (!userScore) {
        userScore = await user.data.todayScore;
    }
    const score = await userScore * 100;

    return score;
    
}