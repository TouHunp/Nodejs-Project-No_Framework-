const { getList } = require("../controller/blog.js");
const { SuccessModel, ErrorModel } = require("../model/resModel.js");

const hanldeBlogRouter = (req, res) => {
  const method = req.method; //GET POST

  //獲取BLOG列表
  if (method === "GET" && req.path === "/api/blog/list") {
    //獲取query(?後面的東西)中的author
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  //建立一篇BLOG
  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "這是創建BLOG的路徑",
    };
  }

  //更新一篇BLOG
  if (method === "POST" && req.path === "/api/blog/update") {
    return {
      msg: "這是更新BLOG的路徑",
    };
  }

  //刪除一篇BLOG
  if (method === "POST" && req.path === "/api/blog/del") {
    return {
      msg: "這是刪除BLOG的路徑",
    };
  }
};

module.exports = hanldeBlogRouter;
