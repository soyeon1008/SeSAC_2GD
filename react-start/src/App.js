import UseJSX from "./components/UseJSX.js";
import FirstPractice from "./components/prac/FirstPractice.js";

import ClassCom from "./components/ClassCom.js";
import FunctionState from "./components/FunctionState.jsx";
import ClassState from "./components/ClassState.jsx";
import StatePractice from "./components/prac/StatePractice.jsx";
import FunctionProps from "./components/prac/FunctionProps.jsx";
import PracticeProps from "./components/prac/PracticeProps.jsx";
import { ClassProps, ClassProps2 } from "./components/ClassProps.jsx";
import Handler_ex1 from "./components/prac/Handler_ex1.js";
import Handler_ex2 from "./components/prac/Handler_ex2.js";
import DOMComponent from "./components/DOMComponent.js";
import RefPractice_ex1 from "./components/prac/RefPractice_ex1.js";
import RefPractice_ex2 from "./components/prac/RefPractice_ex2.js";
import RefVarState from "./components/RefVarState.js";
import TimerComponent from "./components/TimerComponent.js";
import EffectComponent from "./components/EffectComponent.js";
import PracticeTimer from "./components/prac/PracticeTimer.js";
import PropsMap from "./components/PropsMap.jsx";
import PracticeMap from "./components/prac/PracticeMap.jsx";
import MapChild from "./components/prac/MapChild.jsx";
import PororoObj from "./components/prac/PororoObj.jsx";
import BasicCss from "./components/BasicCss.jsx";

function App() {
  const dataArr = [
    { name: "peach", krPrice: 10000, count: 5 },
    { name: "strawberry", krPrice: 14000, count: 1 },
    { name: "pear", krPrice: 5000, count: 6 },
    { name: "apple", krPrice: 10000, count: 10 },
    { name: "mango", krPrice: 20000, count: 2 },
  ];
  return (
    <>
      {/* <PropsMap arr={dataArr} />
      <PracticeMap />
      <PororoObj /> */}
      <BasicCss />
    </>
  );

  <div>
    {/* <UseJSX />
      <FirstPractice />
      <ClassCom></ClassCom>
      <FunctionState></FunctionState>
      <ClassState></ClassState>
      <StatePractice></StatePractice>
      <FunctionProps name="사과" krPrice={5000} number={10} />
      <FunctionProps name="샤인머스켓" krPrice={35000} number={3} />
      <FunctionProps name="복숭아" children="안녕하세요" />
      <FunctionProps>여기가 children입니다!</FunctionProps>
      <PracticeProps />
      <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cb" />
    <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" /> */}
    {/*  <Handler_ex1 /> 
      {/* <Handler_ex2 /> */}
    {/* <DOMComponent /> */}
    {/* <br />
      {/* <RefPractice_ex1 /> */}
    {/* <RefPractice_ex2 /> */}
    {/* <RefVarState /> */}
    <br />
    {/* <TimerComponent /> */}
    {/* <EffectComponent />
      <PracticeTimer />  */}
    <PropsMap />
    <PracticeMap />
    <MapChild />
  </div>;
}

export default App;
