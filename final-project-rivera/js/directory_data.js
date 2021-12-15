
const apiURL = "https://msander87.github.io/wdd230/final-project-rivera/api/rivera.json";
let companies = [];


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    companies = jsObject['companies'];
    createCompanies(companies);

  });


function createCompanies(companiesList){
    
    companiesList.forEach(item => {             
      let section = document.createElement('section');
      let div = document.createElement('div');
      let image = document.createElement("img");
      let h4 = document.createElement("h4");
      let p1 = document.createElement("p");   
      let p2 = document.createElement("p");   
      let p3 = document.createElement("p");   
      let p4 = document.createElement("p");  
      let p5 = document.createElement("p");           

      image.setAttribute('src', `images/${item.picture}`);
      image.setAttribute('alt', item.name);
      h4.textContent = item.name;
      p1.textContent = item.address;
      p2.textContent = item.phone;
      p3.textContent = item.email;
      p4.textContent = item.open;
      p5.textContent = item.description;

      div.appendChild(h4);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      div.appendChild(p4);
      div.appendChild(p5);

      section.appendChild(image);
      section.appendChild(div);   

      document.querySelector('.directory-grid').appendChild(section);        
       
    });   
}

