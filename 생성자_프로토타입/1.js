const myPrototype = {
  myLog: function (param) {
    console.log(`안녕하세요, 파라미터는 ${param} 입니다`);
  },
};

const myObj = {
  nic: "나태쿤",
  job: "webDev",
};

Object.setPrototypeOf(myObj, myPrototype);

myObj.myLog("나태쿤");

// 프로토타입 체이닝 확인
console.log(myObj);
