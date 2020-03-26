// import "preact/debug";
import "./style";
import { Component } from "preact";
import { ChatBox } from "./components/chatBox/ChatBox";
// import data from "./data.json";
// import io from "socket.io-client";
import routes from './routes'

// const socket = io('http://localhost:3000');

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: data,
  //     message: "",
  //     users: Array.from(new Set(data.map(o => [o.userName, o.userId]))).reduce(
  //       (acc, v) => {
  //         acc[v[1]] = {
  //           avatar:
  //             "https://i.pravatar.cc/400?img=" + Math.floor(Math.random() * 70),
  //           userName: v[0],
  //           userId: v[1]
  //         };
  //         return acc;
  //       },
  //       {}
  //     ),
  //      user: {"avatar":"https://i.pravatar.cc/400?img=9","userName":"Sid","userId":0}
  //   };

  //   socket.on('chat-message', data => {
  //     console.log(data);
  //     this.setState({
  //       data: [...this.state.data, data]
  //     }, () => {
  //       var element = document.querySelector(".chatBox");
  //       element.scrollTop = element.scrollHeight;
  //     });
  //   });
  // }

  // typingMessage = event => {
  //   this.setState({
  //     message: event.target.value
  //   });
  //   if (event.keyCode === 13) {
  //     var messagePayload = {
  //       userId: this.state.user.userId,
  //       userName: this.state.user.userName,
  //       message: this.state.message,
  //       time: new Date()
  //         .toLocaleString("en-US", {
  //           hour: "numeric",
  //           minute: "numeric",
  //           hour12: true
  //         })
  //         .toLowerCase()
  //     };
  //     socket.emit('send-chat-message', messagePayload);
  //     this.setState({
  //       data: [ ...this.state.data, messagePayload ],
  //       message: ""
  //     }, () => {
  //       var element = document.querySelector(".chatBox");
  //       element.scrollTop = element.scrollHeight;
  //     });
  //   }
  // };

  // switchUser = data => {
  //   // console.log(data);
  //   this.setState({
  //     user: data
  //   })
  // }

  // componentDidUpdate(){}


  render() {
    return (
      <div class="main-container">
        {/* <div style={{width: '45%'}}>
          <div class="user">
            <span>Logged in as: {this.state.user.userName}</span>
            <div class="selectUser">
              {Object.keys(this.state.users).map(u => this.state.users[u]).map(e => (<span onclick={this.switchUser.bind(this, e)}>{e.userName}</span>))}
            </div>
          </div>
          <div class="app-header">sl@ck</div>
          <ChatBox chats={this.state.data} users={this.state.users} />
          <input
            class="typeBox"
            name="message"
            value={this.state.message}
            onKeyUp={this.typingMessage.bind(this)}
            placeholder="Type Message"
            autofocus
          />
        </div> */}

        {/*  Testing for login component */}
        {/* <Link href="/login">Login</Link> */}
        {routes}
      </div>
    );
  }
}


