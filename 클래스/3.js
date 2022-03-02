// # 을 이용한 비공개 필드,  메서드
class Book {
  #num = 0;

  myLog(param) {
    //console.log(`hello #book = ${#book}`);
    console.log((this.#num += param));
  }
}

const obj1 = new Book();
obj1.myLog(1);
//console.log(obj1.#num);
