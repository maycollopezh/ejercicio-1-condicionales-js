//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diaSemana = prompt("Ingresa un día de la semana");

diaSemana = diaSemana.toLowerCase();

switch (diaSemana) {
    case "lunes":
        alert("Es lunes. Comienza una nueva semana.");
        break;
    case "viernes":
        alert("¡Viernes al fin! El fin de semana está cerca.");
        break;
    case "sabado":
    case "domingo":
        alert("Es fin de semana. ¡Disfruta!");
        break;
    default:
        alert("Ese día no es lunes, viernes, sábado ni domingo.");
}
