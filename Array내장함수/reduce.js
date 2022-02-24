/**
 * reduce : 배열에 담긴 데이터의 합계를 구할때 자주 사용한다
 *
 *
 * 🔥 콜백함수의 매개변수
 *
 * 첫번째 매개변수 : 누적 값
 * 두번째 매개변수 : 현재 배열의 요소
 * 세번째 매개변수 : 인덱스 번호
 * 네번째 매개변수 : 배열
 */

let ages = [10, 20, 31, 11, 16];

let ageSum = ages.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);

console.log(ageSum);
