import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Calcular el descuento de un producto
function calcularDescuento(precio, descuento) {
	precio = parseFloat(precio);
	descuento = parseFloat(descuento);

	let des = precio * descuento;
	let totalPagar = precio - des;

	console.log(`El descuento del producto obtenido es de: $${des.toFixed(2)}\nEl total a pagar es de: $${totalPagar.toFixed(2)}`);
}

rl.question('Ingrese el precio del producto: ', (precio) => {
	rl.question('Ingrese el descuento en decimal (por ejemplo 0.2 para 20%): ', (descuento) => {
		calcularDescuento(precio, descuento);
		rl.close();
	});
});
