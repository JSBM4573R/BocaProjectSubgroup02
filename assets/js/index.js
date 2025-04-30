document.getElementById('informationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    let isValid = true;
  
    // Validación del campo de correo electrónico
    const correo = document.getElementById('correo').value;
    const correoError = document.getElementById('correoError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!correo) {
      correoError.textContent = 'El campo de correo es obligatorio.';
      isValid = false;
      setTimeout(() => {
        correoError.textContent = '';
      }, 5000);
    } else if (!emailPattern.test(correo)) {
      correoError.textContent = 'Por favor, ingresa un correo electrónico válido.';
      isValid = false;
      setTimeout(() => {
        correoError.textContent = '';
      }, 5000);
    } else {
      correoError.textContent = '';
    }
  
    // Validación del campo de pregrado
    const pregrado = document.getElementById('pregrado').value;
    const pregradoError = document.getElementById('pregradoError');
  
    if (!pregrado) {
      pregradoError.textContent = 'Por favor, selecciona una opción de pregrado.';
      isValid = false;
      setTimeout(() => {
        pregradoError.textContent = '';
      }, 5000);
    } else {
      pregradoError.textContent = '';
    }
    if (isValid) {

      alert('¡Solicitud enviada exitosamente!');
    }
});

document.addEventListener('DOMContentLoaded', function() {

  const button = document.querySelector('.graduations__button');
  button.addEventListener('click', function(event) {

    event.preventDefault();
    alert('Comunicate con nuestros asesores a la linea de atención 01800045450145');
  });
});