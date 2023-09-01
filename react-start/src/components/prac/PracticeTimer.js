import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function PracticeTimer() {
  const count = useRef(0);
  const [render, setRender] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      count.current += 1;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{count.current}</h1>
      <button
        onClick={() => {
          setRender(render + 1);
        }}
      >
        시간
      </button>
    </>
  );
}

// import { useState } from "react";
// import { useEffect } from "react";

// let count = 0;
// export default function PracticeTimer() {
//   const [time, setTime] = useState(count);
//   useEffect(() => {
//     count = 0;
//     setTime(count);
//     const timer = setInterval(() => {
//       count++;
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <>
//       <h1>{time}</h1>
//       <button
//         onClick={() => {
//           setTime(count);
//         }}
//       >
//         시간
//       </button>
//     </>
//   );
// }

// import { useState } from "react";
// import { useEffect } from "react";

// export default function PracticeTimer() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [count]);

//   return (
//     <>
//       <h1>{count}</h1>
//     </>
//   );
// }
