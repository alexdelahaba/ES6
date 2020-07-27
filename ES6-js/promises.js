//==================================
// Promises
//==================================

let promesa = new Promise((resolve, reject) => {
  console.log("Has entrado en la promesa");
  setTimeout(() => {
    resolve("Han pasado tres segundos");
  }, 3000);

  setTimeout(() => {
    reject("4 segundos, se ejecuta el reject");
  }, 4000);
});

promesa
  .then((resp) => {
    console.log(resp);
  })
  .catch((resp) => {
    console.log(resp);
  });
//el catch no se ejecuta porque ya ha entrado por el then. Para ver el catch, comenta las lineas 7,8 y 9;
