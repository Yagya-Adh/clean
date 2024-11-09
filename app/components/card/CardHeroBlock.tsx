import Image from "next/image";
import CardTag from "./CardTag";

interface IcardheroProps {
  head: string;
  preTitle: string;
  italicTitle: string;
  describe: string;
  textOrder: string;
  imagePath: string;
  iconPath: string;
  cleanCycle: string;
  cleanType: string;
}
const CardHeroBlock = ({
  head,
  preTitle,
  italicTitle,
  describe,
  textOrder,
  cleanCycle,
  cleanType,
  imagePath,
  iconPath,
}: IcardheroProps) => {
  return (
    <section className="max-w-screen-xl mx-auto px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <aside className={`${textOrder} py-4`}>
          <div className="flex flex-row items-center">
            <Image
              src={iconPath}
              alt="Cleaning spray icon"
              width={52}
              height={52}
              className="object-center object-cover"
            />
            <h3 className="ml-5 font-inter font-light text-xl text-clean-black-10 uppercase">
              {head}
            </h3>
          </div>
          <h5 className="font-inter max-w-xl font-light text-4xl lg:text-7xl text-clean-black-10 py-10">
            {preTitle}
            {""}
            <span className="font-thin italic">{italicTitle}</span>
          </h5>
          <p className="font-inter font-light max-w-60 text-xl md:text-2xl text-clean-black-10 text-center ">
            {describe}
          </p>
        </aside>
        <aside>
          <div className="relative">
            <Image
              src={imagePath}
              alt="Cleaning spray icon"
              width={400}
              height={400}
              className="object-center object-cover rounded-[52px]"
            />
            <div className="absolute -top-10 right-10 ">
              <CardTag cleanCycle={cleanCycle} cleanType={cleanType} />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CardHeroBlock;
