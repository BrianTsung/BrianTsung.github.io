import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

const API_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot";

function Attractions(props) {
  return (
    <table>
      <thead>
        <tr>
          <th className="table_name">景點名稱</th>
          <th className="table_des">景點描述</th>
        </tr>
      </thead>
      <tbody>
        {props.datas.map((data) => (
          <tr key={data.ID}>
            <td>{data.Name}</td>
            <td>{data.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectall = this.selectall.bind(this);
    this.isBottom = this.isBottom.bind(this);
    this.state = { isall: true, datas: [], top: 30 };
  }

  componentDidMount() {
    const url = `${API_URL}?$top=${this.state.top}&$format=JSON`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ datas: data });
      });
    document.addEventListener("scroll", this.isBottom);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.isBottom);
  }

  selectall() {
    this.setState({ isall: !this.state.isall, top: 30 }); // bug
    let url;

    if (!this.state.isall) {
      url = `${API_URL}?$top=${this.state.top}&$format=JSON`;
    } else {
      url = `${API_URL}/Taipei?$top=${this.state.top}&$format=JSON`;
    }
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ datas: data });
      });
  }

  isBottom() {
    const wrappedElement = document.getElementById("root");
    let bottom = wrappedElement.getBoundingClientRect().bottom;
    let window_height = window.innerHeight;
    let url;

    if (Math.floor(bottom) <= window_height) {
      this.setState({ top: this.state.top + 30 });
      if (this.state.isall) {
        url = `${API_URL}?$top=${this.state.top}&$format=JSON`;
      } else {
        url = `${API_URL}/Taipei?$top=${this.state.top}&$format=JSON`;
      }
      axios
        .get(url)
        .then((response) => response.data)
        .then((data) => {
          this.setState({ datas: data });
        });
    }
  }

  render() {
    const isall = this.state.isall;
    console.log("render", isall);
    console.log("top", this.state.top);
    let head;
    if (isall) {
      head = (
        <div>
          <button className="headerbtn active">全部景點</button>
          <button className="headerbtn nonactive" onClick={this.selectall}>
            縣市景點
          </button>
          <Attractions datas={this.state.datas}></Attractions>
        </div>
      );
    } else {
      head = (
        <div>
          <button className="headerbtn nonactive" onClick={this.selectall}>
            全部景點
          </button>
          <button className="headerbtn active">縣市景點</button>
          <Attractions datas={this.state.datas}></Attractions>
        </div>
      );
    }
    return head;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
