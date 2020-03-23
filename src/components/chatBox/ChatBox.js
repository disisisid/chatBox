// const Base64 = require("js-base64").Base64;
import '../../style/chatBox.css'
import { Component } from 'preact'
import data from "../../data.json";
import io from "socket.io-client";

const socket = io('http://localhost:3000');

// export const ChatBox = ({ chats, users }) => {
//   // console.log(result);
//   // items = result.map(r => '<div>bye</div>')
//   return (
//     <div class="chatBox">
//       <div>
//         {chats.map(result => {
//           return (
//             <div
//               class={
//                 result.userId === 0 ? "messageBox  me" : "messageBox notMe"
//               }
//             >
//               <span class="avatar">
//                 <img src={users[result.userId].avatar} alt="no avatar" />
//               </span>
//               <div class="chat">
//                 <div class="user_profile_info">
//                   <span><strong>{result.userName}</strong></span>
//                   <span>{result.time}</span>
//                 </div>
//                 <div class="message">{result.message}</div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatMessageLog: data,
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
    }
    socket.on('chat-message', data => {
      console.log(data);
      this.setState({
        chatMessageLog: [...this.state.chatMessageLog, data]
      }, () => {
        var element = document.querySelector(".chatBox");
        element.scrollTop = element.scrollHeight;
      });
    });
  }




  typingMessage = event => {
    this.setState({
      message: event.target.value
    });
    if (event.keyCode === 13) {
      var messagePayload = {
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
      };
      socket.emit('send-chat-message', messagePayload);
      this.setState({
        chatMessageLog: [ ...this.state.chatMessageLog, messagePayload ],
        message: ""
      }, () => {
        var element = document.querySelector(".chatBox");
        element.scrollTop = element.scrollHeight;
      });
    }
  };

  switchUser = data => {
    this.setState({
      user: data
    })
  }

  render() {
    return (
      <div class="chatBox_container">
        <div class="user">
          <span>Logged in as: {this.state.user.userName}</span>
          <div class="selectUser">
            {Object.keys(this.state.users).map(u => this.state.users[u]).map(e => (<span onclick={this.switchUser}>{e.userName}</span>))}
          </div>
        </div>
        <div class="app-header">sl@ck</div>
        <div class="chatBox">
          <div>
            {this.state.chatMessageLog.map(result => {
              return (
                <div
                  class={
                    result.userId === 0 ? "messageBox  me" : "messageBox notMe"
                  }
                >
                  <span class="avatar">
                    <img src={this.state.users[result.userId].avatar} alt="no avatar"/>
                  </span>
                  <div class="chat">
                    <div class="user_profile_info">
                      <span><strong>{result.userName}</strong></span>
                      <span>{result.time}</span>
                    </div>
                    <div class="message">{result.message}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <input
          class="typeBox"
          name="message"
          value={this.state.message}
          onKeyUp={this.typingMessage}
          placeholder="Type Message"
          autofocus
        />
      </div>
    )
  }
}

export default ChatBox