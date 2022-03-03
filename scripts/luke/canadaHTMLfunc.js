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
    <a href="${obj.link}" target="_blank">Learn More</a>
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
