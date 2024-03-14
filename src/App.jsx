import Header from "./comps/Header";
import NavBar from "./comps/Navbar";
import NavBar2 from "./comps/Navbar2";
import Wrapper from "./comps/Wrapper";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showNavbar2, setShowNavbar2] = useState(true);

  const toggleNavbar2 = () => {
    setShowNavbar2(!showNavbar2); // Toggle visibility state
  };
  return (
    <div className="bg-white sm:w-full lg:w-1/2 h-full w-full border border-[#b5b5b5] myShadow">
      <div className="h-full border border-[#ffffff] flex flex-col">
        <Header />
        <BrowserRouter>
          <NavBar toggleNavbar2={toggleNavbar2} showNavbar2={showNavbar2} />
          {showNavbar2 && <NavBar2 />}
          <Wrapper />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
