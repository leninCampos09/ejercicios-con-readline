// Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
// función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
// contiene.

// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que cuenta los caracteres de una cadena
function contarCaracteres(cadena) {
  return cadena.length;
}

// Solicitamos la cadena al usuario
rl.question('Ingrese una palabra o frase: ', (input) => {
  const cantidad = contarCaracteres(input);
  console.log(`La cadena contiene ${cantidad} caracteres.`);
  
  rl.close();
});
