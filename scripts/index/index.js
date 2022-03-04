import * as header from "../shared/HeaderGenerator.js";
import * as footer from "../shared/footer.js";

document.querySelector('header').innerHTML = header.Header({
    name: "",
    info: "",
    location: "",
    isIndex: true,
    pathToBackgroundImage: "",
    pathToRoot: "./"
});

footer.insertFooterHTML();