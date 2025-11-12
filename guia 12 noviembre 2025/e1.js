// 1-	Crea un programa con un menú de opciones que le permita al usuario elegir una de las 5 opciones:
// •	Sumar
// •	Restar
// •	Multiplicar
// •	Dividir
// •	Salir
// Cada operación debe realizarse dentro de una función distinta (sumar, restar, etc.) y usarse un switch para elegir la operación.



import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funciones para las operaciones
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'Error: no se puede dividir entre cero';
    }
    return a / b;
}

// Mostrar menú
console.log('\n=== MENÚ DE OPERACIONES ===');
console.log('1. Sumar');
console.log('2. Restar');
console.log('3. Multiplicar');
console.log('4. Dividir');
console.log('5. Salir\n');

rl.question('Elija una opción (1-5): ', (opcion) => {
    switch (opcion) {
        case '1':
        case '2':
        case '3':
        case '4':
            rl.question('Ingrese el primer número: ', (num1) => {
                rl.question('Ingrese el segundo número: ', (num2) => {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);
                    let resultado;

                    switch (opcion) {
                        case '1':
                            resultado = sumar(a, b);
                            break;
                        case '2':
                            resultado = restar(a, b);
                            break;
                        case '3':
                            resultado = multiplicar(a, b);
                            break;
                        case '4':
                            resultado = dividir(a, b);
                            break;
                    }

                    console.log(`Resultado: ${resultado}`);
                    rl.close();
                });
            });
            break;

        case '5':
            console.log('Saliendo del programa...');
            rl.close();
            break;

        default:
            console.log('Opción no válida. Intente nuevamente.');
            rl.close();
            break;
    }
});


