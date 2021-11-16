const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2ace1636d2b567ce42e688891813d59d";



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#current-temp").innerHTML = jsObject.main.temp;
    
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description; 
    document.querySelector('#imagesrc').textContent = imagesrc;
    document.querySelector('#icon').setAttribute('src', imagesrc); 
    document.querySelector('#icon').setAttribute('alt', desc);
    document.querySelector('#name').innerHTML = jsObject.name;
    document.querySelector('#json').innerHTML = JSON.stringify(jsObject);
  });