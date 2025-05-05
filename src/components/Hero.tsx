import Ring from "../assets/images/ring.png";
import Diamond from "../assets/images/diamond.png";
import Diamonds from "../assets/images/diamonds.png";
import InnerBanner from "../assets/images/innerbanner.png";

const Hero = () => {
  return (
    <div
      className="relative h-[420px] bg-[#f0f0f0] bg-cover bg-center bg-no-repeat overflow-hidden z-0"
      style={{ backgroundImage: `url(${InnerBanner})` }}
    >
      <img
        src={Ring}
        alt="ring"
        className="absolute w-[565px] h-[565px] top-[105px] right-[-24px] z-10"
      />
      <img
        src={Diamond}
        alt="diamond"
        className="absolute w-[363.47px] h-[336.45px] z-10 bottom-[293.5px] right-[-91.07px] rotate-170"
      />
      <img
        src={Diamonds}
        alt="diamonds"
        className="absolute w-[533.4px] h-[381px] bottom-[-34px] z-10"
      />
      <div className="text-center mt-[150px] z-20">
        <h1 className="text-[48px] mb-[30px] font-playfairdisplay text-primary">
          Custom Jewelry
        </h1>
        <p className="text-[20px] font-dmsans text-primary">
          Create Your Masterpiece: Bespoke Jewelry Crafted for You
        </p>
      </div>
    </div>
  );
};

export default Hero;
