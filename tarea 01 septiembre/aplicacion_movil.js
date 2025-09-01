// Una aplicación móvil necesita gestionar los perfiles de sus usuarios:
// Información personal (nombre, edad, email)
// Preferencias de la aplicación (idioma, notificaciones, tema)
// Estadísticas de uso (fechaRegistro, ultimoAcceso, numeroSesiones)

// Tareas a realizar:
// 1. Crear un objeto perfilUsuario con tres objetos anidados. ✅
// 2. Mostrar cada sección de información por separado. ✅
// 3. Cambiar el idioma de "español" a "inglés".
// 4. Actualizar la fecha de último acceso a la fecha actual.
// 5. Eliminar una preferencia innecesaria.
// 6. Extraer el email y el idioma en variables separadas.
// 7. Mostrar el perfil completo actualizado.


//crear el objeto perfilUsuario con tres objetos anidados
const perfilUsuario = {
  informacionPersonal: {
    nombre: "Juan",
    edad: 30,
    email: "juan@example.com"
  },
  preferencias: {
    idioma: "español",
    notificaciones: true,
    tema: "oscuro"
  },
  estadisticasUso: {
    fechaRegistro: "2023-01-01",
    ultimoAcceso: "2023-09-01",
    numeroSesiones: 5
  }
};

//Mostrar cada sección de información por separado.
console.log("Información Personal:");
console.log("Nombre:", perfilUsuario.informacionPersonal.nombre);
console.log("Edad:", perfilUsuario.informacionPersonal.edad);
console.log("Email:", perfilUsuario.informacionPersonal.email);

console.log("\nPreferencias:");
console.log("Idioma:", perfilUsuario.preferencias.idioma);
console.log("Notificaciones:", perfilUsuario.preferencias.notificaciones);
console.log("Tema:", perfilUsuario.preferencias.tema);

console.log("\nEstadísticas de Uso:");
console.log("Fecha de Registro:", perfilUsuario.estadisticasUso.fechaRegistro);
console.log("Último Acceso:", perfilUsuario.estadisticasUso.ultimoAcceso);
console.log("Número de Sesiones:", perfilUsuario.estadisticasUso.numeroSesiones);

//Cambiar el idioma de "español" a "inglés"
perfilUsuario.preferencias.idioma = "inglés";
console.log("\nIdioma actualizado:", perfilUsuario.preferencias.idioma);

//Actualizar la fecha de último acceso a la fecha actual
perfilUsuario.estadisticasUso.ultimoAcceso = new Date().toISOString().split("T")[0];
console.log("Último acceso actualizado:", perfilUsuario.estadisticasUso.ultimoAcceso);

//Eliminar una preferencia innecesaria (ej: notificaciones)
delete perfilUsuario.preferencias.notificaciones;
console.log("Preferencias después de eliminar notificaciones:", perfilUsuario.preferencias);

//Extraer el email y el idioma en variables separadas
const { email } = perfilUsuario.informacionPersonal;
const { idioma } = perfilUsuario.preferencias;

console.log("\nEmail extraído:", email);
console.log("Idioma extraído:", idioma);

//Mostrar el perfil completo actualizado
console.log("\nPerfil completo actualizado:");
console.log(perfilUsuario);
