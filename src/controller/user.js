const loginCheck = (username, password) => {
  //先使用假數值
  if (username === "abc" && password === "123") {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck,
};
