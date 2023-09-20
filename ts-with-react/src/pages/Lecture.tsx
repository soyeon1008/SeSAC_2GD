import Count from "../components/Count";
import SetText from "../components/EventObj";
import EventObj from "../components/EventObj";

import { PropsType1, PropsType2, PropsType3 } from "../components/PropsType";
import HeaderMenu from "./HeaderMenu";

export default function Lecture() {
  return (
    <>
      <HeaderMenu />
      <h1>lecture page</h1>
      <PropsType1 name="soyeon" />
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      />
      <PropsType3 width={200} height={200} text="안녕하세요" />
      <Count />
      <SetText />
      <EventObj />
    </>
  );
}
