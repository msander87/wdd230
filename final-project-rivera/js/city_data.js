
const apiURL = "https://msander87.github.io/wdd230/final-project-rivera/api/rivera.json";
let events = [];



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    events = jsObject['events'];
    cEvents(events);
  
  });


function cEvents(eventsList){
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
*/
