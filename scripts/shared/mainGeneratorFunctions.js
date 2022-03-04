export const generateLandmarkHTML = (obj) => {
    const landmarkHTML = document.querySelector(".landmarkList")
    landmarkHTML.innerHTML += `
        <h2>${obj.name}</h2>
        <h4>Established: ${obj.yearCreated}</h4>        
        <p>${obj.description}<p>  
        <a href="${obj.link}" target="_blank">Learn More</a>
    `
}


export const generateCityHTML = (obj) => {
    const cityHTML = document.querySelector(".cityList")
    cityHTML.innerHTML += `
    <h2>${obj.name}</h2>
    <h4>Population: ${obj.population}</h4>
    <p>${obj.description}</p>
    <a class= "learnMore" href="${obj.link}" target="_blank">Learn More</a>
    `
}

export const generateCitizenHTML = (obj) => {
    const citizenHTML = document.querySelector(".citizenList")
    citizenHTML.innerHTML += `
    <h2>${obj.name}</h2>
    <h4>Occupation: ${obj.occupation}</h4>
    <p>${obj.description}</p>
    <a href="${obj.link}" target="_blank">Learn More</a>
    `
}

// Copy and paste code below into your own country.js file

// // You'll need to change the import directories to your own personal file names.
// import {cityObj} from "./canadaData.js"
// import {landmarkObj} from "./canadaData.js"
// import {citizenObj} from "./canadaData.js"
// import { generateLandmarkHTML } from "./canadaHTMLfunc.js"
// import {generateCityHTML} from "./canadaHTMLfunc.js"
// import { generateCitizenHTML } from "./canadaHTMLfunc.js"

// // if the name of your arrays are different than 'landmarkObj', etc, youll have to change that
// for (const landmark of landmarkObj){
//     generateLandmarkHTML(landmark)
// }

// for (const city of cityObj){
//     generateCityHTML(city)
// }

// for (const citizen of citizenObj){
//     generateCitizenHTML(citizen)
// }