//solicitar al usuario dos palabras y mostrarlas juntas
import readline from 'readline'; // Importamos el módulo readline usando la sintaxis de ES6
const rl = readline.createInterface({ // configuramos la entrada y salida
    input: process.stdin,
    output: process.stdout
});

// hacerle la pregunta al usuario
rl.question("Ingresa la primera palabra: ", (palabra1) => {
    rl.question("Ingresa la segunda palabra: ", (palabra2) => {
        // imprimir las palabras juntas en la consola
        console.log(`Las palabras juntas son: "${palabra1} , ${palabra2}".`);
        
        // cerrar la interfaz de readline
        rl.close();
    });
})