
const apiURL = "https://msander87.github.io/wdd230/final-project-rivera/api/rivera.json";
let companies = [];
let events = [];
let turn = 0;


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    companies = jsObject['companies'];
    createCompanies(companies);

    events = jsObject['events'];
    createEvents(events);
  
  });


function createEvents(eventsList){
  let h2 = document.createElement('h2');
  h2.textContent = "UPCOMING EVENTS";
  document.querySelector('#events').appendChild(h2);   

  eventsList.forEach(item => {     
        let event = document.createElement('p');
        event.textContent = item;       
        document.querySelector('#events').appendChild(event);   
  });
}



function createCompanies(companiesList){
    let title = document.createElement('h2');
    title.textContent = "MEMBER COMPANIES";
    document.querySelector('.members').appendChild(title);
    
    let randomList = companiesList.sort(()=> Math.random() - 0.5);
    randomList.forEach(item => {        
        if (turn <= 3){
            let section = document.createElement('section');
            let div = document.createElement('div');
            let image = document.createElement("img");
            let h4 = document.createElement("h4");
            let p1 = document.createElement("p");   
            let p2 = document.createElement("p");   
            let p3 = document.createElement("p");   
            let p4 = document.createElement("p");              
            
            image.setAttribute('src', `images/${item.picture}`);
            image.setAttribute('alt', item.name);
            h4.textContent = item.name;
            p1.textContent = item.address;
            p2.textContent = item.phone;
            p3.textContent = item.email;
            p4.textContent = item.open;

            div.appendChild(h4);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            
            if (turn == 0){
              let pDescription = document.createElement("p");  
              pDescription.setAttribute('class', 'member-description');
              pDescription.textContent = item.description;
              div.appendChild(pDescription);
            }

            section.appendChild(image);
            section.appendChild(div);   
            
            document.querySelector('.members').appendChild(section); 
            
            if (turn == 3){
              let a = document.createElement("a");  
              a.setAttribute('href', 'directory.html');
              a.textContent = "SEE AL MEMBERS COMPANIES";
              document.querySelector('.members').appendChild(a);
            }

            turn += 1;
        }
        
       
    });
    
    
}


const wURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-30.9053&lon=-55.5508&exclude=hourly,minutely&appid=2ace1636d2b567ce42e688891813d59d&lang=en&units=imperial";
let forecast = [];
let turnForecast = 0;

fetch(wURL)
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
        
        if (turnForecast > 0 && turnForecast <= 3){
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

            turnForecast += 1;
        }
        else if(turnForecast <= 3){
            turnForecast += 1
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
