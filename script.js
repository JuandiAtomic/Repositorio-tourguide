


// Fechas 

document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#fecha-llegada", {
        minDate: "today",
        onChange: function (selectedDates, dateStr, instance) {
            // Al seleccionar la fecha de llegada, actualiza la fecha mínima para la fecha de salida
            const fechaSalidaPicker = document.getElementById("fecha-salida")._flatpickr;
            fechaSalidaPicker.set("minDate", selectedDates[0]);
        },
    });

    flatpickr("#fecha-salida", {
        minDate: "today",
    });
});




// Personas
// Función para establecer los valores predeterminados del dropdown
function setValoresPredeterminados() {
    // Obtén referencias a los elementos del dropdown
    var dropdownContent = document.getElementById("dropdown-content");
    var dropdownBtn = document.querySelector('.dropdown-btn');

    // Establece los valores predeterminados
    dropdownContent.querySelector('input[name="adultos"]').value = 1;
    dropdownContent.querySelector('input[name="ninos"]').value = 0;
    dropdownContent.querySelector('input[name="habitaciones"]').value = 1;

    // Actualiza el texto del botón del dropdown
    actualizarDropdown();
}

// Función para actualizar el texto del botón del dropdown
function actualizarDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    var dropdownBtn = document.querySelector('.dropdown-btn');

    // Recopila las opciones seleccionadas
    var adultos = parseInt(dropdownContent.querySelector('input[name="adultos"]').value);
    var ninos = parseInt(dropdownContent.querySelector('input[name="ninos"]').value);
    var habitaciones = parseInt(dropdownContent.querySelector('input[name="habitaciones"]').value);

    // Restricciones: Mínimo 1 adulto y 1 habitación
    adultos = Math.max(adultos, 1);
    habitaciones = Math.max(habitaciones, 1);


    // Actualiza el texto del botón con la cantidad de personas y habitaciones seleccionadas
    var personasText = `${adultos} Adultos, ${ninos} Niños`;
    var habitacionesText = `${habitaciones} Habitaciones`;

    var selectedOptions = [];
    if (adultos > 0 || ninos > 0) {
        selectedOptions.push(personasText);
    }
    if (habitaciones > 0) {
        selectedOptions.push(habitacionesText);
    }

    dropdownBtn.textContent = selectedOptions.length > 0 ? selectedOptions.join(' - ') : "Personas";
}

// Llama a la función para establecer valores predeterminados al cargar la página
window.onload = function () {
    setValoresPredeterminados();

    // Agrega un evento de cambio a los inputs para que se actualice el texto del botón
    var inputs = document.querySelectorAll('.dropdown-content input');
    inputs.forEach(function (input) {
        input.addEventListener('change', actualizarDropdown);
    });
};








