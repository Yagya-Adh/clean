import Image from "next/image";
import cleanerCardData from "@/lib/data/cleanerCardGroupData.json";

interface IcleanerCardData {
  id: number;
  title: string;
  describe: string;
  logo: string;
  color: string;
}
const data: IcleanerCardData[] = cleanerCardData;

const CleanCardGroup = () => {
  return (
    <section className="max-w-screen-sm md:max-w-screen-2xl lg:max-w-screen-3xl mx-auto px-4 md:px-4 lg:px-4 py-20">
      <div className="flex flex-col flex-wrap sm:grid sm:grid-cols-2 md:flex md:flex-row md:gap-8 lg:grid lg:grid-cols-4 justify-center gap-4 px-10 items-center">
        {data?.slice(0, 4).map((list) => (
          <div
            className={`
            flex 
            flex-col 
            rounded-2xl
            justify-center
            py-10 md:py-20
            px-10
            md:px-4            
            shadow-sm 
            animate-fadeInUp             
            ${list.color ? list.color : ""}
            `}
            key={list.id}
          >
            <Image
              src={list.logo}
              width={70}
              height={70}
              alt="clean_card_group"
            />
            <h4 className="font-light font-inter uppercase text-5xl text-clean-black-10 py-7">
              {list.title}
            </h4>
            <p className="text-clean-black-10 max-w-sm text-center text-sm sm:text-start lg:text-xl font-light font-inter tracking-wider uppercase">
              {list.describe}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CleanCardGroup;
