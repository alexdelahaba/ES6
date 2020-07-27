//==================================
//
//  FUNCIONES CON ARRAYS
//
//==================================

//Array.from
//si se manda como argumento un string, devuelve un array con todas las letras
console.log("1a", Array.from("ejemplo")); //["e", "j", "e", "m", "p", "l", "o"]

//tambien se puede mandar un array y hacerle alguna operacion, aqui estamos devolviendo la primera potencia
console.log(
  "2a",
  Array.from([1, 2, 3], (x) => x * x) //[1, 4, 9]
);

//Array.isArray
//Comprueba si algo es un array o no
console.log("3a", Array.isArray("ejemplo")); //false
console.log("4a", Array.isArray([1, 2, 3])); //true

//Array.of
//Crea un array partiendo de los argumentos
console.log("5a", Array.of(1, 2, 3)); //[1, 2, 3]

//Array.concat
//Crea un array de la concatenacion de otros dos
console.log("6a", [1, 2, 3].concat([9, 8, 7])); //[1, 2, 3, 9, 8, 7]

//Array.copyWithin
//Coge un array, le corta un trozo y lo inserta en una posicion determinada de ese mismo array
{
  const array1 = [1, 2, 3, 4, 5];
  console.log("7a", array1.copyWithin(0, 2, 3)); //[3, 2, 3, 4, 5]
}

//Array.entries()
//Permite crear un iterador partiendo de un array

{
  const array1 = ["a", "b", "c"];
  const iterator = array1.entries();
  console.log("8a", iterator.next().value); //[0, "a"]
}
