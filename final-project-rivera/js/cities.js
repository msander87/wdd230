const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let cities = [];

function createHtml(citiesList){
    citiesList.forEach(city => {
        if (city.name == "Soda Springs" || city.name == "Fish Haven" || city.name == "Preston"){
          let sect = document.createElement('section');
          let div = document.createElement('div');
          let divin = document.createElement('div');
          let name = document.createElement('h3');
          let motto = document.createElement("p");
          let year = document.createElement("p");
          let population = document.createElement("p");
          let rain = document.createElement("p");
          let image = document.createElement("img");

          div.setAttribute('class', 'home-section');
          name.textContent = city.name;
          motto.textContent = city.motto;
          year.textContent = `Year Founded: ${city.yearFounded}`;
          population.textContent = `Population: ${city.currentPopulation}`;
          rain.textContent = `Annual Rain Fall: ${city.averageRainfall}`;
          image.setAttribute('src', `images/${city.photo}`);
          image.setAttribute('alt', `${city.name} photo`);


          divin.appendChild(name);
          divin.appendChild(motto);
          divin.appendChild(year);
          divin.appendChild(population);
          divin.appendChild(rain);
          div.appendChild(divin);
          sect.appendChild(div);
          sect.appendChild(image);
      

          document.querySelector('.cities-container').appendChild(sect);    
        }      
    });
}



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    cities = jsonObject['towns'];
    createHtml(cities);
  });
