// Solicitar la edad al usuario y mostrar la categoría:
// - Niñez: 0-11
// - Adolescencia: 12-17
// - Adultez: 18-59
// - Vejez: 60+

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let categoria;

function clasificarEdad(edad) {
    if (edad >= 0 && edad <= 11) {
        categoria = 'Niñez';
    } else if (edad >= 12 && edad <= 17) {
        categoria = 'Adolescencia';
    } else if (edad >= 18 && edad <= 59) {
        categoria = 'Adultez';
    } else if (edad >= 60) {
        categoria = 'Vejez';
    } else {
        categoria = 'Edad inválida';
    }
    return categoria;
}

rl.question('Ingrese su edad: ', (valor) => {
    const edad = Number(valor);

    if (isNaN(edad) || edad < 0) {
        console.log('Por favor, ingrese una edad válida.');
    } else {
        const resultado = clasificarEdad(edad);
        console.log(`La categoría correspondiente es: ${resultado}`);
    }

    rl.close();
});
