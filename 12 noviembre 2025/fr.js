/// Solicitar al usuario que ingrese el nombre de una fruta y mostrar el precio

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const frutas = ['manzana', 'banana', 'naranja', 'fresas'];

function precioFruta(fruta) {
    let precio;
    switch (fruta.toLowerCase()) {
        case 'manzana':
            precio = 1.50;
            break;
        case 'banana':
            precio = 0.75;
            break;
        case 'naranja':
            precio = 1.00;
            break;
        case 'fresas':
            precio = 2.00;
            break;
        default:
            precio = 0;
    }
    return precio;
}

rl.question('Ingrese el nombre de una fruta: ', (fruta) => {
    const frutaMinuscula = fruta.toLowerCase();
    const precio = precioFruta(frutaMinuscula);

    if (frutas.includes(frutaMinuscula)) {
        console.log(`El precio de ${frutaMinuscula} es $${precio.toFixed(2)}`);
    } else {
        console.log('Fruta no disponible');
    }

    rl.close();
});
