import { fetchUser } from "./sportsee.api";
import formatNumberWithCommas from "../helper/formatNumberWithCommas";

export async function getUserCounts(userId) {

    const user = await fetchUser(userId);
    const countsObject = await user.data.keyData;
    const countsArray = Object.entries(countsObject);

    const counts = [];
    countsArray.forEach((count) => {
        switch (count[0]) {
            case "calorieCount":
                counts.push(
                    {
                        name: "Calories",
                        value: formatNumberWithCommas(count[1]),
                        unit: "Kcal",
                        icon: "fire",
                        color: "#FF0000"
                    }
                );
                break;
            case "proteinCount":
                counts.push(
                    {
                        name: "Proteines",
                        value: formatNumberWithCommas(count[1]),
                        unit: "g",
                        icon: "drumstick-bite",
                        color: "#4AB8FF"
                    } 
                );
                break;
            case "carbohydrateCount":
                counts.push(
                    {
                        name: "Glucides",
                        value: formatNumberWithCommas(count[1]),
                        unit: "g",
                        icon: "apple-whole",
                        color: "#FDCC0C"
                    }
                );
                break;
            case "lipidCount":
                counts.push(
                    {
                        name: "Lipides",
                        value: formatNumberWithCommas(count[1]),
                        unit: "g",
                        icon: "burger",
                        color: "#FD5181"            
                    }
                ); 
                break;
            default:
                console.log('catégorie de donnée inconnue')
        }
    })
    
    return counts;

}