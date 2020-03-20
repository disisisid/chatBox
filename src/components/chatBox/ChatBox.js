// const Base64 = require("js-base64").Base64;
import '../../style/chatBox.css'

export const ChatBox = ({ chats, users }) => {
  // console.log(result);
  // items = result.map(r => '<div>bye</div>')
  return (
    <div class="chatBox">
      <div>
        {chats.map(result => {
          return (
            <div
              class={
                result.userId === 0 ? "messageBox  me" : "messageBox notMe"
              }
            >
              <span class="avatar">
                <img src={users[result.userId].avatar} alt="no avatar" />
              </span>
              <div class="chat">
                <div class="user_profile_info">
                  <span><strong>{result.userName}</strong></span>
                  <span>{result.time}</span>
                </div>
                <div class="message">{result.message}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

