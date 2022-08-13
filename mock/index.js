let Mock = require('mockjs');


export const note = Mock.mock({
  "data|30": [{
    // 创建时间
    "moment": new Date(),
    // id
    "id|+1": 1,
    // userid
    "userid|+1": 10,
    // 内容
    "message|24-96":"@cword",
    // 标签
    "label|0-10": 0,
    // name
    "name":"@cname",
    // like
    "like|1-120":0,
    // 评论
    "comment|1-120":0,
    // 背景色
    "imgUrl|0-4":0,
    // 是否撤销
    "revoke|0-20":0,
    // 是否举报
    "report|0-20":0,
    // 类型
    "type":0
  }]
})

// 评论

export const comment = Mock.mock({
  "data|30": [{
    // 创建时间
    "moment": new Date(),
    // id
    "id|+1": 1,
    // userid
    "userid|+1": 10,
    // 内容
    "message|24-96":"@cword",
    // name
    "name":"@cname",
    // 背景色
    "imgUrl|0-4":0,
  }]
})
