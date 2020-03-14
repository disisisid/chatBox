// const Base64 = require("js-base64").Base64;

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
                result.userId === 1 ? "messageBox  me" : "messageBox notMe"
              }
            >
              <span class="avatar">
                <img src={users[result.userName].avatar} alt="no avatar" />
              </span>
              <span class="chat">
                <div class="userName">{result.userName}</div>
                <span class="timeStamp">{result.time}</span>
                <div class="message">{result.message}</div>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
