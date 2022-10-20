const getList = (author, keyword) => {
  //尚未連接資料庫，先返回假數據來測試(但格式要正確)
  return [
    {
      id: 1,
      title: "標題A",
      content: "內容A",
      creatTime: 1666199301926,
      author: "陳一",
    },
    {
      id: 2,
      title: "標題B",
      content: "內容B",
      creatTime: 1666199362406,
      author: "陳二",
    },
  ];
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

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
};
