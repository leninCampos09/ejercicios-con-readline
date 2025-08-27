import readline from 'readline'; // Importamos el módulo readline usando la sintaxis de ES6
const rl = readline.createInterface({ // configuramos la entrada y salida
    input: process.stdin,
    output: process.stdout
});


//solicitar al usuario una cadena de texto
rl.question("Introduce una frase: ", (frase) => {
    console.log('\n === Tratamiento de cadenas ===');

    //1.lenght
    const fraseLength = frase.length;
    console.log(`La longitud de la frase es: ${fraseLength}`);

    //2. toUpperCase
    const fraseUpper = frase.toUpperCase();
    console.log(`La frase en mayúsculas es: ${fraseUpper}`);


    //3 toLowerCase
    const fraseLower = frase.toLowerCase();
    console.log(`La frase en minúsculas es: ${fraseLower}`);
    
    //4 .trim()
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al principio y al final es: ${fraseTrim}`);

    //5. substring
    const fraseSubstring = frase.substring(0, 5);
    console.log(`La subcadena de la frase es: ${fraseSubstring}`);

    //6. slice
    const fraseSlice = frase.slice(0,5);
    console.log(`La parte de la frase desde el inicio hasta el quinto carácter es: ${fraseSlice}`);

    //7. replace
    const fraseReplace = frase.replace('hola', 'Adios');
    console.log(`La frase con 'hola' reemplazada por 'Adios' es: ${fraseReplace}`);

    //8. replaceAll
    const fraseReplaceAll = frase.replaceAll('hola', 'adios');
    console.log(`La frase con todas las ocurrencias de 'hola' reemplazadas por 'adios' es: ${fraseReplaceAll}`);

    //9. split
    const fraseArray = frase.split(' ');
    console.log(`La frase dividida en palabras es: ${fraseArray}`);

    //10. includes
    const fraseIncludes = frase.includes('hola');
    console.log(`La frase contiene 'hola': ${fraseIncludes}`);

    //11. indexOf
    const fraseIndexOf = frase.indexOf('hola');
    console.log(`La posición del primer 'hola' en la frase es: ${fraseIndexOf}`);

    //12. startsWith
    const fraseStartsWith = frase.startsWith('hola');
    console.log(`La frase comienza con 'hola': ${fraseStartsWith}`);

    //13. endsWith
    const fraseEndsWith = frase.endsWith('adios');
    console.log(`La frase termina con 'adios': ${fraseEndsWith}`);

   rl.close();
});