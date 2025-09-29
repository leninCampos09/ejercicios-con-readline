const carrito = [];

const producto1 = {
    nombre: "Camisa",
    precio: 20,
},
    
    producto2 = {
        nombre: "Pantalón",
        precio: 25,
    }

carrito.push(producto1);
carrito.unshift(producto2);
console.log(carrito);