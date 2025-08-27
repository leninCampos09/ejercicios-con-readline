import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar dos números e imprimir la suma
rl.question("Ingresa el primer número: ", (num1) => {
    rl.question("Ingresa el segundo número: ", (num2) => {
        let numero1 = parseFloat(num1);
        let numero2 = parseFloat(num2);
        let resultado = isNaN(numero1) || isNaN(numero2) ? "Por favor, ingresa valores numéricos válidos." : `La suma de los dos números es: ${numero1 + numero2}`;
        console.log(resultado);
        rl.close();
    });
});

// Solicitar la temperatura en Celsius y convertir a Fahrenheit
rl.question("Ingresa la temperatura en Celsius: ", (celsius) => {
    let temParse = parseFloat(celsius);
    let resultado = isNaN(temParse) ? "Por favor, ingresa un valor numérico válido." : `La temperatura en Fahrenheit es: ${(temParse * 9 / 5) + 32}`;
    console.log(resultado);
    rl.close();
});

// Calcular el costo total de una compra
rl.question("Ingresa el precio unitario del producto: ", (precioUnitario) => {
    rl.question("Ingresa la cantidad de productos comprados: ", (cantidad) => {
        let precio = parseFloat(precioUnitario);
        let cantidadProductos = parseInt(cantidad, 10);
        let resultado = isNaN(precio) || isNaN(cantidadProductos) || cantidadProductos < 0
            ? "Por favor, ingresa valores numéricos válidos."
            : `El costo total de la compra es: $${(precio * cantidadProductos).toFixed(2)}`;
        console.log(resultado);
        rl.close();
    });
});

// Calcular el promedio de tres notas
rl.question("Ingresa la primera nota: ", (nota1) => {
    rl.question("Ingresa la segunda nota: ", (nota2) => {
        rl.question("Ingresa la tercera nota: ", (nota3) => {
            let n1 = parseFloat(nota1);
            let n2 = parseFloat(nota2);
            let n3 = parseFloat(nota3);
            let resultado = isNaN(n1) || isNaN(n2) || isNaN(n3)
                ? "Por favor, ingresa valores numéricos válidos."
                : `El promedio de las tres notas es: ${(n1 + n2 + n3) / 3}`;
            console.log(resultado);
            rl.close();
        });
    });
});

// Convertir kilómetros a millas
rl.question("Ingresa la cantidad en kilómetros: ", (kilometros) => {
    let km = parseFloat(kilometros);
    let resultado = isNaN(km) ? "Por favor, ingresa un valor numérico válido." : `La cantidad en millas es: ${(km * 0.621371).toFixed(2)}`;
    console.log(resultado);
    rl.close();
});
 