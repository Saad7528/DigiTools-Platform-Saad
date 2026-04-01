import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import GradientBtn from "../GradientBtn/GradientBtn";

const NavBar = ({ cardItems }) => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="relative w-11/12 md:w-9/12 mx-auto py-4 flex items-center justify-between font-sans">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-1 text-slate-800 hover:text-[#4f39f6] "
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>

        <div className="flex items-center font-bold text-xl">
          <img
            className="h-8 md:h-10 w-auto"
            src="/src/assets/DigiTools.png"
            alt="DigiTools Logo"
          />
        </div>
      </div>

      <div className="hidden md:flex">
        <ul className="flex items-center gap-8 text-[16px] font-medium text-slate-700">
          <li className="font-bold hover:text-[#4f39f6] cursor-pointer">
            Products
          </li>
          <li className="font-bold hover:text-[#4f39f6] cursor-pointer">
            Features
          </li>
          <li className="font-bold hover:text-[#4f39f6] cursor-pointer">
            Pricing
          </li>
          <li className="font-bold hover:text-[#4f39f6] cursor-pointer">
            Testimonials
          </li>
          <li className="font-bold hover:text-[#4f39f6] cursor-pointer">FAQ</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
          <div className="relative cursor-pointer group flex items-center justify-center">
  <ShoppingCart className="h-6 w-6 text-slate-700 group-hover:text-[#4f39f6] transition-colors" />
  

  {
    cardItems.length > 0 && <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
      {cardItems.length}
    </span>
  }
    
  
</div>
          <span className="cursor-pointer hover:text-[#4f39f6] transition-colors">
            Login
          </span>
        </div>

        <GradientBtn btnText={"Get in Touch"}></GradientBtn>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-4 bg-white rounded-2xl shadow-xl md:hidden z-50 border border-slate-100 p-5">
          <ul className="flex flex-col gap-4 text-slate-800 font-medium text-lg">
            <li
              className="hover:text-[#4f39f6] cursor-pointer"
              onClick={toggleMenu}
            >
              Products
            </li>
            <li
              className="hover:text-[#4f39f6] cursor-pointer"
              onClick={toggleMenu}
            >
              Features
            </li>
            <li
              className="hover:text-[#4f39f6] cursor-pointer"
              onClick={toggleMenu}
            >
              Pricing
            </li>
            <li
              className="hover:text-[#4f39f6] cursor-pointer"
              onClick={toggleMenu}
            >
              Testimonials
            </li>
            <li
              className="hover:text-[#4f39f6] cursor-pointer"
              onClick={toggleMenu}
            >
              FAQ
            </li>

            <hr className="my-2 border-slate-100" />

            <li
              className="flex items-center gap-3 hover:text-[#4f39f6] cursor-pointer"
              onClick={toggleMenu}
            >
              <ShoppingCart className="h-5 w-5" /> Cart
            </li>
            <li
              className="hover:text-[#4f39f6] cursor-pointer"
              onClick={toggleMenu}
            >
              Login
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
