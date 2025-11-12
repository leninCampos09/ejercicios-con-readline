// Solicitar al usuario que ingrese un número del 1 al 3

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número del 1 al 3: ', (num) => {
    const numero = Number(num);

    switch (numero) {
        case 1:
            console.log('Número uno');
            break;
        case 2:
            console.log('Número dos');
            break;
        case 3:
            console.log('Número tres');
            break;
        default:
            console.log('El número ingresado no está en el rango solicitado');
            break;
    }

    rl.close();
});
