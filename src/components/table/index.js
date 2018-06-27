import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Table extends React.Component {
  state = {
    list: [],
    isLoaded: false
  };
  render() {
    return (
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-yw4l">姓名</th>
            <th className="tg-yw4l">性别</th>
            <th className="tg-yw4l">年龄</th>
            <th className="tg-yw4l">国籍</th>
            <th className="tg-yw4l">操作</th>
          </tr>
        </thead>
        <tbody>{this.renderList()}</tbody>
      </table>
    );
  }

  renderList() {
    const { isLoaded, list } = this.state;
    if (isLoaded) {
      return list.map(item => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.age}</td>
            <td>{item.nation}</td>
            <td style={{ padding: 0 }}>
              <button
                style={styles.button}
                onClick={() => this._deleteItem(item.id)}
              >
                <FontAwesomeIcon icon="trash-alt" />
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/MonguDykrai/repo/data")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          list: data,
          isLoaded: true
        });
      });
  }

  _deleteItem(id) {
    const myRequest = new Request(
      `https://my-json-server.typicode.com/MonguDykrai/repo/data/${id}`,
      {
        method: "DELETE"
      }
    );

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
  }
}

const styles = {
  button: {
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%"
  }
};
