// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let numero = prompt ("Ingresa un numero divisible entre 2");
    numero = parseInt(numero)
    if (numero % 2 == 0) {
        console.log (numero + " es divisible entre 2")
    }else {
        console.log (numero + " no es divisible entre 2")
    }
