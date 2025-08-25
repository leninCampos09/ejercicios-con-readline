import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
    let numero = Number(num);


  console.log(`\nNúmero ingresado: ${numero}`);

  // Métodos de Math:
  // Math.round(): Redondea al entero más cercano.
  console.log(`Math.round(${numero})-> ${Math.round(numero)}`)
  // Math.floor(): Redondea hacia abajo al entero más cercano.
  console.log(`Math.floor(${numero})-> ${Math.floor(numero)}`)
  // Math.ceil(): Redondea hacia arriba al entero más cercano.
  console.log(`Math.ceil(${numero})-> ${Math.ceil(numero)}`)
  // Math.trunc(): Elimina la parte decimal y deja solo la parte entera.
  console.log(`Math.trunc(${numero})-> ${Math.trunc(numero)}`)
  // Math.sign(): Devuelve el signo del número (1, -1 o 0).
  console.log(`Math.sign(${numero})-> ${Math.sign(numero)}`)
  // Math.abs(): Devuelve el valor absoluto (sin signo).
  console.log(`Math.abs(${numero})-> ${Math.abs(numero)}`)
  // Math.sqrt(): Devuelve la raíz cuadrada.
  console.log(`Math.sqrt(${numero})-> ${Math.sqrt(numero)}`)
  // Math.pow(): Eleva el número a la potencia indicada (en este caso, al cuadrado).
  console.log(`Math.pow(${numero}, 2)-> ${Math.pow(numero, 2)}`)
  // Math.cbrt(): Devuelve la raíz cúbica.
  console.log(`Math.cbrt(${numero})-> ${Math.cbrt(numero)}`)
  // Math.log(): Devuelve el logaritmo natural (base e).
  console.log(`Math.log(${numero})-> ${Math.log(numero)}`)
  // Math.log10(): Devuelve el logaritmo en base 10.
  console.log(`Math.log10(${numero})-> ${Math.log10(numero)}`)
  // Math.log2(): Devuelve el logaritmo en base 2.
  console.log(`Math.log2(${numero})-> ${Math.log2(numero)}`)
  // Math.exp(): Devuelve e elevado a la potencia del número.
  console.log(`Math.exp(${numero})-> ${Math.exp(numero)}`)
  // Math.max(): Devuelve el valor máximo entre varios números.
  console.log(`Math.max(${numero}, 10)-> ${Math.max(numero, 10, -5)}`)
  // Math.min(): Devuelve el valor mínimo entre varios números.
  console.log(`Math.min(${numero}, 10)-> ${Math.min(numero, -5, 30)}`)
  // Math.random(): Devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
  console.log(`Math.random()-> ${Math.random()}`)

  let randomNum = Math.floor(Math.random() * 20) + 1;
  console.log(`Número aleatorio entre 1 y 20: ${randomNum}`);

  //metodo toFixed
  console.log(`(${numero}).toFixed(2)-> ${(numero).toFixed(2)}`);

  //metodo toPrecision
  console.log(`(${numero}).toPrecision(4)-> ${(numero).toPrecision(4)}`);

  //metodo de notacion cientifica
  console.log(`(${numero}).toExponential(2)-> ${(numero).toExponential(2)}`);

  //metodo de binario o a hexadecimal
  console.log(`(${numero}).toString(2)-> ${(numero).toString(2)}`);
  console.log(`(${numero}).toString(16)-> ${(numero).toString(16)}`);
  console.log(`(${numero}).toString(36)-> ${(numero).toString(36)}`);
  

  rl.close();
});