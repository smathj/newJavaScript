class Book {
  constructor(nic) {
    this.nic = nic;
  }

  introduce() {
    console.log(`Hello I am ${this.nic}`);
  }
}

const obj1 = new Book("하북이");
obj1.introduce();
console.log(obj1.nic);

const obj2 = new Book("키북이");
obj2.introduce();
console.log(obj2.nic);
