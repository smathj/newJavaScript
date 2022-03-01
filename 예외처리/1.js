// 예외처리 try - catch
// 에이 던지기 throw _____ : _____는 Error 객체
// 자바와 같다

try {
  console.log(1);
  throw Error("에러빵!");
} catch (e) {
  console.log(e.name); // Error
  console.log(e.message); // 에러빵!
} finally {
  console.log(2);
}
