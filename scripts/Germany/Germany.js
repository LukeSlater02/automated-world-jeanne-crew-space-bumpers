import * as footer from '../../scripts/shared/footer.js';
import * as mainFunctions from '../shared/mainGeneratorFunctions.js'
import * as header from '../shared/HeaderGenerator.js';
import * as germanData from './GermanyData.js';

// Generate Header
document.querySelector('header').innerHTML = header.Header({
    name: "Germany",
    info: "This is Germany!",
    location: "Picture goes here . . ."
})

// Generate Main Section
// Cities Loop

for (let i of germanData.getGermanCities()){
    mainFunctions.generateCityHTML(i);
}
// Landmarks Loop
for (let i of germanData.getGermanLandmarks()){
    mainFunctions.generateLandmarkHTML(i);
}
// Citizens Loop
for (let i of germanData.getGermanCitizens()){
    mainFunctions.generateCitizenHTML(i);
}


// Generate Footer
footer.insertFooterHTML();