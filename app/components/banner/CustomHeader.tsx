import Image from "next/image";

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
}
const CustomHeader = ({
  title,
  slug,
  describe,
  icon,
  descriptionMaxwidth,
  isdescribeCapital,
  fadeAnimation,
}: IcustomHeader) => {
  return (
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
          <h5 className="font-mono uppercase text-sm ml-4">{slug}</h5>
        </header>
        <article
          className={`p-4 text-center ${fadeAnimation ? fadeAnimation : ""}`}
        >
          <h1 className="text-7xl font-light py-4">{title}</h1>
          <p
            className={`             
              text-base 
              font-mono              
              ${isdescribeCapital ? "uppercase" : ""}
              ${descriptionMaxwidth ? descriptionMaxwidth : "max-w-72"}`}
          >
            {describe}
          </p>
        </article>
      </div>
    </section>
  );
};

export default CustomHeader;
