import React from "react";

const ActiveUser = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514FA]">
      
      <div className="w-11/12 md:w-9/12 mx-auto py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center">
        
        <div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white">50K+</h2>
          <p className="text-lg lg:text-2xl font-medium text-white/80 mt-2 md:mt-3">Active Users</p>
        </div>
        
        <div className="divider md:divider-horizontal before:bg-white/40 after:bg-white/40 my-2 md:my-0 w-1/2 md:w-auto mx-auto"></div>

        <div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white">200+</h2>
          <p className="text-lg lg:text-2xl font-medium text-white/80 mt-2 md:mt-3">Premium Tools</p>
        </div>
        
        <div className="divider md:divider-horizontal before:bg-white/40 after:bg-white/40 my-2 md:my-0 w-1/2 md:w-auto mx-auto"></div>
        
        <div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white">4.9</h2>
          <p className="text-lg lg:text-2xl font-medium text-white/80 mt-2 md:mt-3">Rating</p>
        </div>
        
      </div>
    </div>
  );
};

export default ActiveUser;