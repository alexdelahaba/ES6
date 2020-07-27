//==================================
// Iteradores
//==================================
let array = [1, 2, 3];
let iterador = array[Symbol.iterator]();
console.log(iterador.next()); //{value:1, done:false}
console.log(iterador.next()); //{value:2, done:false}
console.log(iterador.next()); //{value:3, done:false}
console.log(iterador.next()); //{value:undefined, done:true}

//==================================
// Generators
//==================================

function* generador() {
  yield 8000;
  yield 8001;
}

let it = generador();
console.log(it.next()); //{value:8000, done:false}
