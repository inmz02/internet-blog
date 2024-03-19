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
        <p className="relative movingText">
          Built by izi because she was bored one afternoon after watching JoJo's
          Bizzare Adventure &nbsp; ♡ &nbsp; follow me on tumblr @izicodes &nbsp;
          ♡ &nbsp; The Lord Jesus Christ Loves You And Wants To Be A Part Of
          Your Life &nbsp; ♡ &nbsp; “Good, better, best. Never let it rest. 'Til
          your good is better and your better is best.” - St. Jerome &nbsp; ♡
          &nbsp; my favourite animal is a panda 🐼
        </p>
      </div>
      <div className="flex gap-1">
        <Btn
          title={showNavbar2 ? "♡ Hide Toolbar" : "♡ Reveal Toolbar"}
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
