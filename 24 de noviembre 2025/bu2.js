// Programa que muestra solo los números impares entre 1 y 50 en formato de array horizontal

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Números impares entre 1 y 50:\n");

// Creamos el array de impares
const impares = [];

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        impares.push(i);
    }
}

// Mostramos el array en horizontal
console.log(`[ ${impares.join(", ")} ]`);

// Mantener la consola abierta
rl.question("\nPresiona Enter para finalizar...", () => {
    rl.close();
});
