import { BsBoxArrowUpRight } from "react-icons/bs";
import WomanImage from "../assets/images/Woman.png";
import { explore_links } from "../data/explore_links";
import Frame from "./Frame";

const Explore = () => {
  return (
    <>
      <Frame>
        <div className="flex justify-between bg-white">
          <div className="pt-[70px] pb-[30px] sm:pb-[101px]">
            <h1 className="text-[26px] sm:text-[32px] mb-[15px] font-playfairdisplay text-heading">
              Explore More
            </h1>
            <p className="text-[14px] mb-[30px] text-accent">
              Looking for more diamond guides, buying tips or details about{" "}
              <br /> the 4Cs? Explore more of our diamond education pages:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px] gap-y-[23px]">
              {explore_links.map((link, index) => (
                <div key={index} className="w-full sm:w-[318px]">
                  <a
                    href={link.href}
                    className="flex justify-between items-center gap-[23px]"
                  >
                    <span className="underline text-[12px] sm:text-[14px] text-primary">
                      {link.name}
                    </span>
                    <div className="border-1 border-accent rounded-full text-accent p-[17px]">
                      <BsBoxArrowUpRight className="text-[13.21px]" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <img
            src={WomanImage}
            className="hidden sm:block md:absolute right-0 w-[590px] h-[419px] z-50"
          />
        </div>
      </Frame>
      <img src={WomanImage} className="block sm:hidden w-full z-50" />
    </>
  );
};

export default Explore;
