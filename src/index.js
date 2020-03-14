import "./style";
import { Component, render } from "preact";
import { ChatBox } from "./chatBox";
import data from "./data.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: { message: "Nothing to see here" },
      data: data,
      message: "",
      users: Array.from(new Set(data.map(o => o.userName))).reduce((acc, v) => {
        acc[v] = {
          avatar:
            "https://i.pravatar.cc/400?img=" + Math.floor(Math.random() * 70)
        };
        return acc;
      }, {})
    };
    console.log(this.state.users);
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
          {
            userId: 1,
            userName: "Sid",
            message: this.state.message,
            time: new Date()
              .toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true
              })
              .toLowerCase()
          }
        ],
        message: ""
      });
    }
  };

  componentDidMount() {}

  render(props, { result }) {
    return (
      <div>
        <div class="app-header">sl@ck</div>

        <ChatBox chats={this.state.data} users={this.state.users} />

        <div class="typeBox">
          <input
            name="message"
            value={this.state.message}
            onKeyPress={this.typingMessage.bind(this)}
            autofocus
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
