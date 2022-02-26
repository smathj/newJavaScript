/**
 * new Promise((resolve, reject)=> {...})
 * resolve(), reject()
 */

/**
 * 생성자에 함수를 넣어두고
 * 그게 성공했을때 함수를넣든 문자열을 넣든 뭔가를 리턴해서 그걸 실행한다
 * 실패했을때도 마찬가지이다
 * 비동기가 완료되면 then을 호출하고
 * 에러가 난다면 catch를 호출한다
 */

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("결과 데이터");
  } else {
    reject(new Error("에러"));
  }
});

promise.then((result) => console.log(result)).catch((err) => console.log(err));
