// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. 

let numeroMayor = alert("Ingresaras tres numeros para ver cual es el numero mayor")
    let primerNumeroMayor = prompt("Ingresa el primer numero");
    let segundoNumeroMayor = prompt("Ingrese el segundo numero");
    let tercerNumeroMayor = prompt("Ingrese el tercer numero");

    if (primerNumeroMayor > segundoNumeroMayor && primerNumeroMayor > tercerNumeroMayor) {
        alert(primerNumeroMayor + " es el mayor");
    } else if (segundoNumeroMayor > primerNumeroMayor && segundoNumeroMayor > tercerNumeroMayor) {
        alert(segundoNumeroMayor + " es el mayor");
    } else if (tercerNumeroMayor > primerNumeroMayor && tercerNumeroMayor > segundoNumeroMayor) {
        alert(tercerNumeroMayor + " es el mayor");
    } else if (primerNumeroMayor === segundoNumeroMayor && primerNumeroMayor === tercerNumeroMayor) {
        alert("Los tres números son iguales");
    } else if (primerNumeroMayor === segundoNumeroMayor) {
        alert(primerNumeroMayor + " y " + segundoNumeroMayor + " son iguales");
    } else if (segundoNumeroMayor === tercerNumeroMayor) {
        alert(segundoNumeroMayor + " y " + tercerNumeroMayor + " son iguales");
    } else if (tercerNumeroMayor === primerNumeroMayor) {
        alert(tercerNumeroMayor + " y " + primerNumeroMayor + " son iguales");
    }
