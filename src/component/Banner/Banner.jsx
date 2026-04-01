import { Play } from "lucide-react";
import BannerImage from "../../assets/banner.png";
import GradientBtn from "../GradientBtn/GradientBtn";

const Banner = () => {
  return (
    <div className=" mt-21.25 w-9/12 mx-auto relative min-h-162.5  overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-sm font-medium px-5 py-2 rounded-full">
            <h6 className=" bg-linear-to-r from-[#4f39f6] to-[#9514FA] bg-clip-text text-transparent">
              ✨ New: AI-Powered Tools Available
            </h6>
          </div>

          <h1 className="text-4xl lg:text-7xl/[84px] font-extrabold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-lg/[20px] text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <GradientBtn btnText={"Explore Products"}></GradientBtn>
            <button className="btn btn-outline px-6 py-3 rounded-full font-bold flex items-center gap-3 group hover:bg-white    ">
              <span className="group-hover:translate-x-1 transition"><Play/></span>
              <h6 className="bg-linear-to-r from-[#4f39f6] to-[#9514FA] bg-clip-text text-transparent">
                Watch Demo
              </h6>
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="">
            <img
              className="w-auto rounded-lg"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
