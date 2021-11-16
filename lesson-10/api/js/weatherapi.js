const apiURL = "api.openweathermap.org/data/2.5/weather?id=2172797&appid=2ace1636d2b567ce42e688891813d59d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let tem = jsObject.main.temp;
    alert(tem);
  });