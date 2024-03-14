/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div className="w-full bg-[#eeeeee] border border-t-white border-b-[#c5c5c5] p-1 flex gap-2 text-xxs myNav2 justify-center md:justify-start">
      <Link to="/">Home</Link>
      <Link to="/about-the-webmaster">About Webmaster</Link>
      <Link>Programming</Link>
      <Link>Lord Jesus</Link>
      <Link>Philosophy</Link>
    </div>
  );
};

export default NavBar2;
