const form = document.querySelector('#my-form');

form.addEventListener('submit', (event) => {
   event.preventDefault();

   // Obtener el valor del input del formulario
   const nombre = document.querySelector('#nombre').value;

   // Obtener un usuario aleatorio del archivo JSON
   fetch('followers.json')
      .then(response => response.json())
      .then(data => {
         const randomIndex = Math.floor(Math.random() * data.length);
         const randomUser = data[randomIndex].userName;

         // Mostrar el mensaje en pantalla
         const message = `${nombre} le dió pelea física a ${randomUser}`;
         alert(message);
      })
      .catch(error => console.log(error));
});