// 즉시 실행함수는 이렇게 구현해서 쓰자
{
  let someVariable = 42;
  const someFunction = () => {
    console.log(someVariable);
  };
  someFunction();
}
// console.log(someVariable); // 에러발생
