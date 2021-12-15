
const apiURL = "https://msander87.github.io/wdd230/final-project-rivera/api/rivera.json";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    document.querySelector('#motto').innerHTML = jsObject.info.motto;
    document.querySelector('#founded').innerHTML = `It was founded in: ${jsObject.info.founded}`;
    document.querySelector('#population').innerHTML = `Current population: ${jsObject.info.population}`;
    document.querySelector('#governor').innerHTML = `Current governor: ${jsObject.governor}`;  
    
  
  });


