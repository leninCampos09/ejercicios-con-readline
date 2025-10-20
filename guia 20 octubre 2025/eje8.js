// Cree un programa que solicite al usuario su salario base, el número de horas extras
// trabajadas y el valor de una hora de trabajo normal. Luego, calcule el salario total,
// considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el
// resultado en la consola. 


// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que calcula el salario total
function calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal) {
  const pagoHorasExtras = horasExtras * (valorHoraNormal * 1.5);
  const salarioTotal = salarioBase + pagoHorasExtras;
  return salarioTotal;
}

// Solicitamos los datos al usuario
rl.question('Ingrese su salario base: ', (salarioInput) => {
  rl.question('Ingrese el número de horas extras trabajadas: ', (horasExtrasInput) => {
    rl.question('Ingrese el valor de una hora de trabajo normal: ', (valorHoraInput) => {
      
      // Convertimos los valores a números
      const salarioBase = parseFloat(salarioInput);
      const horasExtras = parseFloat(horasExtrasInput);
      const valorHoraNormal = parseFloat(valorHoraInput);

      // Calculamos el salario total
      const salarioTotal = calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal);

      console.log(`Su salario total es: $${salarioTotal.toFixed(2)}`);

      rl.close();
    });
  });
});
