// 2. Solicitar al usuario tres números y calcula el promedio

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = [];
let contador = 0;
function pedirNumero() {
    rl.question(`Ingresa el número ${contador + 1}: `, (num) => {
        let numero = Number(num);
        if (!isNaN(numero)) {
            numeros.push(numero);
            contador++;
            if (contador < 3) {
                pedirNumero();
            } else {
                const suma = numeros.reduce((acc, curr) => acc + curr, 0);
                const promedio = suma / numeros.length;
                console.log(`\nNúmeros ingresados: ${numeros.join(', ')}`);
                console.log(`Promedio: ${promedio}`);
                rl.close();
            }
        } else {
            console.log('Por favor, ingresa un número válido.');
            pedirNumero();
        }
    });
}
    pedirNumero();

