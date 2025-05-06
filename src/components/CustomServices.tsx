import DiamondRing from "../assets/images/DiamondRing.png";
import GoldRing from "../assets/images/GoldRing.png";
import { CustomServicesList } from "../entities/CustomServices";
import Frame from "./Frame";

const CustomServices = () => {
  return (
    <Frame>
      <div className="text-[14px] mt-[21px]">
        <a href="#" className="text-accent">
          Home /{" "}
        </a>
        <a href="#" className="">
          Custom Jewelry
        </a>
      </div>
      <div className="sm:hidden mt-[40px]">
        <h1 className="text-[26px] mb-[10px] font-playfairdisplay text-heading">
          Custom Jewelry
        </h1>
        <p className="text-[14px] mb-[18px] font-dmsans tracking-wide">
          Create Your Masterpiece: Bespoke Jewelry Crafted for You
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between sm:mt-[57px] pb-[100px]">
        <div>
          <div className="hidden sm:block">
            <h1 className="text-[26px] sm:text-[36px] mb-[20px] font-playfairdisplay text-heading">
              Custom Jewelry
            </h1>
            <p className="text-[14px] sm:text-[20px] mb-[30px] font-dmsans tracking-wide">
              Create Your Masterpiece: Bespoke <br /> Jewelry Crafted for You
            </p>
          </div>
          <p className="block sm:hidden mt-[20px] mb-[30px] text-[14px] sm:text-base font-dmsans tracking-wider">
            Exquisite design, flawless craftsmanship, and timeless elegance—your
            vision, perfectly crafted.
          </p>
          <div className="relative w-full h-[431.25px] sm:w-[512px] sm:h-[639px]">
            <img
              src={DiamondRing}
              alt="Diamond Ring"
              className="w-[70%] sm:w-[373px]"
            />
            <img
              src={GoldRing}
              alt="Gold Ring"
              className="absolute w-[40%] sm:w-[239.2px] border-[6.62px] border-b-0 border-r-0 border-white right-0 bottom-0"
            />
          </div>
        </div>
        <div className="w-full sm:w-[678px]">
          <p className="hidden sm:block mb-[40px] font-dmsans tracking-wider">
            Exquisite design, flawless craftsmanship, and timeless elegance—your
            <br />
            vision, perfectly crafted.
          </p>
          <div className="flex flex-col gap-[30px]">
            {CustomServicesList.map((service, index) => (
              <div key={index} className="flex gap-[17px]">
                <p className="text-accent text-[14px] sm:text-[20px] font-dmsans pt-[3px]">
                  {"0" + (index + 1)}
                </p>
                <div>
                  <h1 className="text-[16px] sm:text-[24px] uppercase mb-[10px] font-dmsans font-semibold text-heading">
                    {service.title}
                  </h1>
                  <p className="text-[14px] sm:text-[20px] text-accent mb-[10px] sm:mb-[30px] font-dmsans">
                    {service.description}
                  </p>
                  <div className="h-[1px] bg-border"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default CustomServices;
