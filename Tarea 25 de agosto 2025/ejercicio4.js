//4.Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra (ejemplo: habitación 25). El programa debe calcular y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente.

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el número de habitación: ', (hab) => {
  const habitacion = Number(hab);
  const piso = Math.ceil(habitacion / 10);
  console.log(`Estás en el piso: ${piso}`);
  rl.close();
});
