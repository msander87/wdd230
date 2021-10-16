
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

let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek == 5){
    document.querySelector(".sb-container").style.display = 'block';
}

/*
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Sat', 'Sun']
let numbers = [0, 1, 2, 3, 4, 5, 6]
*/

function openClose(){
    const mainnav = document.querySelector('.nonResponsive');
    const menup = document.querySelector('.open');
    
    mainnav.classList.toggle('responsive');
    menup.classList.toggle('close');
}
