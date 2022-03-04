import * as header from "../shared/HeaderGenerator.js";
import * as footer from "../shared/footer.js";

document.querySelector('header').innerHTML = header.Header({
    name: "",
    info: "",
    location: "",
    pathToBackgroundImage: "../../images/england/tower_bridge.gif",
    pathToRoot: "./"
});

footer.insertFooterHTML();