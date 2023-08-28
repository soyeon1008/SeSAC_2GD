import { useState } from "react";

export default function FunctionState() {
  //   const [apple, setApple] = useState("사과");
  //   //   let apple = '사과'
  //   return (
  //     <div>
  //       <div>{apple}</div>
  //       <button onClick={() => setApple("apple")}>영어로 변경</button>
  //     </div>
  //   );
  //

  function changeLang() {
    const apple = document.querySelector(".state div");
    apple.innerText === "사과"
      ? (apple.innerText = "apple")
      : (apple.innerText = "사과");
  }
  return (
    <div className="state">
      <div>사과</div>
      <button onClick={() => changeLang()}>언어 변경</button>
    </div>
  );
}
