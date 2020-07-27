//==================================
// Object
//==================================

let objeto1 = {
  a: 1,
};

let objeto2 = {
  b: 4,
};

Object.setPrototypeOf(objeto1, objeto2);
console.log(objeto1.b); //4

let destino = {};
Object.assign(destino, objeto1, objeto2);
console.log(destino); //{a:1, b:4}
//si hay varios atributos con el mismo valor,se conserva el ultimo referenciado
console.log(Object.is(objeto2, objeto1)); //false Compara si dos objetos son iguales

//==================================
// Strings
//==================================
let title = "Hola mundo";
console.log(title.startsWith("Hola")); //true
console.log(title.endsWith("z")); //false
console.log(title.includes("mun")); //true
console.log(title.length); //10
console.log(Array.from(title)); //["H","o","l","a"," ","m","u","n","d","o"]
console.log(title.codePointAt(3)); //97
let wave = "\u{1f30a}";
console.log(wave.repeat(10)); //Mira la consola ;)

//==================================
// Number
//==================================

let numero = 99;
let decimal = 12.85;

console.log(Number.isInteger(decimal)); //false
console.log(Number.isNaN(numero)); //false

//==================================
// Math
//==================================

// nuevas funciones => Hyperbolic(trigonometria), Arithmetic, Miscellanous

console.log(Math.sign(-5)); //-1
console.log(Math.cbrt(27)); //3 =>raiz cubica

//==================================
// Regular expresions
//==================================

let pattern = /900/;
console.log(pattern.lastIndex); //0
console.log(pattern.test("80900")); //true
console.log(pattern.test("Hola")); //false

//==================================
// Functions
//==================================

let funcionCreada = function myFuncion() {
  return 0;
};

console.log(funcionCreada.name); //myFuncion
