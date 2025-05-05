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
      <div className="flex justify-between mt-[57px] pb-[100px]">
        <div>
          <h1 className="text-[36px] mb-[20px] font-playfairdisplay text-heading">
            Custom Jewelry
          </h1>
          <p className="text-[20px] mb-[30px] font-dmsans">
            Create Your Masterpiece: Bespoke <br /> Jewelry Crafted for You
          </p>
          <div className="relative w-[512px] h-[639px]">
            <img src={DiamondRing} alt="Diamond Ring" className="w-[373px]" />
            <img
              src={GoldRing}
              alt="Gold Ring"
              className="absolute w-[239.2px] border-[6.62px] border-white right-0 bottom-0"
            />
          </div>
        </div>
        <div className="w-[678px]">
          <p className="mb-[40px] font-dmsans">
            Exquisite design, flawless craftsmanship, and timeless elegance—your
            <br />
            vision, perfectly crafted.
          </p>
          <div className="flex flex-col gap-[30px]">
            {CustomServicesList.map((service, index) => (
              <div key={index} className="flex gap-[17px]">
                <p className="text-accent text-[20px] font-dmsans pt-[3px]">
                  {"0" + (index + 1)}
                </p>
                <div>
                  <h1 className="text-[24px] uppercase mb-[10px] font-dmsans font-semibold text-heading">
                    {service.title}
                  </h1>
                  <p className="text-[20px] text-accent mb-[30px] font-dmsans">
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
