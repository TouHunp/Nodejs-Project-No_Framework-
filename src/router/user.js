const { loginCheck } = require("../controller/user.js");
const { SuccessModel, ErrorModel } = require("../model/resModel.js");
const hanldeUserRouter = (req, res) => {
  const method = req.method; //GET POST

  //登入
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    if (result) {
      return new SuccessModel();
    }
    return new ErrorModel("登入失敗");
  }
};

module.exports = hanldeUserRouter;
