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
      users: Array.from(new Set(data.map(o => [o.userName, o.userId]))).reduce(
        (acc, v) => {
          acc[v[1]] = {
            avatar:
              "https://i.pravatar.cc/400?img=" + Math.floor(Math.random() * 70),
            userName: v[0]
          };
          return acc;
        },
        {}
      )
    };
    console.log(this.state.users);
  }

  typingMessage = event => {
    this.setState({
      message: event.target.value
    });
    if (event.keyCode === 13) {
      this.setState({
        data: [
          ...this.state.data,
          {
            userId: 0,
            userName: this.state.users[0].userName,
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
      }, () => {
        var element = document.querySelector(".chatBox");
        element.scrollTop = element.scrollHeight;
      });
    }
  };
  
  componentDidMount() {}

  render(props, { result }) {
    return (
      <div class="main-container">
        <div class="app-header">sl@ck</div>

        <div class="chat-container">
          <ChatBox chats={this.state.data} users={this.state.users} />
          <div class="typeBox">
            <input
              name="message"
              value={this.state.message}
              onKeyPress={this.typingMessage.bind(this)}
              placeholder={"Message" + this.state.users[1].userName}
              autofocus
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));


