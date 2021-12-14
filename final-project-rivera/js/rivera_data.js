
const apiURL = "https://msander87.github.io/wdd230/final-project-rivera/api/rivera.json";
let companies = [];
let events = [];
let turn = 0;



fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    companies = jsonObject['companies'];
    createCompanies(companies);
  });



function createCompanies(companiesList){
    let h2 = document.createElement('h2');
    h2.textContent = "MEMBER COMPANIES";
    document.querySelector('.members').appendChild(h2);   

    let randomList = companiesList.sort(()=> Math.random() - 0.5);
    randomList.forEach(item => {        
        if (turn <= 3){
            let section = document.createElement('section');
            let div = document.createElement('div');
            let image = document.createElement("img");
            let p1 = document.createElement("p");   
            let p2 = document.createElement("p");   
            let p3 = document.createElement("p");   
            let p4 = document.createElement("p");              
            
            image.setAttribute('src', `images/${item.picture}`);
            image.setAttribute('alt', item.name);
            p1.textContent = item.address;
            p2.textContent = item.phone;
            p3.textContent = item.email;
            p4.textContent = item.open;

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

            turn += 1;
        }
        else{
          break;
        }
       
    });
    let a = createElement('a');
    a.setAttribute('href', 'directory.html');
    a.textContent = 'SEE ALL MEMBER COMPANIES';
    document.querySelector('.members').appendChild(a);   
}


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
