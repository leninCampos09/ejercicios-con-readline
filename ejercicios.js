//importamos el módulo readline para leer la entrada del usuario
//const readline = require('readline');
import readline from 'readline'; // Importamos el módulo readline usando la sintaxis de ES6
const rl = readline.createInterface({//configuramos la entrada y salida
    input: process.stdin,
    output: process.stdout
});

//hacerle la pregunta al usuario
rl.question("¿Cuál es tu nombre? ", (nombre) => {
    //imprimir el saludo en la consola
    console.log(`Hola, buenos dias ${nombre}!`);
    
    //cerrar la interfaz de readline
    rl.close();
}) 