let [first, second = 0] = [42]
console.log(`first = ${first}`)
console.log(`second = ${second}`)


let myDog = { nic : undefined};
let { dog = '하북이' } = myDog
console.log(`dog = ${dog}`)


let myCat = [];
let { cat = '키냥이' } = myCat
console.log(`cat = ${cat}`)
