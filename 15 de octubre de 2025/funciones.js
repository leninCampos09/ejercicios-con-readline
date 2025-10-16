import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function saludar(nombre) {
    console.log(`Hola, ${nombre}, bienvenido!`);
}

let resta =(n1, n2)=>{
    let res= n1 - n2;
    return res;
}

rl.question('¿Cuál es tu nombre? ', (nom) => {
    rl.question("ingrese el primer numero: ", (num1) => {
        rl.question("ingrese el segundo numero: ", (num2) => {
            saludar(nom);
            console.log(`La resta de ${num1} y ${num2} es: ${resta(parseInt(num1), parseInt(num2))}`);
            rl.close();
        });
    });
});
