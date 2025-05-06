import { reasons } from "../entities/Reasons";
import Frame from "./Frame";

const Services = () => {
  return (
    <div className="bg-[#fcfcfc] relative z-0 overflow-hidden">
      <div className="absolute bottom-[-255px] right-[-355px] lg:top-[224px] lg:right-[-113px] w-[544px] h-[544px] bg-[#15274B1A] rounded-full z-10"></div>
      <div className="absolute left-[-27px] bottom-[-260px] sm:top-[410px] sm:right-[230px] w-[399px] h-[399px] bg-[#15274B1A] rounded-full z-10"></div>
      <Frame>
        <div className="pt-[77px] pb-[117px]">
          <h1 className="text-[26px] sm:text-[36px] text-center mb-[40px] font-playfairdisplay text-secondary">
            Why Choose MyJewel?
          </h1>
          <div className="flex flex-wrap gap-[33px] justify-between">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col gap-[20px] p-[20px] text-center w-[400px] shadow-md bg-white z-20"
              >
                <reason.icon className="text-[35px] sm:text-[45px] text-secondary mx-auto" />
                <h2 className="text-base sm:text-[20px] font-playfairdisplay font-semibold text-secondary">
                  {reason.title}
                </h2>
                <p className="text-[14px] px-[18.5px] sm:text-base font-dmsans text-accent">
                  {reason.description}
                </p>
              </div>
            ))}
            {/* <div className="flex flex-col gap-[20px] p-[20px] text-center w-[400px] shadow-md bg-white z-20">
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
            </div> */}
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default Services;
