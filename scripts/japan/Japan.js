import { getJapanCities, getJapanLandmarks, getJapanFamousCitizens } from "./JapanData.js";
import {generateCitizenHTML, generateLandmarkHTML, generateCityHTML} from "../shared/mainGeneratorFunctions.js"
import {Header} from "../shared/HeaderGenerator.js"
import {insertFooterHTML} from "../shared/footer.js"

document.querySelector("header").innerHTML = Header({
    name: "Japan",
    location: "Randon Picture Sub Title",
    info: "Japan is cool"
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