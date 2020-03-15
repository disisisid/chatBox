import "./style";
import { Component, render } from "preact";
import { ChatBox } from "./chatBox";
import data from "./data.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      message: "",
      users: Array.from(new Set(data.map(o => [o.userName, o.userId]))).reduce(
        (acc, v) => {
          acc[v[1]] = {
            avatar:
              "https://i.pravatar.cc/400?img=" + Math.floor(Math.random() * 70),
            userName: v[0],
            userId: v[1]
          };
          return acc;
        },
        {}
      ),
       user: {"avatar":"https://i.pravatar.cc/400?img=9","userName":"Sid","userId":0}
    };
    console.log(JSON.stringify(this.state.users));
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
            userId: this.state.user.userId,
            userName: this.state.user.userName,
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

  switchUser = data => {
    console.log(data);
    this.setState({
      user: data
    })
  }


  render(props) {
    return (
      <div class="main-container">
        <div class="user">Logged in as: {this.state.user.userName}</div>
        <div class="selectUser">
          {Object.keys(this.state.users).map(u => this.state.users[u]).map(e => (<span onclick={this.switchUser.bind(this, e)}>{e.userName}</span>))}
        </div>
        <div class="app-header">sl@ck</div>

        <div class="chat-container">
          <ChatBox chats={this.state.data} users={this.state.users} />
          <div class="typeBox">
            <input
              name="message"
              value={this.state.message}
              onKeyPress={this.typingMessage.bind(this)}
              placeholder="Type Message"
              autofocus
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));


