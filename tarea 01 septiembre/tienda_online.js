//Una tienda online gestiona la información de sus productos. Cada producto debe tener: Detalles (nombre, precio, categoria) Inventario (stock, proveedor, ubicacion) Historial (fechaIngreso, ultimaVenta, ventasTotales) Tareas a realizar: Crear el objeto producto. Mostrar únicamente los detalles. Aumentar el stock en 50 unidades. Cambiar la categoría a "Electrónica". Extraer el nombre y precio en variables separadas. Mostrar el objeto actualizado.

// Crear el objeto producto
const producto = {
    detalles: {
        nombre: "Smartphone",
        precio: 699,
        categoria: "Tecnología"
    },
    inventario: {
        stock: 100,
        proveedor: "Samsung",
        ubicacion: "Almacén 1"
    },
    historial: {
        fechaIngreso: "2023-01-01",
        ultimaVenta: "2023-09-01",
        ventasTotales: 50
    }
};

//Mostrar únicamente los detalles
console.log("Detalles del producto:");
console.log("Nombre:", producto.detalles.nombre);
console.log("Precio:", producto.detalles.precio);
console.log("Categoría:", producto.detalles.categoria);

// Aumentar el stock en 50 unidades
producto.inventario.stock += 50;

// Cambiar la categoría a "Electrónica"
producto.detalles.categoria = "Electrónica";

// Extraer el nombre y precio en variables separadas
const { nombre, precio } = producto.detalles;
console.log("Nombre extraído:", nombre);
console.log("Precio extraído:", precio);

// Mostrar el objeto actualizado
console.log("Objeto actualizado:");
console.log(producto);
