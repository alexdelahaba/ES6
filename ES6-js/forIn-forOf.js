//==================================
// Ejemplo de uso de esos dos bucles
//==================================

var categorias = ["hardware", "software", "microsystems", "communications"];

function imprimirArray() {
  for (var item of categorias) {
    console.log(item);
  }
}

imprimirArray(); // imprime uno a uno los elementos del array
