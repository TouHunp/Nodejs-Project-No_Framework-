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

module.exports = {
  getList,
};
