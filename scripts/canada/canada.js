// OBJ INTO HTML
import {cityObj, landmarkObj, citizenObj} from "./canadaData.js"
import {generateLandmarkHTML, generateCitizenHTML, generateCityHTML} from "./canadaHTMLfunc.js"

// HEADER & FOOTER
import * as footer from '../../scripts/shared/footer.js';
import * as header from '../shared/HeaderGenerator.js';

document.querySelector('header').innerHTML = header.Header({
    name: "CANADA",
    info: "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the world's second-largest country by total area. Its southern and western border with the United States, stretching 8,891 kilometres (5,525 mi), is the world's longest bi-national land border. Canada's capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.",
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