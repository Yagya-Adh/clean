import Image from "next/image";
import PillButton from "../button/PillButton";

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
    <section className="max-w-screen-2xl mx-auto px-10 py-20">
      <div
        className={`flex flex-col justify-center items-center          
          
          ${fadeAnimation ? fadeAnimation : "animate-fadeInUp"}`}
      >
        <header
          className={`flex flex-row items-center ${
            fadeAnimation ? fadeAnimation : ""
          }`}
        >
          <Image src={icon} alt="header_logo_" width={36} height={36} />
          <h5 className="font-inter uppercase text-sm ml-4">{slug}</h5>
        </header>
        <article
          className={`p-4 text-center flex flex-col justify-center items-center ${
            fadeAnimation ? fadeAnimation : ""
          }`}
        >
          <h4 className="text-8xl font-light font-inter py-4">{title}</h4>
          <p
            className={`text-clean-black-10/60             
              text-xl 
              font-inter
              font-normal              
              ${isdescribeCapital ? "uppercase" : ""}
              ${descriptionMaxwidth ? descriptionMaxwidth : "max-w-72"}`}
          >
            {describe}
          </p>
        </article>
      </div>
    </section>
  ) : variant === "with-button" ? (
    <section className="max-w-screen-2xl mx-auto px-10 py-20">
      <div
        className={`flex flex-col justify-center items-center          
       ${fadeAnimation ? fadeAnimation : "animate-fadeInUp"}
       `}
      >
        <header
          className={`flex flex-row items-center ${
            fadeAnimation ? fadeAnimation : ""
          }`}
        >
          <Image src={icon} alt="header_logo_" width={36} height={36} />
          <h5 className="font-mono uppercase text-sm ml-4 text-clean-black-10/60">
            {slug}
          </h5>
        </header>
        <article
          className={`p-4 text-center flex flex-col justify-center items-center ${
            fadeAnimation ? fadeAnimation : ""
          }`}
        >
          <h4 className="text-8xl font-light font-inter py-4 text-clean-black-10">
            {title}
          </h4>
          <p
            className={`
              text-clean-black-10/60
              py-10
              text-lg 
              font-inter
              font-normal               
              ${isdescribeCapital ? "uppercase" : ""}
              ${descriptionMaxwidth ? descriptionMaxwidth : "max-w-72"}`}
          >
            {describe}
          </p>
          <PillButton text="EXPLORE" />
        </article>
      </div>
    </section>
  ) : null;

export default CustomHeader;
