const env = process.env.NODE_ENV; //環境參數

//設定 參數集 用let是因為他會根據不同狀況轉變
let MYSQL_CONF;

if (env === "dev") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "375375",
    port: "3306",
    database: "myblog",
  };
}
//暫時用本地模擬 真實要用線上的帳密等..
if (env === "prduction") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "375375",
    port: "3306",
    database: "myblog",
  };
}

module.exports = {
  MYSQL_CONF,
};
