import React from "react";

const ActiveUser = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514FA]">
      <div className="w-9/12 mx-auto py-15 flex justify-between items-center">
        <div >
          <h2 className="text-6xl font-extrabold text-white">50K+</h2>
          <p className="text-2xl font-medium text-white/80 mt-3">Active Users</p>
        </div>
          <div className="divider divider-horizontal before:bg-white/40 after:bg-white/40"></div>

        <div>
          <h2 className="text-6xl font-extrabold text-white">200+</h2>
          <p className="text-2xl font-medium text-white/80 mt-3">Premium Tools</p>
        </div>
        <div className="divider divider-horizontal before:bg-white/40 after:bg-white/40"></div>
        <div>
          <h2 className="text-6xl font-extrabold text-white">4.9</h2>
          <p className="text-2xl font-medium text-white/80 mt-3">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
