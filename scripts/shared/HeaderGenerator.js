export const Header = (countryObj) => {
  const landmarkHTML = document.querySelector(".landmarkList")
  landmarkHTML.innerHTML += `
        <header>
        <nav class="navbar">
            <a class="country" href="index.html" title="Canada">Canada</a>
            <a class="country" href="index.html" title="England">England</a>
        </nav>
            <a class= "logo" href="" title=""></a>
        <nav class="navbar"> 
            <a id="currentNav" href="index.html" title="Germany">Germany</a>
            <a class="country" href="index.html" title="Japan">Japan</a>
        </nav>
        </header> 
        <header class="background">
          <h1>${countryObj.name}</h1>
          <h3>${countryObj.info}</h3>
          <h2>${countryObj.location}</h2>
        </header>
    `
  }


