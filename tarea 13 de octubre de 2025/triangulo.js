// 3. Calcular el área de un triángulo

let calcularAreaTriangulo = (base, altura) => {
    let resultado = (base * altura) / 2;
    return resultado;
}

let base = 10;
let altura = 5;

console.log(`El área del triángulo con base "${base}" y altura "${altura}" es: ${calcularAreaTriangulo(base, altura)}`);

