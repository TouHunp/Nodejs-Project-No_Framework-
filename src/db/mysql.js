//專門處理sql的

const mysql = require("mysql");
const { MYSQL_CONF } = require("../config/database.js");

//建立連結對象(直接使用引用的設定)
const con = mysql.createConnection(MYSQL_CONF);

//開始連結
con.connect;

//執行sql的函數 (用promise封裝來執行異步)
function exec(sql) {
  const promise = new promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}

module.exports = {
  exec,
};

//不關閉連結 使連線維持 讓此函數可以多次使用 查詢
