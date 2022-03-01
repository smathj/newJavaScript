const createBook = (nic) => {
  console.log("createHabook 함수 실행");
  let me = nic;
  return {
    whoAmI: () => console.log(`I am ${nic}`),
    me: () => console.log(`${me}`),
  };
};

/**
 * 클로저를 이용해서
 * getter, setter, ... 메서드를 만들어줄수있다
 * 이게 재밋네
 * => 클로저 패턴, 팩토리 클래스 패턴 이라 부른다
 */

let habook = createBook("habook");
let keebook = createBook("keebook");
habook.whoAmI();
keebook.whoAmI();
habook.me();
keebook.me();
