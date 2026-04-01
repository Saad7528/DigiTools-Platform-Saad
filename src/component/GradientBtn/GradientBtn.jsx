import React from "react";

const GradientBtn = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-5 md:px-7 py-2.5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white font-medium hover:opacity-90 hover:scale-105 transition-all shadow-md"
    >
      {btnText}
    </button>
  );
};

export default GradientBtn;
