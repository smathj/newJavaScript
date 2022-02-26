import fetch from "node-fetch";

function post() {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      // 전송할 데이터
      title: "The Great",
      author: "Jeremy",
    }),
    headers: {
      // 헤더값 정의
      "content-type": "application/json; charset=utf8",
    },
  })
    .then((res) => {
      res.json();
    })
    .then((json) => {
      console.log(json);
    });
}

post();
