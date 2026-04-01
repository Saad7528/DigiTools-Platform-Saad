import React, { useState, useEffect } from 'react';

const PricingSection = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  
  const [selectedPlanId, setSelectedPlanId] = useState(2); 

  useEffect(() => {
    fetch('/pricing.json')
      .then((response) => response.json())
      .then((data) => setPricingPlans(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="bg-slate-50 py-16 md:py-24 px-4 font-manrope">
      <div className="w-9/12 mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 ">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {
          pricingPlans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div 
                key={plan.id} 
                onClick={() => setSelectedPlanId(plan.id)} 
                className={`relative h-full cursor-pointer p-8 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 
                ${isSelected 
                  ? 'bg-linear-to-r from-[#4f39f6] to-[#9514FA] text-white shadow-lg border-transparent scale-105 z-10'
                  : 'bg-white text-slate-900 border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                
              <div className='flex flex-col justify-between h-full'>
               <div className='h-full'>
                   {plan.badgeText && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm
                    ${isSelected ? 'bg-yellow-400 text-yellow-900' : 'bg-yellow-100 text-yellow-800'}
                  `}>
                    {plan.badgeText}
                  </div>
                )}

                <div className="mb-8 mt-2">
                  <h3 className={`text-xl font-semibold mb-1 ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-base ${isSelected ? 'text-white/90' : 'text-slate-600'}`}>
                    {plan.description} 
                  </p>
                </div>

                <div className="flex items-baseline mb-8">
                  <span className={`text-4xl font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-xl font-medium ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                    {plan.pricePeriod}
                  </span>
                </div>

                <ul className="space-y-4 mb-10 pt-8 border-t  border-slate-200/50">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 shrink-0  ${isSelected ? 'text-white' : 'text-green-500'} `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-base leading-relaxed ${isSelected ? 'text-white' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
               </div>

                <button 
                  className={`w-full px-6 py-3.5 rounded-xl font-semibold text-base transition-colors duration-300 
                  ${isSelected ? 'bg-white text-[#4f39f6] hover:bg-slate-100' : 'bg-[#4f39f6] text-white hover:bg-indigo-800'}`}
                >
                  {plan.buttonText}
                </button>
              </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default PricingSection;