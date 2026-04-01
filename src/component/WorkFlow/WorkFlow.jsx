import React from 'react';

const WorkFlow = () => {
  return (
    <section className="w-full mt-20 py-24 px-6 bg-linear-to-r from-[#562dff] to-[#b324ff] font-sans flex flex-col items-center justify-center">
      <div className="w-9/12 mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" />
          Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          
          <button className="px-8 py-3.5 bg-white text-[#8326ff] font-semibold text-base rounded-full hover:bg-slate-50 transition-all shadow-lg hover:scale-105">
            Explore Products
          </button>
          
          <button className="px-8 py-3.5 bg-transparent border-[1.5px] border-white text-white font-semibold text-base rounded-full hover:bg-white/10 transition-all hover:scale-105">
            View Pricing
          </button>
          
        </div>
        
        <div className="text-sm text-white/80 font-medium tracking-wide flex flex-wrap items-center justify-center gap-2">
          <span>14-day free trial</span>
          <span className="text-[10px] opacity-70">&#9679;</span>
          <span>No credit card required</span>
          <span className="text-[10px] opacity-70">&#9679;</span>
          <span>Cancel anytime</span>
        </div>
        
      </div>
    </section>
  );
};

export default WorkFlow;