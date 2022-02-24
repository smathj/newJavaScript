let a1 = [1, 2];
let a2 = [3, 4];

let a3 = [...a1, ...a2];
console.log(a3);

a2[1] = "A"; // a2의 배열의 값을 수정해도 a3는 영향이없네

console.log(a2);
console.log(a3);
