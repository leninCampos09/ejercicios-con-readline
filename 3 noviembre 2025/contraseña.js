// Solicitar al usuario y verificar si la contraseña es correcta o no

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contraseña = 'Ab@12345';

rl.question('Por favor, ingrese la contraseña: ', (pass) => {
    if (pass === contraseña) {
        console.log('Contraseña correcta');
    } else {
        console.log('Contraseña incorrecta');
    }
    rl.close(); //Se cierra después de procesar la respuesta
});

