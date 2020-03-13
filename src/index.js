import "./style";
import { Component, render } from "preact";
import { License } from "./license";
import { TypeBox } from "./typeBox";
import data from "./data.json";

// const SEARCH = "//api.github.com/repos/developit/preact/license";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: { message: "Nothing to see here" },
      data: data,
      message: "hello"
    };
    console.log(data);
  }

  typingMessage = event => {
    console.log(event.target.value);
    this.setState({
      message: event.target.value
    });
    if (event.keyCode === 13) {
      this.setState({
        data: [
          ...this.state.data,
          { userId: 1, userName: "Sid", message: this.state.message }
        ]
      });
    }
  };

  componentDidMount() {}

  render(props, { result }) {
    return (
      <div>
        <h1>License</h1>

        <License result={this.state.data} />
        {/* <TypeBox /> */}
        <div class="typeBox">
          <input
            name="message"
            value={this.state.message}
            onKeyPress={this.typingMessage.bind(this)}
          />
          <div>{this.state.message}</div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

// fetch(SEARCH)
//   .then(r => {
//     const status = r.status;

//     if (status === 400) {
//       throw new Error("Bad Request");
//     }
//     return r;
//   })
//   .then(r => r.json())
//   .then(json => {
//     this.setState({
//       result: json || { message: "oh no" }
//     });
//   })
//   .catch(error => {
//     this.setState({
//       result: { message: error.message }
//     });
//   });
