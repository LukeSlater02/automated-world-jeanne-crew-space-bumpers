import {cityObj} from "./canadaData.js"
import {landmarkObj} from "./canadaData.js"
import {citizenObj} from "./canadaData.js"
import { generateLandmarkHTML } from "./canadaHTMLfunc.js"
import {generateCityHTML} from "./canadaHTMLfunc.js"
import { generateCitizenHTML } from "./canadaHTMLfunc.js"

for (const landmark of landmarkObj){
    generateLandmarkHTML(landmark)
}

for (const city of cityObj){
    generateCityHTML(city)
}

for (const citizen of citizenObj){
    generateCitizenHTML(citizen)
}