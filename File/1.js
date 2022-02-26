const fs = require("fs");
const path = require("path");

// 비동기식으로 파일 읽기
fs.readFile(`${__dirname}/habook.txt`, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 동기식으로 파일 읽기
try {
  var text = fs.readFileSync(`${__dirname}/habook.txt`, "utf8");
  console.log(text);
} catch (err) {
  console.log(err);
}
