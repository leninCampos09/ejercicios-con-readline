// 2. Calcular el promedio de 3 números

let calcularPromedio = (num1, num2, num3) => {
    let resultado = (num1 + num2 + num3) / 3;
    return resultado;
}

let n1 = 8;
let n2 = 6;
let n3 = 10;

console.log(`El promedio de los números "${n1}", "${n2}" y "${n3}" es: ${calcularPromedio(n1, n2, n3)}`);
// Salida: El promedio de los números "8", "6" y "10" es: 8
