import React from "react";

import user from '/assets/user.png';
import product from '/assets/package.png';
import rocket from '/assets/rocket.png';


const stepsData = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    iconUrl: user, 
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    iconUrl: product,
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    iconUrl: rocket,
  },
];

const GetSteps = () => {
  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="w-9/12 mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 ">
          Get Started In 3 Steps
        </h2>
        <p className="text-lg text-slate-600 mb-16 md:mb-20 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-8 pb-12 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              
              <div className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 rounded-full bg-[#4f39f6] text-white text-sm font-bold shadow-md">
                {step.id}
              </div>

             
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-[#f1effd] mx-auto mb-10 mt-6 transition-transform duration-300 group-hover:scale-110">
                
                <img
                  src={step.iconUrl}
                  alt={step.title}
                  className="h-12 w-12 object-contain" 
                />
              </div>

              
              <h3 className="text-2xl font-bold text-slate-950 mb-3">
                {step.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetSteps;
