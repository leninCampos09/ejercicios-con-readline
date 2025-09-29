// 1. Solicitar tres nombres al usuario para ser guardados en un array y mostrar luego cada uno
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const nombres = [];
let contador = 0;

function pedirNombre() {
	rl.question(`Ingresa el nombre ${contador + 1}: `, (nombre) => {
		nombres.push(nombre);
		contador++;
		if (contador < 3) {
			pedirNombre();
		} else {
			console.log('\nNombres ingresados:');
			nombres.forEach((n, i) => console.log(`Nombre ${i + 1}: ${n}`));
			rl.close();
		}
	});
}

pedirNombre();

