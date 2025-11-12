// 4- Crea un programa que calcule el costo del estacionamiento según las horas que el vehículo estuvo en el parqueo.
// Las tarifas son:
// 1 hora → $2
// De 2 a 4 horas → $5
// Más de 4 horas → $10
// El programa debe pedir al usuario cuántas horas estuvo estacionado y mostrar el total a pagar.
// Si el usuario ingresa un número negativo o no válido, se debe mostrar un mensaje de error.

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularTarifa(horas) {
  let costo;

  switch (true) {
    case horas === 1:
      costo = 2;
      break;
    case horas >= 2 && horas <= 4:
      costo = 5;
      break;
    case horas > 4:
      costo = 10;
      break;
    default:
      costo = null;
      break;
  }

  return costo;
}

rl.question('¿Cuántas horas estuvo estacionado el vehículo? ', (respuesta) => {
  const horas = parseFloat(respuesta);

  if (isNaN(horas) || horas < 0) {
    console.log(' Error: Ingrese un número válido de horas.');
  } else {
    const costo = calcularTarifa(horas);
    console.log(` Total de horas: ${horas}`);
    console.log(` El total a pagar es: $${costo}`);
  }

  rl.close();
});

