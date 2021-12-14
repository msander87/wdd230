
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-30.9053&lon=-55.5508&exclude=hourly&appid=2ace1636d2b567ce42e688891813d59d&lang=en&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
        
    document.querySelector('#humidity').innerHTML = jsObject.current.humidity;
    document.querySelector('#current-description').innerHTML = jsObject.weather[0].description;
    document.querySelector('#temperature').innerHTML = jsObject.current.temp.toFixed(0);
  
  });




/*
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id="+cityCode+"&units=imperial&cnt=40&appid=2ace1636d2b567ce42e688891813d59d";

let forecast = [];

function createForecast(fList){
    fList.forEach(item => {
        
        if (item.dt_txt.includes("18:00:00")){
            let section = document.createElement('section');
            let h5 = document.createElement('h5');
            let image = document.createElement("img");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            
            let date = new Date(item.dt_txt);
            let day = date.getDay();
            let today = new Date().getDay();
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            if(day == today){
              h5.textContent = "Today";  
            }
            else{
              h5.textContent = weekday[day];
            }
            
            image.setAttribute('src', `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`);
            image.setAttribute('alt', item.weather[0].description);
            p.innerHTML = `${item.main.temp_max.toFixed(0)}&deg; F`;
            p2.innerHTML = item.weather[0].description;
            
    
            section.appendChild(h5);
            section.appendChild(image);
            section.appendChild(p);
            section.appendChild(p2);
            document.querySelector('.forecast').appendChild(section);   
        }
           
    });
}

fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    forecast = jsonObject['list'];
    createForecast(forecast);
  });


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
