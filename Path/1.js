const path = require("path");

// 현재 이 파일의 절대경로
console.log(__filename);

// 절대경로의 마지막 부분 , 즉 자신의 파일
console.log(path.basename(__filename)); // 1.js

// 마지막에 ".js" 라는 확장자를 제외함
console.log(path.basename(__filename, ".js")); // 1

// 환경 변수 구분자
console.log(path.delimiter);

//console.log(process.env.PATH);
process.env.PATH.split(path.delimiter);
//console.log(process.env.PATH.split(path.delimiter));
// console.log(process.env.PATH);
// process.env.PATH.split(path.delimiter);

// 파일의 전체경로
console.log(__filename);

// 파일의 부모 디렉터리 트리
console.log(path.dirname(__filename));

// 확장자 조회 ".js" 가나옴
console.log(path.extname(__filename));

let first = path.format({
  root: "\\habook", // dir 값이 있으므로 무시된다
  dir: "\\home\\user\\dir",
  base: "habook.txt",
});

console.log(first);

let second = path.format({
  root: "\\",
  base: "habook.txt",
  ext: "dog", // base 값이 있으므로 ext 무시된다
});

console.log(second);

let last = path.format({
  root: "\\",
  name: "habook", // base가 아니라 name에 주의
  ext: ".dog",
});

console.log(last);

console.log(path.isAbsolute(__filename));
console.log(path.dirname(__filename));
console.log(path.isAbsolute(path.dirname(__filename)));

console.log(path.parse(__filename));

console.log(path.sep); // \
