//preguntar al usuario en que ciudad vive, mostrar por consola la respuesta del usuario
import readline from 'readline'; // Importamos el módulo readline usando la sintaxis de ES6
const rl = readline.createInterface({ // configuramos la entrada y salida
    input: process.stdin,
    output: process.stdout
});

// hacerle la pregunta al usuario
rl.question("¿En qué ciudad vives? ", (ciudad) => {
    // imprimir la respuesta en la consola
    console.log(`Vives en: "${ciudad}".`);
    
    // cerrar la interfaz de readline
    rl.close();
})


