document.addEventListener("DOMContentLoaded", function () {
    const btnInicio = document.getElementById("btnInicio");

    if (!btnInicio) {
        console.error("No se encontró el botón btnInicio en el DOM.");
        return;
    }

    // Mostrar el botón cuando el usuario baja
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btnInicio.style.display = "block";
        } else {
            btnInicio.style.display = "none";
        }
    });

    // Función para volver arriba con animación suave
    btnInicio.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".fill");
    skills.forEach(skill => {
        skill.style.width = "0%";  // Ocultamos inicialmente
        setTimeout(() => {
            skill.style.transition = "width 2s ease-in-out"; 
            skill.style.width = skill.getAttribute("data-width"); // Extraemos el ancho correcto
        }, 500);
    });
});



