const items = ["hi", "hello", "하이", "하이요", "하북이", "키북이", "나북이"];

const result = items.filter(function (item) {
  return item.length > 3; // 4글자 추출
});

console.log(result);

///////////////////////////////

let obj = [
  {
    name: "이하북",
    age: 10,
  },
  {
    name: "윤키북",
    age: 20,
  },
  {
    name: "김나태",
    age: 30,
  },
];

let teenBoy = obj.filter(function (each) {
  return each.age == 10; // 조건식처럼 == 두개넣어야함 true and false 로 평가함
});

console.log(teenBoy);
