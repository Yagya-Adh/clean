import Image from "next/image";
import PillButton from "../button/PillButton";
import { CheckedIcon, HappyPlusIcon } from "@/app/icons";
import LocationIcon from "@/app/icons/LocationIcon";

interface IcustomHeader {
  title: string;
  slug: string;
  describe: string;
  icon: string;
  iconsName?: "blog" | "contact" | "other";
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
  iconsName,
  descriptionMaxwidth,
  isdescribeCapital,
  fadeAnimation,
  variant,
}: IcustomHeader) =>
  variant === "without-button" ? (
    <header className="max-w-screen-5xl mx-auto px-4 md:px-10 py-4 lg:py-0 2xl:py-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center animate-fadeInLeft sm:hidden md:flex">
          {iconsName == "blog" ? (
            <HappyPlusIcon className="h-7 w-6 xl:h-10 xl:w-10 2xl:h-16 2xl:w-16" />
          ) : iconsName == "contact" ? (
            <LocationIcon className="h-7 w-6 xl:h-10 xl:w-10 2xl:h-16 2xl:w-16" />
          ) : iconsName == "other" ? (
            <CheckedIcon className="h-7 w-6 xl:h-10 xl:w-10 2xl:h-16 2xl:w-16" />
          ) : (
            <CheckedIcon className="h-7 w-6 xl:h-10 xl:w-10 2xl:h-16 2xl:w-16" />
          )}
          <h2 className="uppercase text-xs sm:text-lg 2xl:text-3xl ml-2 tracking-wider font-normal font-inter text-clean-black-10 xl:font-normal xl:tracking-widest">
            {slug}
          </h2>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h1
            className={` 
              ${fadeAnimation && fadeAnimation}
            text-4xl sm:text-6xl xl:text-8xl 2xl:text-9xl py-2 font-light font-inter text-clean-black-10`}
          >
            {title}
          </h1>
          <p
            className={`
              text-clean-black-10             
              animate-fadeInRight
              tracking-wider
              xl:tracking-widest
              xl:max-w-xl
              xl:py-2
              text-base
              xl:text-xl                          
              sm:max-w-60
              md:max-w-96
              max-w-40
              font-normal 
              font-inter
              py-2
              2xl:py-4
              2xl:text-2xl
              2xl:max-w-screen-72
              ${isdescribeCapital ? "uppercase" : ""}
              ${descriptionMaxwidth ? descriptionMaxwidth : "max-w-72"}`}
          >
            {describe}
          </p>
        </div>
      </div>
    </header>
  ) : variant === "with-button" ? (
    <header className="max-w-screen-5xl mx-auto px-4 md:px-10 py-4 sm:py-7 lg:py-0">
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
          <h2 className="font-normal font-inter text-clean-black-10 uppercase lg:text-lg tracking-wider 2xl:text-3xl">
            {slug}
          </h2>
        </div>

        <h1 className="text-5xl 2xl:text-9xl lg:text-8xl font-light font-inter text-clean-black-10">
          {title}
        </h1>
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
              2xl:text-3xl
              2xl:max-w-screen-md    
              2xl:py-4        
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
