import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";

export default function Practice() {
  return (
    <>
      <HeaderMenu />

      <h1>practice page</h1>
      <ul>
        <li>
          <Link to={"matzip"}>matzip모음</Link>
        </li>
      </ul>
    </>
  );
}
