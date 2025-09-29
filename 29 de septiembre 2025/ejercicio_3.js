// 3. Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const temperaturas = [];
let contador = 0;

function pedirTemperatura() {
	rl.question(`Ingresa la temperatura del día ${contador + 1}: `, (temp) => {
		let temperatura = Number(temp);
		if (!isNaN(temperatura)) {
			temperaturas.push(temperatura);
			contador++;
			if (contador < 3) {
				pedirTemperatura();
			} else {
				const maxTemp = Math.max(...temperaturas);
				console.log(`\nTemperaturas ingresadas: ${temperaturas.join(', ')}`);
				console.log(`La temperatura más alta fue: ${maxTemp}`);
				rl.close();
			}
		} else {
			console.log('Por favor, ingresa un número válido.');
			pedirTemperatura();
		}
	});
}

pedirTemperatura();