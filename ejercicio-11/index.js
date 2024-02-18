// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos

let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto o autobús):").toLowerCase();

if (tipoVehiculo !== "coche" && tipoVehiculo !== "moto" && tipoVehiculo !== "autobús") {
    alert("Tipo de vehículo no válido");
} else {
    
    let kmsRecorridos = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));

    if (isNaN(kmsRecorridos) || kmsRecorridos < 0) {
        alert("Distancia recorrida no válida");
    } else {
        let litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));

        if (isNaN(litrosConsumidos) || litrosConsumidos < 0) {
            alert("Litros consumidos no válidos");
        } else {
            let precioKm;
            switch (tipoVehiculo) {
                case "coche":
                    precioKm = 0.20;
                    break;
                case "moto":
                    precioKm = 0.10;
                    break;
                case "autobús":
                    precioKm = 0.5;
                    break;
            }

            let extraLitros = litrosConsumidos <= 100 ? 5 : 10;

            let totalPagar = (precioKm * kmsRecorridos) + extraLitros;

            alert(`Total a pagar: $${totalPagar.toFixed(2)}`);
        }
    }
}