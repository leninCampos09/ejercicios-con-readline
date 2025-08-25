//3.Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios: [30, 52, 35, 1, 12, -3].


import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const precios = [30, 52, 35, 1, 12, -3];

rl.question("Presiona ENTER para calcular el precio más barato y el más caro 📊: ", () => {
  const precioMin = Math.min(...precios);
  const precioMax = Math.max(...precios);

  console.log("Lista de precios:", precios);
  console.log("📉 Precio más barato:", precioMin);
  console.log("📈 Precio más caro:", precioMax);

  rl.close();
});
