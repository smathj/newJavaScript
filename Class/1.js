/**
 * 클래스
 * 반드시 생성자가있어야한다~
 *
 */

class Car {
  // 생성자
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
    // 여기서의 this는 Car 클래스 객체라는데 , 인스턴스 말하는거겠지 자바처럼
  }

  // getter
  getModelName() {
    return this.modelName;
  }

  getModelYear() {
    return this.modelYear;
  }

  getType() {
    return this.type;
  }

  getPrice() {
    return this.price;
  }

  // setter
  setModelName(modelName) {
    this.modelName = modelName;
  }

  setModelYear(modelYear) {
    this.modelYear = modelYear;
  }

  setType(type) {
    this.type = type;
  }

  setPrice(price) {
    this.price = price;
  }
}

let ionic = new Car("아이오닉", "2021", "e", 4000);
console.log(ionic.getModelName());
console.log(ionic.getModelYear());
console.log(ionic.getType());
console.log(ionic.getPrice());

let genesis = new Car("제네시스", "2021", "g", 7000);
