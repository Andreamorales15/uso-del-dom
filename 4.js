
let nuevoDiv = document.createElement('div'); 
nuevoDiv.textContent = "Soy un nuevo div"; 

let divOriginal = document.querySelector('div'); 


divOriginal.parentNode.replaceChild(nuevoDiv, divOriginal);


console.log("Se reemplazó el div original con el nuevo div:", nuevoDiv);
