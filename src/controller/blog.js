const { exec } = require("../db/mysql.js");

const getList = (author, keyword) => {
  //設條件1=1是因為要站位置，假設author&keyword皆無傳入值where後面直接接order.. 會出錯
  //最後空格要注意 因為輸出到sql端需要
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `; //最後空格要注意 因為輸出到sql端需要
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `; //最後空格要注意 因為輸出到sql端需要
  }
  sql += `order by createtime desc;`;
  //返回promise
  return exec(sql);
};

const getDetail = (id) => {
  //先返回假數據
  return [
    {
      id: 1,
      title: "標題A",
      content: "內容A",
      creatTime: 1666199301926,
      author: "陳一",
    },
  ];
};
//blogData = {} ES6語法  表示若沒有則給一個空值
const newBlog = (blogData = {}) => {
  //blogData 是一個BLOG對象 包含title content屬性
  return {
    id: 3, //測試用，表示新建BLOG,插入到資料庫表裡的id
  };
};
const updateBlog = (id, blogData = {}) => {
  //id就是要更新BLOD的id
  //blogData 是一個BLOG對象 包含title content屬性
  return true;
};
const delBlog = (id) => {
  // id就是要刪除Blog的id
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
