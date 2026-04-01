import React from "react";

const GradientBtn = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-3 btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white font-bold hover:bg-opacity-90 transition-all"
    >
      {btnText}
    </button>
  );
};

export default GradientBtn;
