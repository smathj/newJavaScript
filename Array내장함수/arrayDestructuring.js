function getItems() {
  return ["사과", "배", "딸기", [1, 2, 3]];
}

let [x, y, z] = getItems();

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`z = ${z}`);

let [x1, y1, z1, [a1, a2, a3]] = getItems();

console.log(`a1 = ${a1}`);
console.log(`a2 = ${a2}`);
console.log(`a3 = ${a3}`);
