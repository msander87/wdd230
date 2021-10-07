
try{
    const options = { 
        year: 'numeric'        
    }; 
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-US", options);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}

const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nonResponsive')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

