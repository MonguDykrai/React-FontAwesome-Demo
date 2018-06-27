# README

说明：

表格数据是通过 json-server 服务器提供的

json-server 的安装使用

1. 安装：

npm i -g json-server

2. 创建 db.json 文件

db.json 文件

```json
{
  "data": [
    {
      "id": 1,
      "name": "Jack",
      "gender": "male",
      "age": 27,
      "nation": "美国"
    },
    {
      "id": 2,
      "name": "Kobe",
      "gender": "male",
      "age": 22,
      "nation": "美国"
    },
    {
      "id": 3,
      "name": "Tim",
      "gender": "male",
      "age": 24,
      "nation": "美国"
    },
    {
      "id": 4,
      "name": "Belly",
      "gender": "male",
      "age": 31,
      "nation": "美国"
    },
    {
      "id": 5,
      "name": "Grad",
      "gender": "male",
      "age": 27,
      "nation": "美国"
    }
  ]
}
```

3. 启动服务

json-server --watch db.json