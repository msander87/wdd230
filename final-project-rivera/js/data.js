
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-30.9053&lon=-55.5508&exclude=hourly,minutely&appid=2ace1636d2b567ce42e688891813d59d&lang=en&units=imperial";
let forecast = [];
let turn = 0;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.querySelector('#temperature').innerHTML = jsObject.current.temp.toFixed(0);
    document.querySelector('#current-description').innerHTML = jsObject.current.weather[0].description;
    document.querySelector('#humidity').innerHTML = jsObject.current.humidity;   

    forecast = jsObject['daily'];
    createForecast(forecast);
  
  });



function createForecast(forecastList){
    forecastList.forEach(item => {
        
        if (turn > 0 && turn <= 3){
            let div = document.createElement('div');
            let pDay = document.createElement('p');
            let image = document.createElement("img");
            let pTemp = document.createElement("p");          
            
            let convertedToMiliseconds = item.dt * 1000;
            let date = new Date(convertedToMiliseconds);
            let day = date.getDay();
            let today = new Date().getDay();
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            if(day == today){
              pDay.textContent = "Today";  
            }
            else if(day == today + 1){
                pDay.textContent = "Tomorrow";  
              }
            else{
              pDay.textContent = weekday[day];
            }
            
            image.setAttribute('src', `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`);
            image.setAttribute('alt', item.weather[0].description);
            pTemp.innerHTML = `${item.temp.max.toFixed(0)}&deg;F / ${item.temp.min.toFixed(0)}&deg;F`;
            
            
    
            div.appendChild(pDay);
            div.appendChild(image);
            div.appendChild(pTemp);
            document.querySelector('#forecast').appendChild(div);   

            turn += 1;
        }
        else if(turn <= 3){
            turn += 1
        }
           
    });
}










/*
// City events

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let cities = [];
let events = [];
function createHtml(citiesList){
    citiesList.forEach(city => {
        if (city.name == cityName){
          events = city.events;
              events.forEach(event => {
                                        
                let p = document.createElement("p");
                p.textContent = event;
                document.querySelector('#events').appendChild(p);    
                 
            });
               
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
  });*/
