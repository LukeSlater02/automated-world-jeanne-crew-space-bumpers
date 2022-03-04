// CountryObj needs the following properties: name, info, location, pathToBackgroundImage
export const Header = (countryObj) => {
  const canadaPath = `/countries/canada/canada.html`;
  const englandPath = `/countries/england/england.html`;
  const germanyPath = `/countries/germany/germany.html`;
  const japanPath = `/countries/japan/japan.html`;
  const indexPath = `index.html`;

<<<<<<< HEAD
  //Returns only the navbar if we call the function from index.html
  if (countryObj.isIndex) {
    return `<div class="navbar__wrapper">
    <nav class="navbar">
      <a class="country" href="${countryObj.pathToRoot + canadaPath}" title="Canada">Canada</a>
      <a class="country" href="${countryObj.pathToRoot + englandPath}" title="England">England</a>
    </nav>
      <a class= "logo" href="${countryObj.pathToRoot + indexPath}" title=""></a>
    <nav class="navbar"> 
      <a class="country" href="${countryObj.pathToRoot + germanyPath}" title="Germany">Germany</a>
      <a class="country" href="${countryObj.pathToRoot + japanPath}" title="Japan">Japan</a>
    </nav>
  </div> `
  }
  // Returns navbar plus a header image with country info for normal pages
  else {
    return `
 
        <div class="navbar__wrapper">
          <nav class="navbar">
            <a class="country" href="${countryObj.pathToRoot + canadaPath}" title="Canada">Canada</a>
            <a class="country" href="${countryObj.pathToRoot + englandPath}" title="England">England</a>
          </nav>
            <a class= "logo" href="${countryObj.pathToRoot + indexPath}" title=""></a>
          <nav class="navbar"> 
            <a class="country" href="${countryObj.pathToRoot + germanyPath}" title="Germany">Germany</a>
            <a class="country" href="${countryObj.pathToRoot + japanPath}" title="Japan">Japan</a>
          </nav>
        </div> 
=======
  return `
  <div class="navbar__wrapper">
  <nav class="navbar">
      <a class="country" href="${countryObj.pathToRoot + canadaPath}" title="Canada">Canada</a>
      <a class="country" href="${countryObj.pathToRoot + englandPath}" title="England">England</a>   
  </nav>
      <a class= "logo" href="${countryObj.pathToRoot + indexPath}" title=""></a>
  <nav class="navbar"> 
      <a class="country" href="${countryObj.pathToRoot + germanyPath}" title="Germany">Germany</a>
      <a class="country" href="${countryObj.pathToRoot + japanPath}" title="Japan">Japan</a>
  </nav>
</div> 

>>>>>>> 849ff3033ee601908ceb7efe9d910ebe89d98148

        <div class="background" style="background-image:url(${countryObj.pathToBackgroundImage});">
          <h1>${countryObj.name}</h1>
          <h3>${countryObj.info}</h3>
          <h2>${countryObj.location}</h2>
        </div>
      `
  }
}
