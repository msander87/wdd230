const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
let prophets = [];
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;

        card.appendChild(h2);

        document.querySelector('.cards').appendChild(card);
    }
  });

