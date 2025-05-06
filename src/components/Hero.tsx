import Diamond from "../assets/images/diamond.png";
import Diamonds from "../assets/images/diamonds.png";
import InnerBanner from "../assets/images/innerbanner.png";
import Ring from "../assets/images/ring.png";

const Hero = () => {
  return (
    <div
      className="relative h-[300px] sm:h-[420px] bg-[#f0f0f0] bg-cover bg-center bg-no-repeat overflow-hidden z-0"
      style={{ backgroundImage: `url(${InnerBanner})` }}
    >
      <img
        src={Ring}
        alt="ring"
        className="absolute w-[194px] h-[194px] bottom-[-68px] right-[-35px] sm:w-[565px] sm:h-[565px] sm:top-[105px] sm:right-[-24px] z-10"
      />
      <img
        src={Diamond}
        alt="diamond"
        className="absolute w-[130.16px] h-[121.17px] top-[-44px] right-[-44px] sm:w-[363.47px] sm:h-[336.45px] z-10 sm:top-[-213px] sm:right-[-71.07px] rotate-170"
      />
      <img
        src={Diamonds}
        alt="diamonds"
        className="absolute w-[142.8px] h-[108px] bottom-0 left-0 sm:w-[533.4px] sm:h-[381px] sm:bottom-[-34px] z-10"
      />
      <div className="text-center mt-[105px] sm:mt-[150px] z-20">
        <h1 className="text-[26px] sm:text-[48px] mb-[30px] font-playfairdisplay text-primary">
          Custom Jewelry
        </h1>
        <p className="text-[14px] sm:text-[20px] px-[45px] font-dmsans text-primary">
          Create Your Masterpiece: Bespoke Jewelry Crafted for You
        </p>
      </div>
    </div>
  );
};

export default Hero;
