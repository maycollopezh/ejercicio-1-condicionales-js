// 8. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let calificacion = prompt("Ingresa tu calificación (entre 1 y 10)");

if (!isNaN(calificacion) && calificacion >= 1 && calificacion <= 10) {
    calificacion = parseFloat(calificacion);

    if (calificacion < 6) {
        alert("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        alert("Regular");
    } else if (calificacion === 9) {
        alert("Bien");
    } else if (calificacion === 10) {
        alert("Excelente");
    }
} else {
    alert("Error: Ingresa una calificación válida entre 1 y 10.");
}