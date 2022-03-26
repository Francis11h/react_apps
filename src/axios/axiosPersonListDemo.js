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
        const personlist = res.data;
        this.setState({
          list: personlist,
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
              <div key={item.id}>
                <li>
                  {item.name},{item.email},{item.phone},{item.website}
                </li>
                <ul>
                  {[item.address].map((address) => {    //use [item.address] to convert item.address from map to array to use map method
                    return (
                      <div>
                        <li key={address.zipcode}>
                          {address.street},{address.suite},{address.zipcode},
                          {address.city}
                        </li>
                        <ul>
                          {[address.geo].map((geo) => (
                            <li key={geo.lat}>
                              {geo.lat}, {geo.lng}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default AxiosPersonListDemo;
