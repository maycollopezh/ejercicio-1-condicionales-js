// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.

let costoBaseHelado = 50;
let costoOreo = 10;
let costoKitKat = 15;
let costoBrownie = 20;

let toppingElegido = prompt("Elige tu topping: oreo, KitKat, brownie");

toppingElegido = toppingElegido.toLowerCase();

switch (toppingElegido) {
    case "oreo":
        costoBaseHelado += costoOreo;
        alert(`El helado con topping de oreo cuesta ${costoBaseHelado} MXN.`);
        break;
    case "kitkat":
        costoBaseHelado += costoKitKat;
        alert(`El helado con topping de KitKat cuesta ${costoBaseHelado} MXN.`);
        break;
    case "brownie":
        costoBaseHelado += costoBrownie;
        alert(`El helado con topping de brownie cuesta ${costoBaseHelado} MXN.`);
        break;
    default:
        alert("Lo sentimos, no tenemos este topping.");
        alert(`El helado sin topping cuesta ${costoBaseHelado} MXN.`);
}
