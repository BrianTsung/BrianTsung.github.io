import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

const API_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot";

function Attractions(props) {
  return (
    <table className="table table-bordered table-hover">
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

function Selectcity(props) {
  <form>
    <select value={this.state.city} onChange={this.handleChange}>
      <option value="Taipei">台北市</option>
      <option value="NewTaipei">新北市</option>
      <option value="Taoyuan">桃園市</option>
      <option value="Taichung">台中市</option>
    </select>
    <br />
  </form>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectall = this.selectall.bind(this);
    this.isBottom = this.isBottom.bind(this);
    this.selectcity = this.selectcity.bind(this);
    this.state = { isall: true, datas: [], top: 30, city: "Taipei" };
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
      url = `${API_URL}?$top=30&$format=JSON`;
    } else {
      url = `${API_URL}/Taipei?$top=30&$format=JSON`;
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
        url = `${API_URL}/${this.state.city}?$top=${this.state.top}&$format=JSON`;
      }
      axios
        .get(url)
        .then((response) => response.data)
        .then((data) => {
          this.setState({ datas: data });
        });
    }
  }

  selectcity(event) {
    this.setState({ city: event.target.value, top: 30 });
    let url;
    url = `${API_URL}/${event.target.value}?$top=30&$format=JSON`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ datas: data });
      });
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
        </div>
      );
    } else {
      head = (
        <div>
          <div>
            <button className="headerbtn nonactive" onClick={this.selectall}>
              全部景點
            </button>
            <button className="headerbtn active">縣市景點</button>
          </div>　 
          <div>
            <form>
              <select className="form-select" value={this.state.city} onChange={this.selectcity}>
                <option value="Taipei">台北市</option>
                <option value="NewTaipei">新北市</option>
                <option value="Taoyuan">桃園市</option>
                <option value="Taichung">台中市</option>
                <option value="Tainan">臺南市</option>
                <option value="Kaohsiung">高雄市</option>
                <option value="Keelung">基隆市</option>
                <option value="Hsinchu">新竹市</option>
                <option value="HsinchuCounty">新竹縣</option>
                <option value="MiaoliCounty">苗栗縣</option>
                <option value="NantouCounty">南投縣</option>
                <option value="NantouCounty">彰化縣</option>
                <option value="YunlinCounty">雲林縣</option>
                <option value="ChiayiCounty">嘉義縣</option>
                <option value="Chiayi">嘉義市</option>
                <option value="PingtungCounty">屏東縣</option>
                <option value="YilanCounty">宜蘭縣</option>
                <option value="HualienCounty">花蓮縣</option>
                <option value="TaitungCounty">臺東縣</option>
                <option value="KinmenCounty">金門縣</option>
                <option value="PenghuCounty">澎湖縣</option>
                <option value="LienchiangCounty">連江縣</option>
              </select>
            </form>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        {head}
        <Attractions datas={this.state.datas}></Attractions>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
