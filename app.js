const qs = require("querystring");
const hanldeBlogRouter = require("./src/router/blog.js");
const hanldeUserRouter = require("./src/router/user.js");

const serverHandle = (req, res) => {
  //設定返回格式 JSON
  res.setHeader("Content-type", "application/json");

  //獲取path
  const url = req.url;
  req.path = url.split("?")[0];

  //分析query *parse就是將JSON格式的key帶入object ("title"="ABC" req.query.title = ABC)
  req.query = qs.parse(url.split("?")[0]);

  //處理Blog路由
  const blogData = hanldeBlogRouter(req, res);
  if (blogData) {
    res.end(
      //JSON.stringify(blogData)
      JSON.stringify(blogData)
    );
    return;
  }

  //處理user路由
  const userData = hanldeUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }
  //未命中路由 返回404
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 Not Found\n");
  res.end();
};

module.exports = serverHandle;

//process.env.NODE_ENV
