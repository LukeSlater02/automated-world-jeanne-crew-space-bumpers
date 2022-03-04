// OBJ INTO HTML
import {cityObj, landmarkObj, citizenObj} from "./canadaData.js"
import {generateLandmarkHTML, generateCitizenHTML, generateCityHTML} from "./canadaHTMLfunc.js"

// HEADER & FOOTER
import {Header} from "../shared/HeaderGenerator.js"
import {insertFooterHTML} from "../shared/footer.js"

insertFooterHTML("footer");

document.querySelector("header").innerHTML = Header({
    name: "Canada",
    location:"picture subtitle here",
    info:"A Mari Usque Ad Mare",
})

for (const landmark of landmarkObj){
    generateLandmarkHTML(landmark)
}

for (const city of cityObj){
    generateCityHTML(city)
}

for (const citizen of citizenObj){
    generateCitizenHTML(citizen)
}