//import { process } from "process";
// package.json 이 지금없음
// 있을때
// 해당 파일의 type부분을 "type": "module" 로 수정함

const process = require("process");

process.on("beforeExit", (code) => {
  console.log(
    "2. 이벤트 루프에 등록된 작업이 모두 종료된 후 노드 프로세스를 종료하기 바로 직전에 호출!",
    code
  );
});

process.on("exit", (code) => {
  console.log("3. 노드 프로세스가 종료될 때 ", code);
});

console.log("1. 콘솔에 출력되는 첫 번째 메세지");
