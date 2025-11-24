// Programa que solicita un número al usuario y muestra su tabla de multiplicar del 1 al 10


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que muestra la tabla de multiplicar
function mostrarTabla(numero, limite = 10) {
    console.log(`\n=== Tabla de multiplicar del ${numero} (1 al ${limite}) ===`);
    for (let i = 1; i <= limite; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Función principal del programa
function iniciarPrograma() {
    rl.question('\nIngresa un número para ver su tabla de multiplicar: ', (input) => {
        const numero = parseInt(input);

        if (isNaN(numero)) {
            console.log('\nError: Debes ingresar un número válido.');
            return iniciarPrograma(); // vuelve a solicitar el número
        }

        // Muestra la tabla normal
        mostrarTabla(numero, 10);

        // Pregunta si desea extender la tabla
        rl.question('\n¿Quieres ver la tabla extendida hasta el 20? (s/n): ', (opcion) => {
            if (opcion.toLowerCase() === 's') {
                mostrarTabla(numero, 20);
            }

            // Pregunta si desea ver otra tabla
            rl.question('\n¿Deseas ver la tabla de otro número? (s/n): ', (respuesta) => {
                if (respuesta.toLowerCase() === 's') {
                    iniciarPrograma(); // vuelve a iniciar
                } else {
                    console.log('\nPrograma finalizado. Hasta luego.');
                    rl.close();
                }
            });
        });
    });
}

// Inicio del programa
iniciarPrograma();
