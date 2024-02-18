// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numeroMenor = alert("Ingresaras dos numeros para ver cual es menor que el otro")
    let primerNumero = prompt("Ingresa el primer numero")
    let segundoNumero = prompt("Ingrese el segundo numero")

        if (primerNumero < segundoNumero) {
            alert (primerNumero + " es el menor")
        } 
        else if (segundoNumero < primerNumero){
            alert (segundoNumero + " es el menor")
        }
