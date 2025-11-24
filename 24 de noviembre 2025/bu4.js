// * Pide al usuario que ingrese 3 nombres separados por espacio. Usa for para mostrarlos uno por uno.}

// Programa que pide 3 nombres separados por espacio y los muestra uno por uno con validación

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para capitalizar nombres
function capitalizar(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function pedirNombres() {
    rl.question("Ingresa 3 nombres separados por espacio: ", (input) => {
        const nombres = input.trim().split(" ").filter(n => n !== "");

        if (nombres.length !== 3) {
            console.log("\nDebes ingresar exactamente 3 nombres. Inténtalo nuevamente.\n");
            return pedirNombres(); // vuelve a preguntar
        }

        // Capitalizar cada nombre
        const nombresCapitalizados = nombres.map(capitalizar);

        console.log("\nMostrando los nombres uno por uno:\n");

        for (let i = 0; i < nombresCapitalizados.length; i++) {
            console.log(`${i + 1}. ${nombresCapitalizados[i]}`);
        }

        console.log("\nNombres:");
        console.log(`[ ${nombresCapitalizados.join(", ")} ]`);

        rl.close();
    });
}

pedirNombres();
