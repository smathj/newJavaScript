let box = { pizza : '🍕' }
const { pizza = '피자없다', chiken = '치킨없다', hamberger = '햄버거없다'} = box

console.log(`pizza = ${pizza}`);
console.log(`chiken = ${chiken}`);
console.log(`hamberger = ${hamberger}`);