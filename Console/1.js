/**
 * 웹 브라우저가 제공하는 console이 아닌
 * Node의 console을 이용하여
 * 로그파일에다 로그를찍어서 기록하기
 */

const fs = require("fs");
const { Console } = require("console");

const output = fs.createWriteStream("./stdout.log");
const errorOutput = fs.createWriteStream("./stderr.log");

//const logger = new Console({ stdout: output, stderr: errorOutput });
const logger = new Console(output, errorOutput);
const count = 5;

logger.log("count: %d", count);
logger.error("count: " + count);

logger.log("stdout 로그에다 찍자");
logger.error("stderr에 찍자");
