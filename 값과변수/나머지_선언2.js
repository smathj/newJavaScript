// ✅ 나머지 선언

numbers = [42]
let [first, second, ... others] = numbers

console.log(`first = ${first}`)
console.log(`second = ${second}`)   // undefined
console.log(`others = ${others}`)   // 공백

