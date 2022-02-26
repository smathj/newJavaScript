const { nextTick, exit } = require("process");

// 1
console.log("start");
//exit(1);
//exit(0);

// 3
setTimeout(() => {
  console.log("timeout callback");
}, 0);

// 2
nextTick(() => {
  console.log("nextTick callback");
});

console.log("end");
