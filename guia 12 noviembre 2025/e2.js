// Importar readline
import readline from 'readline';

// Crear la interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir hora y minutos al usuario
rl.question('Ingresa la hora (0-23): ', (horaStr) => {
  rl.question('Ingresa los minutos (0-59): ', (minStr) => {
    const hora = parseInt(horaStr);
    const minutos = parseInt(minStr);

    let saludo;

    switch (true) {
      case hora >= 6 && hora <= 11:
        saludo = '¡Buenos días!';
        break;
      case hora >= 12 && hora <= 17:
        saludo = '¡Buenas tardes!';
        break;
      case hora >= 18 && hora <= 23:
        saludo = '¡Buenas noches!';
        break;
      case hora >= 0 && hora <= 5:
        saludo = '¡A dormir!';
        break;
      default:
        saludo = 'Hora no válida';
        break;
    }

    // Formatear hora y minutos con dos dígitos
    const horaFormateada = `${hora.toString().padStart(2, '0')}:${minutos
      .toString()
      .padStart(2, '0')}`;

    console.log(`\nHora ingresada: ${horaFormateada}`);
    console.log(saludo);

    rl.close();
  });
});
