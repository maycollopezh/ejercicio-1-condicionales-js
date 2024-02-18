// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

let tipoPrograma = prompt("Selecciona el tipo de programa:\n1. Course\n2. Carrera\n3. Master");

let tieneBeca = confirm("¿Cuentas con alguna beca?");

let costoMensual;
let duracion;
let descuento = 0;

switch (tipoPrograma.toLowerCase()) {
    case "course":
        costoMensual = 4999;
        duracion = 2;
        break;
    case "carrera":
        costoMensual = 3999;
        duracion = 6;
        break;
    case "master":
        costoMensual = 2999;
        duracion = 12;
        break;
    default:
        alert("Opción de programa no válida");
}

if (tieneBeca) {
    let tipoBeca = prompt("Selecciona el tipo de beca:\n1. Beca Facebook\n2. Beca Google\n3. Beca Jesua");

    switch (tipoBeca.toLowerCase()) {
        case "beca facebook":
            descuento = 0.2;
            break;
        case "beca google":
            descuento = 0.15;
            break;
        case "beca jesua":
            descuento = 0.5;
            break;
        default:
            alert("Opción de beca no válida");
    }
}

let precioConDescuento = costoMensual * (1 - descuento);
let gastoTotal = precioConDescuento * duracion;

alert(`Costo mensual con descuento: $${precioConDescuento.toFixed(2)} MXN`);
alert(`Gasto total por ${duracion} meses: $${gastoTotal.toFixed(2)} MXN`);