import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//calcular el area de un rectangulo

function calcularAreaRectangulo(base, altura) {

    let calculo= parseFloat(base * altura);
    return calculo;
}

rl.question('Ingrese la base del rectangulo: ', (base) => {
    rl.question('Ingrese la altura del rectangulo: ', (altura) => {
        console.log(`El área del rectángulo es: ${calcularAreaRectangulo(base, altura)}`);
        rl.close();
    });
});
