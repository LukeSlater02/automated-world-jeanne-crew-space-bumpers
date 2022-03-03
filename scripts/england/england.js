import * as footer from '../../scripts/shared/footer.js';
import * as mainFunctions from '../shared/mainGeneratorFunctions.js'
import * as header from '../shared/HeaderGenerator.js';
import * as englandData from './englandData.js';

// Generate Header
document.querySelector('header').innerHTML = header.Header({
    name: "England",
    info: "This is England!",
    location: "Picture of Big Ben goes here . . ."
})

// Generate Main Section
// Cities Loop
for (let i of englandData.getCities()){
    mainFunctions.generateCityHTML(i);
}

// Landmarks Loop

// Citizens Loop


// Generate Footer
footer.insertFooterHTML();