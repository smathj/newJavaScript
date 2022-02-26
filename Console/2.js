const book = [
  {
    name: "하북",
    amsoo: "am",
  },
  {
    name: "키북",
    amsoo: "soo",
  },
];

console.table(book);

const obj = {
  earth: {
    korea: { nouth: {}, south: {} },
    jappn: { all: {} },
  },
};

//console.dir(obj);
console.dir(obj, { depth: 3, colors: true });

// 하북이 동작체크
console.time("habook");
for (let i = 1; i < 99999; i++) {
  console.log(`하북${i}이가 똥사러갑니다.`);
}
console.timeEnd("habook");
