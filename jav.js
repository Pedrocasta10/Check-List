document.addEventListener("DOMContentLoaded", function () {
    // Obtener la fecha y hora actual
    function getDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        return now.toLocaleDateString('es-ES', options);
    }

    // Actualizar la fecha y hora en la página
    function updateDateTime() {
        const datetimeElement = document.getElementById("datetime");
        datetimeElement.textContent = "Fecha y Hora: " + getDateTime();
    }

    // Marcar la tarea como completada
    function markTaskCompleted() {
        const checklistItems = document.querySelectorAll("#checklist li");
        checklistItems.forEach(function (item) {
            const checkbox = item.querySelector("input[type='checkbox']");
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    item.style.textDecoration = "line-through";
                } else {
                    item.style.textDecoration = "none";
                }
            });
        });
    }

    // Actualizar la fecha y hora cada segundo
    setInterval(function () {
        updateDateTime();
    }, 1000);

    // Inicializar la página
    updateDateTime();
    markTaskCompleted();
});
