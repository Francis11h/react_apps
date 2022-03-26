import React, { Fragment, Component } from "react";
import axios from "axios"; 

class AxiosPersonListDemo extends Component {
  constructor(props) {
    super(props);

    this.baseUrl = "https://jsonplaceholder.typicode.com/users";

    this.state = {
      list: [],
    };
  }
  
  // Ajax请求放在componentDidMount生命周期内
  componentDidMount() {
    // 使用axios完成ajax数据请求
    axios
      .get(this.baseUrl)
      .then((res) => {
        const goodlists = res.data;
        this.setState({
          list: goodlists,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { list } = this.state;
    return (
      <Fragment>
        <ul>
          {list?.map((item) => {
            return (
              <li key={item.id}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default AxiosPersonListDemo;
