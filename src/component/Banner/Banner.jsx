import { Play } from "lucide-react";
import BannerImage from "/assets/banner.png";
import GradientBtn from "../GradientBtn/GradientBtn";

const Banner = () => {
  return (
    <div className=" mt-21.25 w-9/12 mx-auto relative min-h-162.5  overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-sm font-medium px-5 py-2 rounded-full">
            <h6 className="flex items-center  bg-linear-to-r from-[#4f39f6] to-[#9514FA] bg-clip-text text-transparent">
              <span>
                <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2" filter="url(#filter0_d_2_340)">
                  <rect
                    x="4"
                    width="16"
                    height="16"
                    rx="8"
                    fill="url(#paint0_linear_2_340)"
                  />
                </g>
                <rect
                  opacity="0.4"
                  x="6"
                  y="2"
                  width="12"
                  height="12"
                  rx="6"
                  fill="url(#paint1_linear_2_340)"
                />
                <rect
                  x="9"
                  y="5"
                  width="6"
                  height="6"
                  rx="3"
                  fill="url(#paint2_linear_2_340)"
                />
                <defs>
                  <filter
                    id="filter0_d_2_340"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_340"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_340"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2_340"
                    x1="-1.10067"
                    y1="8.91954"
                    x2="20.009"
                    y2="8.60591"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4F39F6" />
                    <stop offset="1" stop-color="#9514FA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_340"
                    x1="2.1745"
                    y1="8.68966"
                    x2="18.0068"
                    y2="8.45443"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4F39F6" />
                    <stop offset="1" stop-color="#9514FA" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_340"
                    x1="7.08725"
                    y1="8.34483"
                    x2="15.0034"
                    y2="8.22722"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4F39F6" />
                    <stop offset="1" stop-color="#9514FA" />
                  </linearGradient>
                </defs>
              </svg>
              </span>
              New: AI-Powered Tools Available
            </h6>
          </div>

          <h1 className="text-4xl lg:text-7xl/[84px] font-extrabold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-lg/[20px] text-[#627382] max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <GradientBtn btnText={"Explore Products"}></GradientBtn>
            <button className="btn border border-[#7238f8] px-6 py-3 rounded-full group font-bold flex items-center gap-3 group  hover:bg-white    ">
              <span className="group-hover:translate-x-1 transition group text-[#5944f5] ">
                <Play />
              </span>
              <h6 className="bg-linear-to-r from-[#4f39f6] to-[#9514FA] bg-clip-text text-transparent">
                Watch Demo
              </h6>
            </button>
          </div>
        </div>

        {/* Right Content */}
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
