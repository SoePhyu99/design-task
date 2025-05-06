import { useRef } from "react";
import { LiaFacebook, LiaInstagram } from "react-icons/lia";
import { VscSend } from "react-icons/vsc";
import validator from "validator";
import Amex from "../assets/images/Payments/amex.png";
import ApplePay from "../assets/images/Payments/applepay.png";
import MasterCard from "../assets/images/Payments/mastercard.png";
import Visa from "../assets/images/Payments/visa.png";
import { QuickLinks } from "../entities/QuickLinks";
import sendMail from "../utils/mailer";
import Frame from "./Frame";

const Footer = () => {
  const ref = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (ref.current?.value && validator.isEmail(ref.current.value)) {
      sendMail(ref.current?.value)
        .then((res) => alert(res))
        .catch((e) => alert(e));
    } else {
      alert("Enter a valid email address.");
    }
  };
  return (
    <div className="pt-[50px] sm:pt-[89px] bg-footer">
      <Frame>
        <div className="flex flex-wrap sm:gap-[30px] pb-[59px]">
          {QuickLinks.map((quickQuick, index) => (
            <div key={index} className="w-full sm:w-[234px]">
              <h1 className="text-[14px] sm:text-base uppercase mb-[15px] text-primary font-dmsansbold">
                {quickQuick.heading}
              </h1>
              <ul className="flex flex-col gap-[10px] text-primary">
                {quickQuick.links.map((link, index) => (
                  <li key={index} className="text-[14px] font-light">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
              <div className="h-[1px] bg-border my-[8px]"></div>
            </div>
          ))}
          <div>
            <div>
              <h1 className="mb-[15px] font-dmsansbold text-primary">
                Let's Keep In Touch
              </h1>
              <div className="h-[46px]">
                <form className="relative" onSubmit={onSubmit}>
                  <input
                    type="email"
                    ref={ref}
                    name="email"
                    className="w-full sm:w-[376px] text-[14px] px-[10px] py-[12px] bg-white text-primary focus:border-0"
                    placeholder="Email Address"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-[14px] bg-[#0D4269] text-white"
                  >
                    <VscSend className="text-[18px]" />
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-[36px]">
              <h1 className="uppercase mb-[15px] font-semibold">
                Payment Methods
              </h1>
              <div className="flex flex-wrap gap-[15px]">
                <div className="w-[52.5px] px-1 bg-white border-2 border-border rounded-lg grayscale">
                  <img
                    src={Visa}
                    alt="visa"
                    className="w-[40.25px] mt-2 py-2"
                  />
                </div>
                <div className="w-[52.5px] px-1 bg-white border-2 border-border rounded-lg grayscale">
                  <img src={MasterCard} alt="visa" className="h-auto py-2" />
                </div>
                <div className="w-[52.5px] px-1 bg-white border-2 border-border rounded-lg grayscale">
                  <img
                    src={ApplePay}
                    alt="visa"
                    className="w-[40.25px] mt-[5px] py-2"
                  />
                </div>
                <div className="w-[52.5px] px-1 bg-white border-2 border-border rounded-lg grayscale">
                  <img src={Amex} alt="visa" className="w-[40.25px] py-2" />
                </div>
                <div className="w-[52.5px] pt-3 pl-4.5 bg-white border-2 border-border rounded-lg grayscale">
                  <svg
                    width="12"
                    height="21"
                    viewBox="0 0 12 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.64648 5.52825V0H7.03741V1.05709C7.03741 3.5263 5.07138 5.52825 2.64648 5.52825Z"
                      fill="#292929"
                    />
                    <path
                      d="M11.4045 7.20304L0.0179798 8.81813L0 5.94615L11.3865 4.33105L11.4045 7.20304Z"
                      fill="#292929"
                    />
                    <path
                      d="M11.4306 11.3515L0.0441023 12.9666L0.026123 10.0946L11.4127 8.47949L11.4306 11.3515Z"
                      fill="#292929"
                    />
                    <path
                      d="M10.7937 19.985C10.7937 19.985 8.75806 20.7436 6.88194 20.5239C4.47502 20.2413 2.49414 18.5235 2.49414 16.0559V6.57471H6.55909V15.3379C6.55909 16.5861 7.85674 17.0772 9.13876 16.84C9.58356 16.758 10.8687 16.3011 10.8687 16.3011L10.7937 19.985Z"
                      fill="#292929"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center justify-between text-primary font-dmsans py-[9px]">
          <div className="flex gap-[20px]">
            <a href="#" className="text-[8px]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[8px]">
              Privacy Policy
            </a>
            <a href="#" className="text-[8px]">
              Site Map
            </a>
          </div>
          <div className="flex gap-[25px]">
            <LiaFacebook className="text-[18px]" />
            <LiaInstagram className="text-[18px]" />
          </div>
        </div>
        <div className="h-[1px] bg-border"></div>
        <div className="py-[21px] flex justify-between items-center">
          <p className="text-[10px] sm:text-[14px] mx-auto sm:mx-0 font-dmsans text-primary">
            © 2025, All Rights Reserved - MyJewel
          </p>
          <div className="hidden lg:flex gap-[30px] items-center text-primary font-dmsans">
            <a href="#" className="text-[12px]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[12px]">
              Privacy Policy
            </a>
            <a href="#" className="text-[12px]">
              Site Map
            </a>
            <div className="flex gap-[25px]">
              <LiaFacebook className="text-[25px]" />
              <LiaInstagram className="text-[25px]" />
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default Footer;
