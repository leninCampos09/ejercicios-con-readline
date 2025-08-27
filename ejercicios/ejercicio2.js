//solicitar al usuario su color favorito e imprimir por consola la respuesta
import readline from 'readline'; // Importamos el módulo readline usando la sintaxis de ES6
const rl = readline.createInterface({ // configuramos la entrada y salida
    input: process.stdin,
    output: process.stdout
});

// hacerle la pregunta al usuario
rl.question("¿Cuál es tu color favorito? ", (color) => {
    // imprimir la respuesta en la consola
    console.log(`Tu color favorito es: "${color}".`);
    
    // cerrar la interfaz de readline
    rl.close();
})