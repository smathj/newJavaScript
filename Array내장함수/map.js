// 배열의 데이터가 Object 일때 새로운 Object를 리턴함!

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

let result = obj.map(function (each) {
  return {
    newName: "이름은 " + each.name,
    newAge: "나이는 " + each.age,
  };
});

console.log(result);
