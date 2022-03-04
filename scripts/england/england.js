import * as footer from '../../scripts/shared/footer.js';
import * as mainFunctions from '../shared/mainGeneratorFunctions.js'
import * as header from '../shared/HeaderGenerator.js';
import * as englandData from './englandData.js';

// Generate Header
document.querySelector('header').innerHTML = header.Header({
    name: "England",
<<<<<<< HEAD
    info: "",
    location: "",
    pathToBackgroundImage: "../../images/england/bigbenriver.jpg",
=======
    info: "This is England!",
    location: "Picture of Big Ben goes here . . .",
    pathToBackgroundImage: "../../images/england/BigBen.png",
>>>>>>> bb52d4211c8f186e0661a4b2081dedf6b0dcd9e4
    pathToRoot: "../../"
})

// Generate Main Section
// Cities Loop
for (let i of englandData.getCities()){
    mainFunctions.generateCityHTML(i);
}
// Landmarks Loop
for (let i of englandData.getLandmarks()){
    mainFunctions.generateLandmarkHTML(i);
}
// Citizens Loop
for (let i of englandData.getFamousCitizens()){
    mainFunctions.generateCitizenHTML(i);
}


// Generate Footer
footer.insertFooterHTML();