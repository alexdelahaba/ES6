//==================================
// Uso apropiado de const, let y var
//==================================

// variables siempre declaradas antes de ser usadas

// al usar let y const hay que saber que sus scopes son de bloque =>

function ejemploLet() {
  let ejemplo = 12;
  if (true) {
    let ejemplo = "otro numero";
  }

  console.log(ejemplo); // 12
}

function ejemploVar() {
  var ejemplo = 12;
  if (true) {
    var ejemplo = "otro numero";
  }

  console.log(ejemplo); // otro numero
}

function ejemploConst() {
  const ejemplo = 12;
  if (true) {
    const ejemplo = "otro numero";
  }

  console.log(ejemplo); // 12
}
