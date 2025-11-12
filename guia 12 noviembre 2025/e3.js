// Programa para calcular el precio de entrada al cine según la edad del cliente usando switch

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su edad: ', (edadInput) => {
  const edad = Number(edadInput);
  let precio;
  let categoria;

  if (isNaN(edad) || edad < 0) {
    console.log(' Error: la edad ingresada no es válida.');
  } else {
    switch (true) {
      case edad < 12:
        categoria = 'Niño';
        precio = 3.00;
        break;
      case edad >= 12 && edad <= 59:
        categoria = 'Adulto';
        precio = 5.00;
        break;
      case edad >= 60:
        categoria = 'Adulto mayor';
        precio = 2.50;
        break;
      default:
        console.log(' Error: edad fuera de rango.');
        break;
    }

    if (categoria) {
      console.log(`Categoría: ${categoria}`);
      console.log(`Precio de entrada: $${precio.toFixed(2)}`);
    }
  }

  rl.close();
});

