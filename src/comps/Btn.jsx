/* eslint-disable react/prop-types */
const Btn = ({ title, content, onclick, style, dataColorSet }) => {
  return (
    <div className="border border-[#c5c5c5] w-fit bg-[#eeeeee]">
      <button
        type="button"
        data-colors={dataColorSet}
        className={`border border-r-0 border-b-0 border-t-white border-l-white p-[2px] text-[12px] font-medium h-full flex justify-center items-center myBtn ${style}`}
        onClick={onclick}
        title={title}
      >
        {content}
      </button>
    </div>
  );
};

export default Btn;
