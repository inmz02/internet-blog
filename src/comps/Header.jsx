import { FaRegWindowMinimize, FaRegWindowMaximize } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-1 bg-[#b2c6f1] border-b border-[#b5b5b5]">
      <div className="flex gap-2 items-center">
        <img
          src="https://64.media.tumblr.com/48bb2c810d29bd4084bc53f97c53efb0/afcd9c7c79bf72e9-38/s75x75_c1/8b49bdb786e31cb95070d3da6b934c88bea138e7.gifv"
          alt=""
          className="h-fit w-5"
        />
        <h1 className="font-medium text-[#46586E]">Internet Blog</h1>
      </div>
      <div className="flex myIcons h-full text-base">
        <div className="border border-[#c5c5c5]">
          <FaRegWindowMinimize />
        </div>
        <div className="border border-[#c5c5c5]">
          <FaRegWindowMaximize />
        </div>
        <div className="border border-[#c5c5c5]">
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default Header;
