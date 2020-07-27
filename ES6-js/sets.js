//==================================
// Sets
//==================================

let perks = new Set();

perks.add("Car");
perks.add("Vacations");

console.log(perks.size); // 2

perks.add("Car");
console.log(perks.size); // 2

console.log(perks.has("Car")); // true
console.log(perks.has("Carrrrrrrrrrrrr")); // false
