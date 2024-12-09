import Image from "next/image";
import PillButton from "../button/PillButton";
import { CheckedIcon } from "@/app/icons";

interface IcustomHeader {
  title: string;
  slug: string;
  describe: string;
  icon: string;
  descriptionMaxwidth: string | "max-w-sm" | "max-w-xl";
  isdescribeCapital?: boolean;
  fadeAnimation?:
    | "animate-fadeInUp"
    | "animate-fadeInRight"
    | "animate-fadeInLeft";

  variant: "with-button" | "without-button";
}
const CustomHeader = ({
  title,
  slug,
  describe,
  icon,
  descriptionMaxwidth,
  isdescribeCapital,
  fadeAnimation,
  variant,
}: IcustomHeader) =>
  variant === "without-button" ? (
    <header className="max-w-screen-4xl mx-auto px-4 md:px-10 py-4 lg:py-0">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center animate-fadeInLeft sm:hidden md:flex">
          <CheckedIcon className="h-7 w-6" />
          <h2 className="uppercase text-xs sm:text-lg ml-2 tracking-wider font-normal font-inter text-clean-black-10">
            {slug}
          </h2>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h3
            className={` 
              ${fadeAnimation && fadeAnimation}
            text-4xl sm:text-6xl xl:text-8xl py-2 font-light font-inter text-clean-black-10`}
          >
            {title}
          </h3>
          <p
            className={`
              text-clean-black-10             
              animate-fadeInRight
              tracking-wider
              text-base                          
              sm:max-w-60
              md:max-w-96
              max-w-40
              font-normal 
              font-inter
              py-2
              ${isdescribeCapital ? "uppercase" : ""}
              ${descriptionMaxwidth ? descriptionMaxwidth : "max-w-72"}`}
          >
            {describe}
          </p>
        </div>
      </div>
    </header>
  ) : variant === "with-button" ? (
    <header className="max-w-screen-4xl mx-auto px-4 md:px-10 py-4 sm:py-7 lg:py-0">
      <div
        className={`flex flex-col justify-center items-center text-clean-black-10       
       ${fadeAnimation ? fadeAnimation : "animate-fadeInUp"}
       `}
      >
        <div
          className={`flex flex-row items-center text-clean-black-10 ${
            fadeAnimation ? fadeAnimation : ""
          }`}
        >
          <Image src={icon} alt="header_logo_" width={36} height={36} />
          <h2 className="font-normal font-inter text-clean-black-10 uppercase lg:text-lg tracking-wider">
            {slug}
          </h2>
        </div>

        <h3 className="text-5xl lg:text-8xl font-light font-inter text-clean-black-10">
          {title}
        </h3>
        <p
          className={`
              text-clean-black-10
              py-2
              text-xs 
              font-inter
              font-normal 
              sm:font-normal
              max-w-60  
              sm:max-w-72            
              text-center
              tracking-widest  
              sm:my-4
              md:text-lg
              md:max-w-md              
              ${isdescribeCapital ? "uppercase" : ""}
              ${descriptionMaxwidth && descriptionMaxwidth}`}
        >
          {describe}
        </p>
        <PillButton text="EXPLORE" />
      </div>
    </header>
  ) : null;

export default CustomHeader;
