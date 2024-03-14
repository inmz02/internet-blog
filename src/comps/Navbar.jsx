/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { HiMiniHome } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Btn from "./Btn";

const NavBar = ({ toggleNavbar2, showNavbar2 }) => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/");
  };
  return (
    <div className="w-full bg-[#eeeeee] border border-t-white border-b-[#c5c5c5] p-1 flex gap-1 text-xxs">
      <Btn title="♡ Homepage" content={<HiMiniHome />} onclick={navToHome} />
      <div className=" bg-[#ffffff] flex items-center whitespace-nowrap overflow-hidden grow outline-0 myBody italic text-xxs cursor-default">
        <p className="relative movingText">hello</p>
      </div>
      <div className="flex gap-1">
        <Btn
          title="♡ FAQ + Contact"
          content={
            showNavbar2 ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
          }
          onclick={toggleNavbar2}
        />
      </div>
    </div>
  );
};

export default NavBar;
