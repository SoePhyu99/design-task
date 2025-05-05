import Frame from "./Frame";
import { PiUserCircleCheck } from "react-icons/pi";
import { GiDiamondHard } from "react-icons/gi";
import { IoRibbonOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="bg-[#fcfcfc] relative z-0 overflow-hidden">
      <div className="absolute top-[224px] right-[-113px] w-[544px] h-[544px] bg-[#15274B1A] rounded-full z-10"></div>
      <div className="absolute top-[410px] right-[230px] w-[399px] h-[399px] bg-[#15274B1A] rounded-full z-10"></div>
      <Frame>
        <div className="pt-[77px] pb-[117px]">
          <h1 className="text-[36px] text-center mb-[40px] font-playfairdisplay text-secondary">
            Why Choose MyJewel?
          </h1>
          <div className="flex gap-[33px] justify-between">
            <div className="flex flex-col gap-[20px] p-[20px] text-center w-[400px] shadow-md">
              <PiUserCircleCheck className="text-[45px] text-secondary mx-auto" />
              <h2 className="text-[20px] font-playfairdisplay font-semibold text-secondary">
                Personal Design Consultation
              </h2>
              <p className="font-dmsans text-accent">
                Work with our designers to create your perfect piece.
              </p>
            </div>
            <div className="flex flex-col gap-[20px] p-[20px] text-center w-[400px] shadow-md">
              <GiDiamondHard className="text-[45px] mx-auto" />
              <h2 className="text-[20px] font-playfairdisplay font-semibold">
                Crafted with Luxury Materials
              </h2>
              <p className="font-dmsans text-accent">
                Only the finest diamonds, gemstones, and precious metals used.
              </p>
            </div>
            <div className="flex flex-col gap-[20px] p-[20px] text-center w-[400px] bg-white shadow-md z-20">
              <IoRibbonOutline className="text-[45px] mx-auto" />
              <h2 className="text-[20px] font-playfairdisplay font-semibold">
                Lifetime Warranty
              </h2>
              <p className="font-dmsans text-accent">
                Lifetime warranty on every piece, ensuring quality and lasting
                beauty.
              </p>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default Services;
