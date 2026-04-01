import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar w-9/12 mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <img className="w-100%" src="/src/assets/DigiTools.png" />
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="flex gap-3">
            <ShoppingCart/>
            <h5>Login</h5>
        </div>
        <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;