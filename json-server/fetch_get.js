/**
 * npm install node-fetch
 */
import fetch from "node-fetch";

fetch("http://localhost:3000/comments").then((res) => res.json());

//Get 요청

// 1
function getComments(param) {
  let url = "http://localhost:3000/comments";

  if (param != undefined) {
    url += `/${param}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

// 2
function getCommentsQueryString(id) {
  let url = `http://localhost:3000/comments?postId=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
}
