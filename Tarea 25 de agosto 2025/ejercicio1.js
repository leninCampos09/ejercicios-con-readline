//1.	Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada. 

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
  let numero = Number(num);
  console.log(`\nNúmero ingresado: ${numero}`);
  console.log(`Cuadrado: ${Math.pow(numero, 2)}`);
  console.log(`Raíz cuadrada: ${Math.sqrt(numero)}`);
  rl.close();
});
