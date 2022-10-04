import "./styles.css";
import Home from "./views/HomePage";
import SingleCapsule from "./views/SingleCapsule";
import PastCapsule from "./views/PastCapsule";
import { Route, Routes } from "react-router-dom";
import UpcommingCapsule from "./views/UpcommingCapsule";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<SingleCapsule />}></Route>
        <Route path="/past-capsules" element={<PastCapsule />}></Route>
        <Route
          path="/upcomming-capsules"
          element={<UpcommingCapsule />}
        ></Route>
      </Routes>
    </div>
  );
}
