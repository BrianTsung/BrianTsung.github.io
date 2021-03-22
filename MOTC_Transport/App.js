import axios from "axios";

function HandleSubmit(event) {
  event.preventDefault();
  axios
    .get(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON`
    )
    .then((response) => {
      console.log(response);
      // this.setState({ information: response.data });
      // console.log(this.state.information);
    })
    .catch((error) => {
      console.log(error);
    });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectall = this.selectall.bind(this);
    this.state = { isall: true };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  selectall(event) {
    this.setState({ isall: !this.state.isall });
  }

  render() {
    const isall = this.state.isall;
    let head;
    if (isall) {
      head = (
        <div>
          <button className="headerbtn active">全部景點<HandleSubmit></HandleSubmit></button>
          <button className="headerbtn nonactive" onClick={this.selectall}>
            縣市景點
          </button>
          全部
        </div>
      );
    } else {
      head = (
        <div>
          <button className="headerbtn nonactive" onClick={this.selectall}>
            全部景點
          </button>
          <button className="headerbtn active">縣市景點</button>
          縣市
        </div>
      );
    }
    return head;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
