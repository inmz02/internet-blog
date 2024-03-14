import About from "../pages/About";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="border-t border-white bg-[#eeeeee] p-1 grow flex flex-col overflow-auto">
      <div className="h-full myBody bg-white p-2 flex flex-col gap-8 overflow-auto body-scroll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-the-webmaster" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Wrapper;
