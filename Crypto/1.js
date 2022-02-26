/**
 * 기본형
 */

const crypto = require("crypto");

let whichStr = crypto
  .createHash("sha512")
  .update("서리빛하북")
  .digest("base64");

console.log(whichStr);
