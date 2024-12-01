 
 let clickMeButton = document.createElement('button');
 clickMeButton.textContent = '¡Haz clic aquí!';
 clickMeButton.id = 'clickMe';
 document.body.appendChild(clickMeButton); 


 let removeEventButton = document.createElement('button');
 removeEventButton.textContent = 'Eliminar evento';
 removeEventButton.id = 'removeEvent';
 document.body.appendChild(removeEventButton); 


 function mostrarAlert() {
     alert("¡Botón clickeado!");
 }

 function eliminarEvento() {
     clickMeButton.removeEventListener('click', mostrarAlert); 
     console.log("Evento eliminado.");
 }

 clickMeButton.addEventListener('click', mostrarAlert);

 removeEventButton.addEventListener('click', eliminarEvento);