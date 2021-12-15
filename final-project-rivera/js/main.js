
/*set copyright date*/

try{    
    const theYear = {
        year: 'numeric'
    }
    
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-UK", theYear);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}


/*set last modified date*/ 
let updated = document.lastModified;
document.querySelector("#updated").textContent = `Last modified date: ${updated}`;



//function to open and close de hamburguer menu
function openClose(){
    const mainnav = document.querySelector('.nonResponsive');
    const menup = document.querySelector('.open');
    
    mainnav.classList.toggle('responsive');    
    
    let menu = document.querySelector('#open').textContent
    if (menu == "menu"){
        document.querySelector('#open').innerHTML = "close"
    }
    else{
        document.querySelector('#open').innerHTML = "menu"
    }
}


