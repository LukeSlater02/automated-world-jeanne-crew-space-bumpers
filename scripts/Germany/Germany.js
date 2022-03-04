import * as footer from '../../scripts/shared/footer.js';
import * as mainFunctions from '../shared/mainGeneratorFunctions.js'
import * as header from '../shared/HeaderGenerator.js';
import * as germanData from './GermanyData.js';

// Generate Header
document.querySelector('header').innerHTML = header.Header({
    name: "GERMANY",
    info: "Various Germanic tribes have inhabited the northern parts of modern Germany since classical antiquity. A region named Germania was documented before AD 100. In the 10th century, German territories formed a central part of the Holy Roman Empire. During the 16th century, northern German regions became the centre of the Protestant Reformation.Germany is a great power with a strong economy; it has the largest economy in Europe, the world's fourth-largest economy by nominal GDP, and the fifth-largest by PPP. As a global leader in several industrial, scientific and technological sectors, it is both the world's third-largest exporter and importer of goods.",
    location: "Brandenburg Gate",
    pathToBackgroundImage: "../../images/germany/GermanyBackground.png",
    pathToRoot: "../../"
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