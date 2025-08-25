//2.	Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Quieres participar en el sorteo? (sí/no): ', (respuesta) => {
  /^(si|sí)$/i.test(respuesta.trim())
    ? console.log(`Tu número de premio es: ${Math.floor(Math.random() * 30)}`)
    : console.log('Gracias por tu respuesta.');
  rl.close();
});
