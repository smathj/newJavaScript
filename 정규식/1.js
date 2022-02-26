// log.js
//''
//import { log } from "../log.js";
const { log } = require("../log");

var str = "Hello World! world!";
const re = /World/;

// 대응되는 문자열이있는지 확인
log(re.test(str));

// String 객체의 내장함수 search
// 대응되는 문제열 있는지확인하고 첫번째 대응되는 인덱스 반환,업슴 -1
log(str.search(re));
