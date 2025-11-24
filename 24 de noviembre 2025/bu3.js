// * Mostrar una secuencia de números del 10 al 100 aumentando de 10 en 10

// Programa que muestra una secuencia de números del 10 al 100 aumentando de 10 en 10

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Secuencia del 10 al 100 aumentando de 10 en 10:\n");

const secuencia = [];

for (let i = 10; i <= 100; i += 10) {
    secuencia.push(i);
}

console.log(`[ ${secuencia.join(", ")} ]`);

rl.question("\nPresiona Enter para finalizar...", () => {
    rl.close();
});
