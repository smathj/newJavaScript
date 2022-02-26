const os = require("os");

// CPU 아키텍처
console.log(os.arch());

console.log(os.cpus());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.type());
console.log(os.platform());
console.log(os.release());

// 홈 디렉터리 경로
console.log(os.homedir());

// 임시파일 경로
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.freemem());
