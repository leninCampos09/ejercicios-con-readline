import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el primer número: ", (num1) => {
    rl.question("Ingresa el segundo número: ", (num2) => {
        // Convertimos las entradas a números
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log("Por favor, ingresa valores numéricos válidos.");
        } else {
            const suma = numero1 + numero2;
            console.log(`Los números ingresados son: ${numero1} y ${numero2}`);
            console.log(`La suma de los dos números es: ${suma}`);
        }

        rl.close();
    });
});

//solicitar al usuario una temperatura en celcius y convertirlo a farenheit
rl.question("Ingresa la temperatura en Celsius: ", (celsius) => {
    let temParse= parseFloat(celsius);
    let farenheit= (temParse * 9/5) + 32;
    console.log(`La temperatura en Fahrenheit es: ${farenheit}`);
    rl.close();
});


//crea un programa en node.js que permita calcular el costo total de una compra el progrma debe: solicitar al usuario unitario de un producto (puede ser decimal), solicitar la cantidad de productos comprados(entero), calcular el costo total multplicando el precio unitario por la cantidad
rl.question("Ingresa el precio unitario del producto: ", (precioUnitario) => {
    rl.question("Ingresa la cantidad de productos comprados: ", (cantidad) => {
        const precio = parseFloat(precioUnitario);
        const cantidadProductos = parseInt(cantidad, 10);

        if (isNaN(precio) || isNaN(cantidadProductos) || cantidadProductos < 0) {
            console.log("Por favor, ingresa valores numéricos válidos.");
        } else {
            const costoTotal = precio * cantidadProductos;
            console.log(`El costo total de la compra es: $${costoTotal.toFixed(2)}`);
        }

        rl.close();
    });
});


//crea un programa que solicite al usuario tres notas pueden ser decimales el programa debe calcular el promedio de las 3 notas y mostrar el resultado en consola
rl.question("Ingresa la primera nota: ", (nota1) => {
    rl.question("Ingresa la segunda nota: ", (nota2) => {
        rl.question("Ingresa la tercera nota: ", (nota3) => {
            const n1 = parseFloat(nota1);
            const n2 = parseFloat(nota2);
            const n3 = parseFloat(nota3);

            if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                console.log("Por favor, ingresa valores numéricos válidos.");
            } else {
                const promedio = (n1 + n2 + n3) / 3;
                console.log(`El promedio de las tres notas es: ${promedio.toFixed(2)}`);
            }

            rl.close();
        });
    });
});

//solicita una cantidad en kilometros decimal convierte a millas sabiendo que 1km equivale a 0.621371 millas muestra el resultado con dos decimales

rl.question("Ingresa la cantidad en kilómetros: ", (kilometros) => {
    const km = parseFloat(kilometros);
    const millas = km * 0.621371;

    if (isNaN(km)) {
        console.log("Por favor, ingresa un valor numérico válido.");
    } else {
        console.log(`La cantidad en millas es: ${millas.toFixed(2)}`);
    }

    rl.close();
});