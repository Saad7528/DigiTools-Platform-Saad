import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101727] pt-20 pb-8 px-6 lg:px-12 font-sans text-white">
      <div className="w-9/12 mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 tracking-wide">DigiTools</h2>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-6">Product</h3>
            <ul className="space-y-4 text-slate-400 text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-4 text-slate-400 text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-6">Resources</h3>
            <ul className="space-y-4 text-slate-400 text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium mb-6">Social Links</h3>
            <div className="flex gap-4">
              
              <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#0b101e] hover:bg-slate-200 transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#0b101e] hover:bg-slate-200 transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a href="#" className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#0b101e] hover:bg-slate-200 transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </a>

            </div>
          </div>

        </div>

        
        <div className="border-t border-slate-700/50 mb-8"></div>

        
        <div className="flex flex-col md:flex-row justify-between items-center text-[14px] text-slate-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;