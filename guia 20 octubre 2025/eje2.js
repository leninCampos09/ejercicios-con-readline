// Escriba un programa que solicite al usuario una cadena de texto, este programa debe
// de contener una función que reciba la cadena como parámetro y devuelva una nueva
// cadena donde la primera letra de cada palabra esté en mayúsculas. 


// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que convierte la primera letra de cada palabra en mayúscula
function capitalizarPalabras(cadena) {
  return cadena
    .toLowerCase() // Convertimos todo a minúsculas primero
    .split(' ')    // Dividimos por espacios
    .map(palabra => 
      palabra.charAt(0).toUpperCase() + palabra.slice(1)
    )
    .join(' ');    // Volvemos a unir las palabras con espacios
}

// Solicitamos la cadena al usuario
rl.question('Ingrese una palabra o frase: ', (input) => {
  const resultado = capitalizarPalabras(input);
  console.log(`Resultado: ${resultado}`);
  
  rl.close();
});
