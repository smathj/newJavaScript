const fs = require("fs");

// 비동기적 쓰기
let data = "비동기로 쓰기";
fs.writeFile(`${__dirname}/writeFileAsync.txt`, data, "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("비동기적 파일 쓰기 완료");
});

// 동기적 쓰기
let data2 = "동기적 쓰기";
try {
  fs.writeFileSync(`${__dirname}/writeFileSync.txt`, data2, "utf8");
} catch (err) {
  console.log(err);
}
