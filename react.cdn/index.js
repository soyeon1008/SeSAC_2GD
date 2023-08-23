function HelloWorldButton() {
  const [isClick, setIsClick] = React.useState(false);
  const text = isClick ? "클릭이 되었군요!" : "hello, react world!";
  // button
  // button > div > span으로 구조 변경
  return React.createElement(
    "button",
    {
      onClick: () => {
        console.log(
          "버튼이 눌리면 표시되는 onClick, react 에서의 onClick 은 C가 대문자네요!"
        );
      },
    },
    "hello, react world"
  );
}

const element = React.createElement;
const DOMcontainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);
