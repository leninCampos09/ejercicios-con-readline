const numeros=[10,20,30,40,50];

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');

const deTodo= ['Hola', 10, true, 'si', null, {nombre: 'juan', trabajo: 'programador'}, [1,2,3]];
// console.table(numeros);
// console.table(meses);
// console.table(deTodo);

// //imprimir el true
// console.log(deTodo[2]);

// //imprimir el nombre de juan
// console.log(deTodo[5].nombre);

// //imprimir el 2
// console.log(deTodo[6][1]);

// //modificar el numero 20 por 80
// numeros[1]=80;
// console.log(numeros);

// meses.push('Julio'); //agrega al final
// console.log(meses);

// meses.pop();
// console.log(meses);

// meses.shift();
// console.log(meses);

// meses.unshift('Enero');
// console.log(meses);

//imprimir enero, febrero y marzo en el mismo console.log
// for(let i=0;i<meses.length;i++){
//     if(i<3){
//         console.log(meses[i]);
//     }
// }

//insertar el 80 antes del 30
// numeros.splice(2, 0, 80);
// console.log(numeros);

//imprimir el primer y el ultimo dia de la semana
const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let primer = diasSemana[0];
let ultimo= diasSemana[diasSemana.length -1];
console.log(ultimo);