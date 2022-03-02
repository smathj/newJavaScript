class Box {
  constructor(boxName) {
    this.boxName = boxName;
  }

  getBoxName() {
    console.log(this.boxName);
  }
}

class Ball extends Box {
  getBallName() {
    console.log("하북이의 축구공");
  }
}
/**
 * Ball 클래스에 명시적으로 생성자를 추가안했기에
 * Box의 생성자에 파라미터가 맵핑된다
 */
const ballInBox = new Ball("종이박스");
ballInBox.getBoxName();
ballInBox.getBallName();
