import "./index.css";
import Landing from "../src/pages/landing";
import Sellings from "./pages/sellings";
import Activities from "./pages/activities";
import Burj from "./pages/burj";
import Desert from "./pages/desert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/selling" element={<Sellings />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/burj" element={<Burj />} />
          <Route path="/desert" element={<Desert />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
