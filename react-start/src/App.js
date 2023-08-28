import UseJSX from "./components/UseJSX.js";
import FirstPractice from "./components/prac/FirstPractice.js";

import ClassCom from "./components/ClassCom.js";
import FunctionState from "./components/FunctionState.jsx";
import ClassState from "./components/ClassState.jsx";
import StatePractice from "./components/prac/StatePractice.jsx";
import FunctionProps from "./components/prac/FunctionProps.jsx";
import PracticeProps from "./components/prac/PracticeProps.jsx";
import { ClassProps, ClassProps2 } from "./components/ClassProps";

function App() {
  return (
    <div>
      <UseJSX />
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
      <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" />
    </div>
  );
}

export default App;
