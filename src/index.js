import "./style";
import { Component, render } from "preact";
import { License } from "./license";

const SEARCH = "//api.github.com/repos/developit/preact/license";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: { message: "Nothing to see here" },
      data: [1,2,3,4]
    };
  }

  componentDidMount() {
    fetch(SEARCH)
      .then(r => {
        const status = r.status;

        if (status === 400) {
          throw new Error("Bad Request");
        }
        return r;
      })
      .then(r => r.json())
      .then(json => {
        this.setState({
          result: json || { message: "oh no" }
        });
      })
      .catch(error => {
        this.setState({
          result: { message: error.message }
        });
      });
  }

  render(props, { result }) {
    return (
      <div>
        <h1>License</h1>

        <License result={this.state.data} />

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
