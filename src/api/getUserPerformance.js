import { fetchUserPerformance } from "./sportsee.api";

export async function getUserPerformance(userId) {

    const rawUserPerformance = await fetchUserPerformance(userId);

    const performanceArray = await rawUserPerformance.data.data;

    const performance = [];

    performanceArray.forEach(perf => {
        switch (String(perf.kind)) {
            case "1":
                performance.push(
                    {
                        kind: 'Cardio',
                        value: perf.value,
                    }
                )
                break;
            case "2":
                performance.push(
                    {
                        kind: 'Energie',
                        value: perf.value,
                    }
                )
                break;
            case "3":
                performance.push(
                    {
                        kind: 'Endurance',
                        value: perf.value,
                    }
                )
                break;
            case "4":
                performance.push(
                    {
                        kind: 'Force',
                        value: perf.value,
                    }
                )
                break;
            case "5":
                performance.push(
                    {
                        kind: 'Vitesse',
                        value: perf.value,
                    }
                )
                break;
            case "6":
                performance.push(
                    {
                        kind: 'Intensité',
                        value: perf.value,
                    }
                )
                break;
            default:
                console.log("perfomance non reconnue")
    }
        
    });
    
    return performance ;

}