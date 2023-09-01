import { useState } from "react";
import { useRef } from "react";

function RefPractice_ex1() {
  const [color, setColor] = useState("white");
  const inputRef = useRef(null);
  const changeColor = () => {
    if (!inputRef.current) return;

    setColor(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div style={{ backgroundColor: color }}>
      <input ref={inputRef} />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
export default RefPractice_ex1;
