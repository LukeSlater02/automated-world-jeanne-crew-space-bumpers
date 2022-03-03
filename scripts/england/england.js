import * as footer from '../../scripts/shared/footer.js';
import * as header from '../shared/HeaderGenerator.js';

// Generate Header
document.querySelector('header').innerHTML = header.Header({
    name: "England",
    info: "This is England!",
    location: "Picture of Big Ben goes here . . ."
})

// Generate Main Section

// Generate Footer
footer.insertFooterHTML();