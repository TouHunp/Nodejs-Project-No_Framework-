//負責blog url的分支處理
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
    // const listData = getList(author, keyword); 改成返回promise 要改
    // return new SuccessModel(listData);
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  //獲取BLOG詳情
  if (method === "GET" && req.path === "/api/blog/detail") {
    // const data = getDetail(id);
    // return new SuccessModel(data);
    const result = getDetail(id);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  //建立一篇BLOG
  if (method === "POST" && req.path === "/api/blog/new") {
    // const data = newBlog(req.body);
    // return new SuccessModel(data);
    req.body.author = "Chensr"; //暫時先假填入作者 等登入做完再改
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
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
