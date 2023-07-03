
import { fetchUserSessions } from "./sportsee.api";

export async function getUserSessions(userId, sourceAPI) {

    const rawUserSessions = await fetchUserSessions(userId, sourceAPI);
    const userSessions = await rawUserSessions.sessions;

    const sessions = [];

    userSessions.forEach(session => {
        switch (String(session.day)) {
            case "1":
                sessions.push(
                    {
                        day: 'L',
                        minutes: session.sessionLength,
                    }
                );
                break;
            case "2":
                sessions.push(
                    {
                        day: 'M',
                        minutes: session.sessionLength,
                    }
                );
                break;
            case "3":
                sessions.push(
                    {
                        day: 'M',
                        minutes: session.sessionLength,
                    }
                );
                break;
            case "4":
                sessions.push(
                    {
                        day: 'J',
                        minutes: session.sessionLength,
                    }
                );
                break;
            case "5":
                sessions.push(
                    {
                        day: 'V',
                        minutes: session.sessionLength,
                    }
                );
                break;
            case "6":
                sessions.push(
                    {
                        day: 'S',
                        minutes: session.sessionLength,
                    }
                );
                break;
            case "7":
                sessions.push(
                    {
                        day: 'D',
                        minutes: session.sessionLength,
                    }
                );
                break;                                       
                    
            default:
                console.log("cette session n'est pas reconnue")
        }
    });
    
    return sessions ;

}