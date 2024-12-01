
let infoDiv = document.getElementById('info');
console.log("Contenido del <div> con ID 'info':", infoDiv.textContent);

let detalleParrafo = document.querySelector('.detalle');
detalleParrafo.textContent = "Este es un detalle modificado";

let parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
  parrafo.style.backgroundColor = 'lightblue';
});
