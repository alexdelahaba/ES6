//==================================
// Arrays
//==================================

let arrayPruebas = Array(20);
console.log(arrayPruebas.length); //20

let otroArrayParaPruebas = Array.of(2);
console.log(otroArrayParaPruebas.length); //1

let cantidadesArray = [5, 10, 50];
let cantidadesArrayOtro = Array.from(cantidadesArray, (v) => v + 17);
console.log(cantidadesArrayOtro); //[22,27,67]

//atencion, el array de referencia es el de la linea anterior
console.log(cantidadesArray.fill(0)); //[0,0,0]
console.log(cantidadesArray.fill(77, 1)); // [0,77,77]
console.log(cantidadesArray.fill(99, 1, 2)); // [0,99,77]
console.log(cantidadesArray.find((valor) => valor > 5)); //99 => Solo un vaolr
console.log(cantidadesArray.copyWithin(0, 1)); //[99,77,77]
console.log(...cantidadesArray.entries()); //Mira la consola
console.log(...cantidadesArray.keys()); //0 1 2
console.log(...cantidadesArray.values()); //99 77 77
