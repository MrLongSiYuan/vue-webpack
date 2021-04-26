const Mock = require("mockjs");

var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "people|2": {
        "age|1-100": 2,
        name: "@cname",
        id: "@id",
      },
    },
  ],
});

console.log(JSON.stringify(data, null, 4));