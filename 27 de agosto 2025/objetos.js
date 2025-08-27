// const nombre ="Lenin"
// const edad = 25;
// const altura = 1.75;


//creacion de objetos con object literal
const persona = {
    nombre: "Lenin Alberto",
    apellidos: "Campos Guzman",
    edad: 25,
    DUI: "06033016-4",
    altura: 1.75,
    telefono: "7201-4054",
    direccion: "Obrajuelo, Quelepa",
    domicilio: "Quelepa, San Miguel Centro",
    profesion: "Estudiante",
    estadoCivil: "Soltero",
    nacionalidad: "Salvadoreño",
    genero: "Masculino",
    fechaNacimiento: "2000-04-17",
};

console.log(persona);

//acceder a las propiedades del objeto
//acceso por punto
console.log(persona.nombre);

//acceder a las propiedades del objeto
//acceso por corchetes
console.log(persona["nombre"]);


//agregamos mas propiedades al objeto

persona.imagen = "imagen.jpg"


console.log(persona);



//eliminando propiedades de un objeto
delete persona.imagen;
console.log(persona);

//modificar el valor de una propiedad de un objeto
persona.nombre="lenin";
console.log(persona);

//asignar el valor del objeto a una variable
const nom = persona.nombre;
console.log(nom);

//destructuring
// const {nombre} = persona;
// console.log(nombre);

// const {edad} = persona;
// console.log(edad);

const {nombre, edad} = persona;
console.log(nombre);
console.log(edad);
