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
    <section className="max-w-screen-xl mx-auto py-10">
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
          <p className="font-inter font-light max-w-60 md:max-w-xl text-xl/8 text-clean-black-10 md:text-start text-center ">
            {describe}
          </p>

          <div className="flex inset-0">
            <a
              className="
              relative
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              uppercase
              overflow-hidden
              backdrop-blur-lg 
              rounded-full 
              bg-clean-smoke-white
              text-clean-black-10 
              text-2xl
              font-inter
              font-light
              px-14 
              py-5 
              h-12
              w-45
              my-10
              "
            >
              <div className="overflow-hidden group">
                <div className="translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500  text-clean-black-10 ">
                  EXPLORE
                </div>
                <div className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500  text-clean-black-10 ">
                  EXPLORE
                </div>
              </div>
            </a>
          </div>
        </aside>
        <aside>
          <div className="relative">
            <Image
              src={imagePath}
              alt="Cleaning spray icon"
              width={380}
              height={380}
              className="object-center object-cover rounded-[52px]"
            />
            <div className={positionCard}>
              <CardTag cleanCycle={cleanCycle} cleanType={cleanType} />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CardHeroBlock;
