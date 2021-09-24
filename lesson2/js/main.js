try{
    const options = { 
        year: 'numeric'        
    }; 
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-US", options);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}

let string = document.lastModified;
document.getElementById("last_updated").textContent = string;
