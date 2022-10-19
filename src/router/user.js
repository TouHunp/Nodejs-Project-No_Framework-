const hanldeUserRouter = (req, res) => {
  const method = req.method; //GET POST

  //登入
  if (method === "POST" && req.path === "/api/user/login") {
    return {
      msg: "這是登入的路徑",
    };
  }
};

module.exports = hanldeUserRouter;
