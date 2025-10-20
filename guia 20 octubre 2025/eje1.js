// Escriba un programa que solicite al usuario una cadena de texto (palabra o frase)
// utilizando la librería readline, el programa debe de contener una función que permita
// recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas
// alfabéticamente.

// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que recibe una cadena y devuelve las letras ordenadas alfabéticamente
function ordenarCadena(cadena) {
  // Eliminamos espacios, convertimos a minúsculas y ordenamos
  return cadena
    .toLowerCase()
    .split('')
    .filter(c => c !== ' ') // opcional: ignorar espacios
    .sort()
    .join('');
}

// Pedimos la cadena al usuario
rl.question('Ingrese una palabra o frase: ', (input) => {
  const resultado = ordenarCadena(input);
  console.log(`Cadena ordenada alfabéticamente: ${resultado}`);
  
  // Cerramos la interfaz
  rl.close();
});
