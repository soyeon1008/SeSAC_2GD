import { useEffect } from "react";
export default function TimerComponent() {
  useEffect(() => {
    // setTimeout(()=>{}, 1000)
    // setInterval( 함수, 밀리sec ) -> 밀리 sec마다 함수를 실행한다.
    const timer = setInterval(() => {
      console.log("timer 동작중");
    }, 100);

    // setInterval 함수를 이용하면 반복이 되는 객체를 전달
    // clearSetInterval(객체) 반복을 해제한다.

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>Timer</>;
}
