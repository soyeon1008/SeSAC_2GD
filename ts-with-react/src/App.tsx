import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Matzip from "./pages/Matzip";
import Practice from "./pages/Practice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture" element={<Lecture></Lecture>} />
        <Route path="/practice" element={<Practice></Practice>} />
        <Route path="/practice/matzip" element={<Matzip />} />
      </Routes>
    </>
  );
}

export default App;
