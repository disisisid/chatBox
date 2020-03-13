// const Base64 = require("js-base64").Base64;

export const License = ({ result }) => {
  // console.log(result);
  // items = result.map(r => '<div>bye</div>')
  return (
    <div class="result">
      <div>
        {result.map(result => {
          return (
            <div
              class={
                result.userId === 1 ? "messageBox  me" : "messageBox notMe"
              }
            >
              <div>{result.userName}</div>
              <div>{result.message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
