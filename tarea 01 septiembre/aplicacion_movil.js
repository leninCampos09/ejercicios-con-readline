//una aplicación móvil necesita gestionar los perfiles de sus usuarios. Se requiere crear un objeto anidado que contenga: Información personal (nombre, edad, email) Preferencias de la aplicación (idioma, notificaciones, tema) Estadísticas de uso (fechaRegistro, ultimoAcceso, numeroSesiones). Tareas a realizar: Crear un objeto perfilUsuario con tres objetos anidados. Mostrar cada sección de información por separado. Cambiar el idioma de "español" a "inglés". Actualizar la fecha de último acceso a la fecha actual. Eliminar una preferencia innecesaria. Extraer el email y el idioma en variables separadas. Mostrar el perfil completo actualizado.


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
