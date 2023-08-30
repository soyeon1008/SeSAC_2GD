import { useState } from "react";

function Practice230830() {
  const [state, setState] = useState({ text: "Hello World" });
  return (
    <>
      {state.text}
      <br />
      <button onClick={() => setState({ text: "Goodbye World" })}>버튼</button>
    </>
  );
}
// import { Component } from "react";

// class Practice230830 extends Component {
//   state = {
//     text: "Hello World",
//   };
//   render() {
//     return (
//       <>
//         {this.state.text}
//         <br />
//         <button onClick={() => this.setState({ text: "Goodbye World" })}>
//           버튼
//         </button>
//       </>
//     );
//   }
// }

export default Practice230830;
