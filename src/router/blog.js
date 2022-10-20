const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog.js");
const { SuccessModel, ErrorModel } = require("../model/resModel.js");

const hanldeBlogRouter = (req, res) => {
  const method = req.method; //GET POST
  const id = req.query.id; // 取得id

  //獲取BLOG列表
  if (method === "GET" && req.path === "/api/blog/list") {
    //獲取query(?後面的東西)中的author
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  //獲取BLOG詳情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  //建立一篇BLOG
  if (method === "POST" && req.path === "/api/blog/new") {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }

  //更新一篇BLOG
  if (method === "POST" && req.path === "/api/blog/update") {
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("BLOG更新失敗");
    }
  }

  //刪除一篇BLOG
  if (method === "POST" && req.path === "/api/blog/del") {
    const result = delBlog(id);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("BLOG刪除失敗");
    }
  }
};

module.exports = hanldeBlogRouter;
