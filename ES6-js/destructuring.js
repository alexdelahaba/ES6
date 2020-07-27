//==================================
// Desestructuracion
//==================================

let arrayEjemplo = [1, 2, 3];

let [primero, segundo, tercero] = arrayEjemplo;

console.log(primero); //1

let [primerElto, ...resto] = arrayEjemplo;

console.log(resto); // [2,3]

let objetoEjemplo = {
  nombre: "Juan",
  edad: 25,
};

let { nombre, edad: campo2 } = objetoEjemplo;

console.log(nombre); // Juan
console.log(campo2); // 25
