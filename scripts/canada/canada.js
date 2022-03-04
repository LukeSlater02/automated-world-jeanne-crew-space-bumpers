// OBJ INTO HTML
import {cityObj, landmarkObj, citizenObj} from "./canadaData.js"
import {generateLandmarkHTML, generateCitizenHTML, generateCityHTML} from "./canadaHTMLfunc.js"

// HEADER & FOOTER
import * as footer from '../../scripts/shared/footer.js';
import * as header from '../shared/HeaderGenerator.js';

document.querySelector('header').innerHTML = header.Header({
    name: "CANADA",
    location: "Lake Louise, Banff National Park",
    pathToBackgroundImage: "../../images/canada/lakelouise.jpg",
    pathToRoot: "../../"
})

// landmark loop
for (const landmark of landmarkObj){
    generateLandmarkHTML(landmark)
}

// city loop
for (const city of cityObj){
    generateCityHTML(city)
}

// citizen loop`
for (const citizen of citizenObj){
    generateCitizenHTML(citizen)
}

footer.insertFooterHTML();