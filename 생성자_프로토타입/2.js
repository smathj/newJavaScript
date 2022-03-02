// 생성자 함수 == 타언의 클래스와 같다
function MyObj(param) {
  this.nic = param;
}

// 프로토 타입이해하기
MyObj.prototype.hello = function () {
  console.log(`hello~ I am ${this.nic}`);
};

const obj1 = new MyObj("habook");
const obj2 = new MyObj("keebook");

console.log(obj1.nic);
console.log(obj2.nic);

obj1.hello();
obj2.hello();
