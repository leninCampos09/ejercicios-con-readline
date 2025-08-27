//crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring para crear variables con esas propiedades y mlostrarlas en consola

const usuario = {
    usuario: "lenin",
    email: "lenin@example.com",
    rol: "admin"
};


//destructuring
const { usuario: nombreUsuario, email: emailUsuario, rol: rolUsuario } = usuario;

console.log(nombreUsuario);
console.log(emailUsuario);
console.log(rolUsuario);