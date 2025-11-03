// Solicitar un nombre y mostrar si está en el arreglo o no esta

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nombres = ['Ana', 'Luis', 'Carlos', 'Marta', 'Sofía'];

function existe(nombre){
    if(nombre.includes(nombre)){
        return `${nombre} está en el arreglo.`;
    }else{
        return `${nombre} no está en el arreglo.`;
    }
}

rl.question('Por Favor ingrese Un Nombre: ', (Nom) => {
    let resultado = existe(Nom);
    console.log(resultado);
    rl.close();
});