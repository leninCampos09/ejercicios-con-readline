//En un formulario web pides al usuario su nombre completo y quieres asegurarte de que no haya espacios al inicio o final, y además quieres mostrar cuántos caracteres tiene el nombre sin contar los espacios.


import readline from'readline';
const rl = readline.createInterface({ // configuramos la entrada y salida
  input: process.stdin,
  output: process.stdout 
});

// rl.question("Ingrese su nombre completo: ", (nombre) => {
//   const nombreLimpio = nombre.trim();
//   const nombreSinEspacios = nombre.replaceAll(""," ");
//   const numCaract = nombreSinEspacios.length;
  
//   console.log(`Nombre sin espacios: '${nombreLimpio}`);
//    console.log(`Cantidad de caracteres (sin contar espacios): ${numCaract}`);
//   console.log(`Cantidad de caracteres (sin contar espacios): ${nombreSinEspacios}`);
//   rl.close();
// });

//Un sistema de registro de usuarios necesita guardar todos los correos electrónicos en minúsculas para evitar duplicados causados por diferencias en mayúsculas y minúsculas. Además, se requiere verificar si el correo pertenece al dominio @gmail.com antes de aceptarlo. El programa debe: Solicitar al usuario su correo electrónico.Convertir el correo ingresado a minúsculas. Verificar si contiene el dominio @gmail.com. Mostrar en pantalla el correo normalizado y si es o no un dominio válido

// rl.question("Ingrese su correo electrónico: ", (correo) => {
//     const correoNormalizado= correo.toLocaleLowerCase();
//     const dominioValido = correo.includes("@gmail.com");
//     console.log(`Correo normalizado: ${correoNormalizado}`);
//     console.log(`¿Dominio válido? ${dominioValido ? "Sí" : "No"}`);

//     rl.close();
// });


//de un código generado automáticamente solo se requiere mostrar los últimos 4 caracteres
// rl.question("Ingrese un código: ", (codigo) => {
//     const ultimosCuatro = codigo.slice(-4);
//     console.log(`Últimos 4 caracteres: ${ultimosCuatro}`);
//     rl.close();
// });


//Un programador quiere saber en qué parte de su mensaje aparece la palabra error.
rl.question("Ingrese un mensaje: ", (mensaje) => {
    const posicion = mensaje.indexOf("error");
    if (posicion !== -1) {
        console.log(`La palabra "error" se encuentra en la posición: ${posicion}`);
    } else {
        console.log('La palabra "error" no se encontró en el mensaje.');
    }
    rl.close();
});
