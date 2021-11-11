const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
let prophets = [];

function createCard(prophetsList){
    prophetsList.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pBirthdate = document.createElement("p");
        let pBirthplace = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        pBirthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        pBirthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);


        card.appendChild(h2);
        card.appendChild(pBirthdate);
        card.appendChild(pBirthplace);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);        
    });
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    prophets = jsonObject['prophets'];
    createCard(prophets);
  });
