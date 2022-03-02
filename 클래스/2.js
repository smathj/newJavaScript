class Book {
  constructor(one, two) {
    this.one = one;
    this.two = two;
  }

  get fullName() {
    return `${this.one} ${this.two}`;
  }

  set fullName(value) {
    let one = value.split(",")[0];
    let two = value.split(",")[1];
    this.one = one;
    this.two = two;
  }
}

const obj1 = new Book("서", "하북");
obj1.fullName = "이,하북"; // setter 호출
console.log(obj1.fullName); // getter 호출

const obj2 = new Book("윤", "키북");
console.log(obj2.fullName);
