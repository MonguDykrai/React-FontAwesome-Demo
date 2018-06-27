# README

```js
fetch(myRequest).then(res => {
  console.log(res);
  if (res.status === 200) {
    // 由于当前使用的接口并不支持数据修改结果的保存，下述代码模拟了 DELETE 操作执行后，重新获取数据并赋值给 state
    this.setState({
      list: this.state.list.filter(item => {
        return item.id !== id;
      })
    });

    // 接口支持保存数据修改的条件下，使用的代码
    // fetch("https://my-json-server.typicode.com/MonguDykrai/repo/data")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     this.setState({
    //       list: data
    //     });
    //   });
  }
});
```