import { getJapanCities, getJapanLandmarks, getJapanFamousCitizens } from "./JapanData.js";
import {generateCitizenHTML, generateLandmarkHTML, generateCityHTML} from "../shared/mainGeneratorFunctions.js"
import {Header} from "../shared/HeaderGenerator.js"
import {insertFooterHTML} from "../shared/footer.js"

document.querySelector("header").innerHTML = Header({
    name: "Japan",
    location: "Nihon e Youkoso",
    info: "Japan is an archipelago of some 6,852 islands located in a volcanic zone on the Pacific Ring of Fire. The Pacific Ring of Fire accounts for more than 75 percent of the world’s active volcanoes and 90 percent of the world’s earthquakes. It is a constitutional monarchy, with Tokyo as its capital. More than 99% of the population speaks Japanese. The economy of Japan is the third largest in the world after the United States and the People's Republic of China.",
    pathToRoot: "../../",
    pathToBackgroundImage:"../../images/japan/JapanHeader.png"

})

let cities = getJapanCities();
 for(const city of cities) {
     generateCityHTML(city);
 }

 let landmarks = getJapanLandmarks();
 for (const landmark of landmarks){
     generateLandmarkHTML(landmark);
 }

let citizens = getJapanFamousCitizens();
for (const citizen of citizens){
    generateCitizenHTML(citizen);
}

insertFooterHTML();