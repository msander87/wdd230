
try{
    const options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
              
    }; 
    const theYear = {
        year: 'numeric'
    }
    document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-UK", options);
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-UK", theYear);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}


//to show the banner only on Fridays
let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek == 5){
    document.querySelector(".sb-container").style.display = 'block';
}

//to set the name of the days in the forecaste section
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let numbersDay = [];
let thisDay = dayOfWeek;
for (let i = 0; i < 5; i++ ){
    if(thisDay <= 5){
        thisDay = thisDay + 1;
        numbersDay.push(thisDay);
    }
    else{
        thisDay = 0;
        numbersDay.push(thisDay);
    }
    
}

document.querySelector("#h51").innerHTML = days[4];
document.querySelector("#h52").innerHTML = days[5];
document.querySelector("#h53").innerHTML = days[6];
document.querySelector("#h54").innerHTML = days[0];
document.querySelector("#h55").innerHTML = days[1];


//function to open and close de hamburguer menu
function openClose(){
    const mainnav = document.querySelector('.nonResponsive');
    const menup = document.querySelector('.open');
    
    mainnav.classList.toggle('responsive');
    menup.classList.toggle('close');
}
