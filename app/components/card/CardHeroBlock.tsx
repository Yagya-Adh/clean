import Image from "next/image";
import CardTag from "./CardTag";
import Anchor from "../anchor/Anchor";

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
  positionCard: string;
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
  positionCard,
}: IcardheroProps) => {
  return (
    <section className="max-w-screen-xl mx-auto py-10  px-6 lg:px-10">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <div className={`${textOrder} py-4`}>
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
          <p className="font-inter font-light max-w-60 md:max-w-xl text-xl/8 text-clean-black-10 md:text-start text-center ">
            {describe}
          </p>

          <div className="flex inset-0">
            <Anchor link="/about" text="EXPLORE" />
          </div>
        </div>
        <div>
          <div className="relative">
            <Image
              src={imagePath}
              alt="Cleaning spray icon"
              width={380}
              height={380}
              className="object-center object-cover rounded-3xl w-auto h-auto"
            />
            <div className={positionCard}>
              <CardTag cleanCycle={cleanCycle} cleanType={cleanType} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHeroBlock;
