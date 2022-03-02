// 클래스 상속
// prototype을 기반으로 객체지향적으로 따라한것!
class Dog {
  bark(sound) {
    console.log(sound);
  }

  cry(sound) {
    console.log(`T_T , ${sound}`);
  }
}

class Habook extends Dog {
  // 오버라이딩
  bark(sound) {
    console.log(sound, sound);
  }
}

const habook = new Habook();
habook.bark("왈왈");
habook.cry("끼힝끼힝");
