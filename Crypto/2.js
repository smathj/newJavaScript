const crypto = require("crypto");

// salt 를 생성하는 함수
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        reject(err);
      } else {
        resolve(buf.toString("base64"));
      }
    });
  });
};

const createCryptoPassword = async (plainPassword) => {
  const salt = await createSalt();

  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) {
        reject(err);
      } else {
        resolve({ password: key.toString("base64"), salt });
      }
    });
  });
};

createCryptoPassword("하북이암호").then((result) => {
  console.log("salt를 이용한 암호화");
  console.log(result);
});
