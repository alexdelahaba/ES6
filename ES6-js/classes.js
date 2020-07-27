class Prueba {
  constructor() {
    console.log("Se ha lanzado el constructor");
    this.saludo = "Hola";
  }
  showData() {
    console.log(99);
  }
}

let prueba1 = new Prueba(); //Se ha lanzado el constructor

console.log(prueba1.showData === Prueba.prototype.showData); //true

class PruebaHijo extends Prueba {
  constructor() {
    //el super permite hacer referencia a los dos constructores
    //si no hay constructor en el HIJO, no hace falta el super
    super();
    console.log("Se ha lanzado el constructor HIJO");
  }
}

let pruebaHijo = new PruebaHijo(); //=>
//Se ha lanzado el constructor
//Se ha lanzado el constructor HIJO

pruebaHijo.showData(); //99
console.log(pruebaHijo.saludo); //Hola

class PruebaHijoSobreescribir extends Prueba {
  showData() {
    console.log("otro valor");
  }
}

let otraPruebaHijo = new PruebaHijoSobreescribir();
otraPruebaHijo.showData(); // otro valor

class Proyecto {
  static devolverPresupuesto() {
    return 0;
  }
  static id = 99;
}

console.log(Proyecto.devolverPresupuesto()); //0
console.log(Proyecto.id); //99

let proyecto1 = new Proyecto();
// console.log(proyecto1.devolverPresupuesto()); //not a function (cuando un metodo es static en javaScript solo se puede hacer referencia a el direcatamente desde la clase no desde una instancia)
console.log(proyecto1.id); //undefined igual que lo anterior
Proyecto.anio = 1999;
console.log(Proyecto.anio); //1999
