export default function UseJSX() {
  //   /* 1. inline style 적용해보기
  //     - inline 에 바로 속성 적용
  //     - object 선언 후 적용
  //   */
  //   //   const divStyle = {
  //   //     width: "100px",
  //   //     height: "100px",
  //   //     backgroundColor: "gold",
  //   //     border: "1px solid #444",
  //   //     marginLeft: ".5rem",
  //   //     marginTop: ".5rem",
  //   //     display: "inline-block",
  //   //   };
  //   //   return (
  //   //     <div>
  //   //       <div style={{ color: "fff", width: "100px", backgroundColor: "tomato" }}>
  //   //         first
  //   //       </div>
  //   //       <div style={divStyle}>second</div>
  //   //       <div style={divStyle}>third</div>
  //   //     </div>
  //   //   );
  //   /* 2. JS 문법써보기 */
  //   let isShow = false;
  //   return (
  //     <div>
  //       {/* true일 때 보이는 div */}
  //       <div style={{ backgroundColor: "red" }}>
  //         {isShow ? "true일 때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "orange" }}>
  //         {isShow && "true일 때 보임"}
  //       </div>
  //       {/* false일 때 보이는 div */}
  //       <div style={{ backgroundColor: "yellow" }}>
  //         {isShow === false ? "false일 때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "green" }}>
  //         {!isShow && "false일 때 보임"}
  //       </div>
  //     </div>
  //   );
  /* 3. onClick 사용 */
  const myName = "소연";

  // 매개변수 없는 ver.
  function myFunc() {
    alert(`안녕, 내 이름은 ${myName}이야`);
  }

  // 매개변수 있는 ver.
  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      <span onClick={myFunc}>hi</span>
      <span onClick={() => addNum(5, 8)}>8 더하기</span>
      <span onClick={() => myFunc()}>hi2</span>
    </div>
  );
}
