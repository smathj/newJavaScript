/**
 * 클래스는 생성자 함수일뿐이다.
 * 명심해라
 */
class Box {
  constructor(boxName) {
    this.boxName = boxName;
  }

  getBoxName() {
    console.log(this.boxName);
  }
}

class Ball extends Box {
  constructor(boxName, ballName) {
    super(boxName);
    this.ballName = ballName;
  }

  getBallName() {
    console.log(this.ballName);
  }
}
/**
 * Ball 클래스에 명시적으로 생성자를 추가안했기에
 * Box의 생성자에 파라미터가 맵핑된다
 */
const ballInBox = new Ball("종이박스", "하북이의 축구공");
ballInBox.getBoxName();
ballInBox.getBallName();
