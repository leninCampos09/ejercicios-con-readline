/// Programa que muestra un saludo según la hora y los minutos actuales usando switch

function mostrarSaludo() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();

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

  // Formatear los minutos con dos dígitos (ej: 09 en lugar de 9)
  const horaFormateada = `${hora.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}`;

  console.log(`Hora actual: ${horaFormateada}`);
  console.log(saludo);
}

// Llamar a la función
mostrarSaludo();
