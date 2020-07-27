//==================================
// Uso y funcionamiento de funciones de flecha
//==================================

function ejemploDefault(argumento = 10) {
  console.log(argumento);
}

function otroEjemploDefault(argumento = 5, precio = argumento * 10) {
  console.log(precio);
}

ejemploDefault(); // 10
ejemploDefault(999); // 999

otroEjemploDefault(); // 50
otroEjemploDefault(2); // 20
