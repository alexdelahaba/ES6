//==================================
// Maps
//==================================

let empleado1 = { nombre: "Juan" };
let empleado2 = { nombre: "Pepe" };
let empleados = new Map();
empleados.set(empleado1, "ABC");
empleados.set(empleado2, "123");

console.log(empleados); //Mira la consola
console.log([...empleados.values()]); //[ABC, 123]
console.log(empleados.size); //2
empleados.delete(empleado1);
console.log(empleados.size); //1
