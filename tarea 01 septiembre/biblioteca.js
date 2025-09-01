//Una biblioteca maneja información de sus libros: 
//Información (titulo, autor, genero) 
//Disponibilidad (copias, prestados, ubicacion) 
//Registro (fechaPublicacion, fechaIngreso, ultimaRevision) 

//Tareas a realizar: 
//1. Crear el objeto libro. ✅
//2. Mostrar la información del autor. ✅
//3. Calcular cuántos ejemplares disponibles quedan (copias - prestados).
//4. Actualizar la ultimaRevision con la fecha actual.
//5. Cambiar el género del libro.
//6. Extraer titulo y ubicacion en variables.
//7. Mostrar el objeto actualizado.

//crear el objeto libro
const libro = {
  titulo: "El gran Gatsby",
  autor: "F. Scott Fitzgerald",
  genero: "Ficción",
  disponibilidad: {
    copias: 5,
    prestados: 2,
    ubicacion: "Estante 3"
  },
  registro: {
    fechaPublicacion: "1925-04-10",
    fechaIngreso: "2023-01-15",
    ultimaRevision: "2023-09-01"
  }
};

//Mostrar la información del autor.
console.log("Autor:", libro.autor);

//Calcular cuántos ejemplares disponibles quedan (copias - prestados).
const disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log("Ejemplares disponibles:", disponibles);

//Actualizar la ultimaRevision con la fecha actual.
libro.registro.ultimaRevision = new Date().toISOString().split("T")[0];
console.log("Última revisión actualizada:", libro.registro.ultimaRevision);

//Cambiar el género del libro.
libro.genero = "Clásico";
console.log("Género actualizado:", libro.genero);

//Extraer titulo y ubicacion en variables.
const { titulo } = libro;
const { ubicacion } = libro.disponibilidad;

console.log("Título extraído:", titulo);
console.log("Ubicación extraída:", ubicacion);

//Mostrar el objeto actualizado.
console.log("\nObjeto libro actualizado:");
console.log(libro);
