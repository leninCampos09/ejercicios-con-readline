// Solicitar al usuario un número y determinar si este es un numero positivo o negativo

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, ingrese un número: ', (input) => {
    const numero = parseFloat(input);
    if (isNaN(numero)) {
        console.log('No es un número válido');
    } else if (numero >= 0) {
        console.log('El número es positivo');
    } else {
        console.log('El número es negativo');
    }
    rl.close();
});