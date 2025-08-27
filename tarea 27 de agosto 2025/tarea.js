//declara un objeto animal, con las propiedades raza, tamaño, y color muestra el objeto en consola y luego imprime cada propiedad por separado.

const animal = {
    raza: "Labrador",
    tamaño: "Grande",
    color: "Cafe"
};

console.log(animal);
console.log(animal.raza);
console.log(animal.tamaño);
console.log(animal.color);

//al objeto animal agrega una nueva propiedad (la que desees) imprimela en consola y luego elimina la propiedad raza

//agregar nueva propiedad al objeto animal
animal.edad = 5;
console.log(animal.edad);


//eliminar la propiedad raza
delete animal.raza;
console.log(animal);
