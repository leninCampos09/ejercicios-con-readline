//crear el objeto estudiante

const estudiante = {
    nombre: "Juan",
    apellido: "Lopez",
    edad: "25 años",
    direccion: {
        calle: "Main St",
        ciudad: "Springfield",
        pais: "El Salvador",
        numCasa: 123
    }
};


//acceso al objeto
console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.edad);
console.log(estudiante.direccion.calle);
console.log(estudiante.direccion.ciudad);
console.log(estudiante.direccion.pais);
console.log(estudiante.direccion.numCasa);

//acceder por corchete
console.log(estudiante["nombre"]);
console.log(estudiante["apellido"]);
console.log(estudiante["edad"]);
console.log(estudiante["direccion"]["calle"]);
console.log(estudiante["direccion"]["ciudad"]);
console.log(estudiante["direccion"]["pais"]);
console.log(estudiante["direccion"]["numCasa"]);


//agregar una propiedad al objeto principal
estudiante.telefono = "1234-5678";
console.log(estudiante);

//agregar una propiedad al objeto anidado
estudiante.direccion.codigoPostal = "12345";
console.log(estudiante);


//modificar propiedad del objeto anidado
estudiante.direccion.calle = "Hudson St";
console.log(estudiante);


//eliminar una propiedad del objeto anidado
delete estudiante.direccion.numCasa;
console.log(estudiante);
