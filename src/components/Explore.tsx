import { BsBoxArrowUpRight } from "react-icons/bs";
import WomanImage from "../assets/images/Woman.png";
import { exploreLinks } from "../entities/ExploreLinks";
import Frame from "./Frame";

const Explore = () => {
  return (
    <Frame>
      <div className="flex justify-between pl-[80px] bg-white">
        <div className="pt-[70px] pb-[101px]">
          <h1 className="text-[32px] mb-[15px] font-playfairdisplay text-heading">
            Explore More
          </h1>
          <p className="text-[14px] mb-[30px] text-accent">
            Looking for more diamond guides, buying tips or details about <br />{" "}
            the 4Cs? Explore more of our diamond education pages:
          </p>
          <div className="grid grid-cols-2 gap-x-[50px] gap-y-[23px]">
            {exploreLinks.map((link, index) => (
              <div key={index} className="w-[318px]">
                <a
                  href={link.href}
                  className="flex justify-between items-center"
                >
                  <span className="underline text-[14px] text-primary">
                    {link.name}
                  </span>
                  <div className="border-1 border-accent rounded-full text-accent p-[17px] ml-[23px]">
                    <BsBoxArrowUpRight />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <img
          src={WomanImage}
          className="absolute right-0 w-[590px] h-[419px] z-50"
        />
      </div>
    </Frame>
  );
};

export default Explore;
