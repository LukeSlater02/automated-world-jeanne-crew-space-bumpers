// Function that takes element location as input and injects footer html at that location
export const insertFooterHTML = () => {
    async function getData(url) {
        const response = await fetch(url);

        let data = await response.text();
        // Do something with HTML 
        placeHTML(data);
    }

    const placeHTML = (data) => {
        // Automatically findes the first footer element and places html there
        document.querySelector('footer').innerHTML = data;
    }
    
    getData('../../countries/shared/footer.html');
}